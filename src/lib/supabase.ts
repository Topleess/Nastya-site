import { createClient } from '@supabase/supabase-js';

// TODO: Replace with real Supabase credentials
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = SUPABASE_URL && SUPABASE_ANON_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export async function saveSubmission(form: ContactForm): Promise<boolean> {
  if (!supabase) {
    console.warn('Supabase not configured — skipping save');
    return false;
  }

  const { error } = await supabase
    .from('submissions')
    .insert([{ name: form.name, email: form.email, message: form.message }]);

  if (error) {
    console.error('Supabase insert error:', error.message);
    return false;
  }
  return true;
}
