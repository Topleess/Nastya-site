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

      <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left space-y-8 relative">
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

            <p className="text-base md:text-lg text-gray-400 font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button variant="primary" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>
              {t.hero.cta_primary} <ArrowDownCircle className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Image - Frameless Cutout Style */}
        <div className="order-1 lg:order-2 flex justify-center relative mt-10 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[600px] flex justify-center items-end"
          >
            {/* 1. Large Main Glow Behind Subject - REMOVED to identify shadow source */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-mint/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow" /> */}

            {/* 2. Secondary Shape (Abstract) - COMMENTED OUT */}
            {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-20 text-brand-mint/10 animate-pulse-slow opacity-60">
              <path fill="currentColor" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.6,31.7C59,41.9,47.1,49.5,35.4,56.3C23.7,63.1,12.1,69.1,-0.9,70.7C-13.9,72.3,-26.6,69.4,-38,62.5C-49.4,55.6,-59.5,44.7,-68.1,32.2C-76.7,19.7,-83.8,5.6,-81.9,-7.4C-80,-20.4,-69.1,-32.3,-57.4,-41.8C-45.7,-51.3,-33.2,-58.4,-20.8,-66.4C-8.4,-74.4,3.9,-83.3,16.8,-83.8C29.7,-84.3,43.2,-76.4,44.7,-76.4Z" transform="translate(100 100)" />
            </svg> */}

            {/* 3. The Cutout Image */}
            <img
              src="/images/hero-main.png"
              alt="Anastasia Mashina"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="relative z-10 w-auto h-[450px] md:h-[600px] object-contain"
            />

            {/* 4. Bottom Fade - REMOVED */}
            {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111] to-transparent z-20 pointer-events-none" /> */}

            {/* Decorative Elements */}
            <div className="absolute top-20 right-10 w-20 h-20 border border-brand-mint/30 rounded-full z-0 opacity-50 dashed-circle" />
            <div className="absolute bottom-40 -left-10 w-4 h-4 bg-brand-yellow rounded-full z-20 glow-yellow" />

          </motion.div>
        </div>
      </div>
    </section>
  );
};