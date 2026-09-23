import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

type Partner = {
  src: string;
  alt: string;
  darken?: boolean;
  darkCard?: boolean;
};

const partnerRows: Partner[][] = [
  [
    { src: '/images/partners/085e35da718151e5b8bad08a6b86edbc_d1468d568e.webp', alt: 'Я — профессионал' },
    { src: '/images/partners/0b9a1c78129809.5c9ba9fda8575.webp', alt: 'Россия — страна возможностей' },
    { src: '/images/partners/cae6cc2fc56f4cf5579b1b72deeef1ed.webp', alt: 'Экологический фонд' },
    { src: '/images/partners/chyornyj_s_krasnym_1_0a0876f5b1.webp', alt: 'Твой ход' },
    { src: '/images/partners/logo-2.webp', alt: 'Росконгресс' },
  ],
  [
    { src: '/images/partners/png_transparent_peoples_friendship_university_of_russia_bauman_moscow.webp', alt: 'РУДН' },
    { src: '/images/partners/ranepa-logo.webp', alt: 'Президентская академия' },
    { src: '/images/partners/YWhweqR06gLT3Nnmlkb7Gln3etdiWYq_Ey1yBW_M493u37cmyGt0ij_h3pocb5O.webp', alt: 'Pro mentor' },
    { src: '/images/partners/wsgs00Rd1KK0S1yv1rfvX44e7E_QA9wOvkCqX2b0JLsbJ_rOHJ3UJWV6Jot2buy.webp', alt: 'Наставник' },
    { src: '/images/partners/40934154.webp', alt: 'МУИ' },
  ],
  [
    { src: '/images/partners/Z6ssy_xSoI8XWmBE4L331A1SZ0MwffSqrhVeIBYdhTrV5Ew964tQT6DAjli73zv.webp', alt: 'Экологическая инициатива' },
    { src: '/images/partners/__-.webp', alt: 'Экосистема', darken: true },
    { src: '/images/partners/logo.webp', alt: 'Я в деле', darkCard: true },
    { src: '/images/partners/logocr@2x.webp', alt: 'Центр развития', darken: true },
    { src: '/images/partners/2026-04-16_11-49-54.webp', alt: 'Collectors club' },
  ],
];

const LogoCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => (
  <div
    className={`flex h-[5.75rem] w-56 shrink-0 items-center justify-center rounded-[1.4rem] border px-7 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.16)] sm:h-28 sm:w-72 lg:h-32 lg:w-80 lg:px-9 ${
      partner.darkCard
        ? 'border-white/10 bg-[#202020]'
        : index % 3 === 2
          ? 'border-black/5 bg-[#e9fff8]'
          : 'border-black/5 bg-[#f4f3ef]'
    }`}
  >
    <img
      src={partner.src}
      alt={partner.alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-contain ${partner.darken ? 'brightness-0' : ''}`}
    />
  </div>
);

const LogoRow: React.FC<{
  partners: Partner[];
  direction: 'left' | 'right';
  duration: number;
  offsetClass?: string;
}> = ({ partners, direction, duration, offsetClass = '' }) => {
  const reduceMotion = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${offsetClass}`}>
      <motion.div
        className="flex w-max will-change-transform"
        initial={{ x: direction === 'left' ? '0%' : '-50%' }}
        animate={
          reduceMotion
            ? undefined
            : { x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }
        }
        transition={{ duration, ease: 'linear', repeat: Infinity }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={group === 1}>
            {partners.map((partner, index) => (
              <LogoCard key={`${partner.src}-${group}`} partner={partner} index={index + group} />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 overflow-hidden border-y border-white/[0.06] bg-[#0d0f0f] py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container relative mx-auto mb-9 px-5 sm:mb-12 lg:px-8">
        <h2 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] font-extrabold uppercase leading-none tracking-[-0.045em] text-white">
          {t.partners}
        </h2>
      </div>

      <div className="relative space-y-3 sm:space-y-4">
        <LogoRow partners={partnerRows[0]} direction="left" duration={28} offsetClass="-ml-20" />
        <LogoRow partners={partnerRows[1]} direction="right" duration={32} offsetClass="-ml-8" />
        <LogoRow partners={partnerRows[2]} direction="left" duration={25} offsetClass="-ml-32" />

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#0d0f0f] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#0d0f0f] to-transparent sm:w-24" />
      </div>
    </section>
  );
};
