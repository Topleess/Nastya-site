const BOT_TOKEN = import.meta.env.VITE_TG_BOT_TOKEN || '';
const CHAT_IDS = (import.meta.env.VITE_TG_CHAT_IDS || '').split(',').filter(Boolean);

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function sendTelegramNotification(form: ContactForm): Promise<boolean> {
  if (!BOT_TOKEN || CHAT_IDS.length === 0) {
    console.warn('Telegram not configured');
    return false;
  }

  const text = [
    '📩 Новая заявка с сайта!',
    '',
    `👤 Имя: ${form.name}`,
    `📧 Email: ${form.email}`,
    `💬 Сообщение:`,
    form.message,
  ].join('\n');

  try {
    const results = await Promise.allSettled(
      CHAT_IDS.map((chatId) =>
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text,
          }),
        })
      )
    );
    return results.some((r) => r.status === 'fulfilled' && r.value.ok);
  } catch {
    return false;
  }
}
