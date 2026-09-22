interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function sendTelegramNotification(form: ContactForm): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
      signal: controller.signal,
    });

    window.clearTimeout(timeout);
    return response.ok;
  } catch {
    return false;
  }
}
