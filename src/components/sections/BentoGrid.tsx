import React from 'react';
import { BarChart3, FileText, Globe2, Leaf, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const competenceIcons = [Leaf, FileText, BarChart3, BarChart3, BarChart3, Sprout];

const mobileTitleLines = {
  en: ['Sustainable', 'development', '— from requirements', 'to strategy'],
  ru: ['Устойчивое развитие', '— от требований', 'к стратегии'],
  es: ['Desarrollo sostenible', '— de los requisitos', 'a la estrategia'],
};

export const BentoGrid: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="relative z-10 overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="container relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-gray-400 sm:mb-6 sm:text-base">
          {t.nav.about}
        </p>

        <h2 className="max-w-6xl font-display font-extrabold uppercase leading-[0.96] tracking-[-0.045em] text-white sm:text-[clamp(2.4rem,5.1vw,4.5rem)]">
          <span className={`sm:hidden ${language === 'ru' ? 'text-[2rem]' : 'text-[1.75rem]'}`}>
            {mobileTitleLines[language].map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </span>
          <span className="hidden sm:inline">{t.about.title}</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative mt-9 overflow-hidden rounded-[2rem] border border-white/[0.14] bg-[#101212]/95 px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,.28)] sm:px-9 sm:py-10 lg:mt-10 lg:grid lg:grid-cols-[1.15fr_0.9fr] lg:gap-12 lg:px-10 lg:py-10"
        >
          <Globe2
            aria-hidden="true"
            strokeWidth={0.55}
            className="pointer-events-none absolute -right-20 -top-14 h-64 w-64 text-brand-mint opacity-[0.13] sm:-right-12 sm:-top-20 sm:h-80 sm:w-80 lg:-right-8 lg:-top-28 lg:h-96 lg:w-96"
          />

          <div className="relative z-10 lg:pr-4">
            <div className="mb-6 h-[3px] w-12 rounded-full bg-brand-yellow" />
            <div className="max-w-2xl space-y-5 text-[1.03rem] leading-[1.65] text-gray-200 sm:text-xl sm:leading-[1.6] lg:text-[1.32rem]">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>
          </div>

          <div className="relative z-10 mt-9 border-t border-white/10 pt-8 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-8">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gray-400 sm:text-sm">
              {t.about.competenciesTitle}
            </h3>

            <div className="flex flex-wrap gap-3 lg:gap-4">
              {t.about.competencies.map((competence, index) => {
                const Icon = competenceIcons[index];

                return (
                  <div
                    key={competence}
                    className="flex min-h-[3.75rem] max-w-full items-center justify-start gap-2.5 rounded-full border border-brand-mint/55 bg-brand-mint/[0.035] px-4 py-3 text-[clamp(0.65rem,2.7vw,0.78rem)] font-semibold uppercase tracking-[0.01em] text-white transition-colors hover:bg-brand-mint/[0.08] sm:gap-3 sm:px-5 sm:text-sm lg:px-6"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-brand-mint sm:h-6 sm:w-6" strokeWidth={1.8} />
                    <span className="whitespace-nowrap leading-tight">{competence}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
