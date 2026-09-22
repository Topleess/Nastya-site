import React from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-12 overflow-hidden bg-[#111]">
      {/* Reference Background Style: Tech Grid & Glows */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,160,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,160,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

        {/* Large Soft Blobs - ENHANCED */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-mint/20 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 z-10 flex items-center justify-center">

        {/* Text Content */}
        <div className="text-center space-y-8 relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-brand-mint/20 bg-brand-mint/5 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(0,210,160,0.1)]">
              <span className="text-brand-mint font-medium text-sm tracking-wider uppercase">{t.hero.role}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[clamp(2.5rem,3.8vw,5rem)] font-display font-black leading-[0.9] text-white tracking-tighter mb-6">
              {t.hero.name_first} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">{t.hero.name_second}</span>
            </h1>

            <p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="primary" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.hero.cta_primary} <ArrowDownCircle className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
