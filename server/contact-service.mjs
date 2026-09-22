import http from 'node:http';
import https from 'node:https';

const PORT = Number(process.env.PORT || 3100);
const BOT_TOKEN = (process.env.TG_BOT_TOKEN || '').trim();
const CHAT_IDS = (process.env.TG_CHAT_IDS || '')
  .split(',')
  .map((id) => id.trim())
  .filter(Boolean);

if (!BOT_TOKEN) throw new Error('TG_BOT_TOKEN is not configured');
if (CHAT_IDS.length === 0) throw new Error('TG_CHAT_IDS is not configured');

const limits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function json(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  });
  res.end(JSON.stringify(payload));
}

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  return req.socket.remoteAddress || 'unknown';
}

function rateLimited(ip) {
  const now = Date.now();
  const current = limits.get(ip);
  if (!current || now - current.startedAt > WINDOW_MS) {
    limits.set(ip, { startedAt: now, count: 1 });
    return false;
  }
  current.count += 1;
  return current.count > MAX_REQUESTS;
}

function telegramSend(chatId, text) {
  return new Promise((resolve) => {
    const body = JSON.stringify({ chat_id: chatId, text });
    const request = https.request({
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
      timeout: 10000,
    }, (response) => {
      let responseBody = '';
      response.on('data', (chunk) => { responseBody += chunk; });
      response.on('end', () => {
        resolve({ ok: response.statusCode >= 200 && response.statusCode < 300, status: response.statusCode, body: responseBody });
      });
    });

    request.on('timeout', () => request.destroy(new Error('Telegram request timed out')));
    request.on('error', (error) => resolve({ ok: false, error: error.message }));
    request.end(body);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    return json(res, 200, { ok: true, recipients: CHAT_IDS.length });
  }

  if (req.method !== 'POST' || req.url !== '/api/contact') {
    return json(res, 404, { ok: false });
  }

  const ip = clientIp(req);
  if (rateLimited(ip)) {
    return json(res, 429, { ok: false, error: 'Too many requests' });
  }

  let raw = '';
  let tooLarge = false;

  req.on('data', (chunk) => {
    raw += chunk;
    if (raw.length > 32768) {
      tooLarge = true;
      req.destroy();
    }
  });

  req.on('end', async () => {
    if (tooLarge) return;

    try {
      const payload = JSON.parse(raw || '{}');
      const name = String(payload.name || '').trim();
      const email = String(payload.email || '').trim();
      const message = String(payload.message || '').trim();

      if (!name || !email || !message || name.length > 120 || email.length > 254 || message.length > 4000) {
        return json(res, 400, { ok: false, error: 'Invalid form data' });
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return json(res, 400, { ok: false, error: 'Invalid email' });
      }

      const text = [
        '📩 Новая заявка с сайта!',
        '',
        `👤 Имя: ${name}`,
        `📧 Email: ${email}`,
        '',
        '💬 Сообщение:',
        message,
      ].join('\n');

      const results = await Promise.all(CHAT_IDS.map((chatId) => telegramSend(chatId, text)));
      const delivered = results.filter((result) => result.ok).length;

      if (delivered !== CHAT_IDS.length) {
        console.error('Telegram delivery failed', results.map(({ ok, status, error }) => ({ ok, status, error })));
        return json(res, 502, { ok: false, delivered, recipients: CHAT_IDS.length });
      }

      console.log(`Contact form delivered to ${delivered} recipient(s)`);
      return json(res, 200, { ok: true });
    } catch (error) {
      console.error('Contact form error', error);
      return json(res, 400, { ok: false, error: 'Bad request' });
    }
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Contact service listening on 127.0.0.1:${PORT} for ${CHAT_IDS.length} recipient(s)`);
});
