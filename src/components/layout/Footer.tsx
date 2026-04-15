import React, { useState } from 'react';
import { Send, Instagram, Linkedin, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { sendTelegramNotification } from '../../lib/telegram';
import { saveSubmission } from '../../lib/supabase';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    try {
      const [telegramOk] = await Promise.allSettled([
        sendTelegramNotification(formData),
        saveSubmission(formData),
      ]).then(results => results.map(r => r.status === 'fulfilled' && r.value));

      if (telegramOk) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer id="footer" className="pt-20 pb-10 bg-[#111] border-t border-white/5 relative overflow-hidden">
      {/* Grid background for footer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Main Content: CTA Left, Form Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16 items-start">

          {/* 1. CTA Area & Socials */}
          <div className="order-1">
            <h2 className="text-5xl md:text-6xl font-display font-bold leading-none mb-8 text-white">
              {t.footer.title_1} <br /> <span className="text-brand-mint text-shadow-glow">{t.footer.title_2}</span>
            </h2>
            <p className="text-gray-400 max-w-md mb-8">
              {t.footer.subtitle}
            </p>

            <div className="flex gap-4 mb-8 lg:mb-0">
              <a href="https://t.me/Anastasiya_Mashina" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center hover:bg-brand-mint hover:text-black hover:shadow-[0_0_20px_rgba(0,210,160,0.5)] transition-all duration-300 group cursor-pointer">
                <Send className="w-5 h-5 -ml-1 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/anastasia-mashina-12290b303" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300 cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 2. Contact Form (Now distinct and prioritized) */}
          <div className="order-2 w-full">
            <div className="bg-[#151515]/80 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">{t.footer.form_title}</h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder={t.footer.name_placeholder}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-mint text-white placeholder-gray-600 transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder={t.footer.email_placeholder}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-mint text-white placeholder-gray-600 transition-colors"
                    required
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder={t.footer.msg_placeholder}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-brand-mint text-white placeholder-gray-600 transition-colors resize-none"
                    required
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <span className="flex items-center justify-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Отправка...</span>
                  ) : status === 'sent' ? (
                    <span className="flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4" /> Отправлено!</span>
                  ) : status === 'error' ? (
                    'Ошибка, попробуйте ещё раз'
                  ) : (
                    t.footer.send_btn
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* 3. Navigation & Copyright Area (Bottom) */}
        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Horizontal Navigation */}
            <ul className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium text-sm order-2 md:order-1">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-brand-mint transition-colors">{t.nav.home}</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-brand-mint transition-colors">{t.nav.about}</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-brand-mint transition-colors">{t.nav.projects}</button></li>
              <li><button onClick={() => scrollToSection('gallery')} className="hover:text-brand-mint transition-colors">{t.nav.gallery}</button></li>
              <li><button onClick={() => scrollToSection('footer')} className="hover:text-brand-mint transition-colors">{t.nav.contact}</button></li>
            </ul>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-gray-600 order-3 md:order-2">
              <button className="hover:text-white transition-colors">{t.footer.privacy}</button>
              <button className="hover:text-white transition-colors">{t.footer.terms}</button>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-700 text-xs">
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};