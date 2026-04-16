import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const partners = [
  "/images/partners/085e35da718151e5b8bad08a6b86edbc_d1468d568e.png",
  "/images/partners/0b9a1c78129809.5c9ba9fda8575.png",
  "/images/partners/2026-04-16_11-49-54.png",
  "/images/partners/40934154.png",
  "/images/partners/YWhweqR06gLT3Nnmlkb7Gln3etdiWYq_Ey1yBW_M493u37cmyGt0ij_h3pocb5O.jpg",
  "/images/partners/Z6ssy_xSoI8XWmBE4L331A1SZ0MwffSqrhVeIBYdhTrV5Ew964tQT6DAjli73zv.png",
  "/images/partners/__-.svg",
  "/images/partners/cae6cc2fc56f4cf5579b1b72deeef1ed.png",
  "/images/partners/chyornyj_s_krasnym_1_0a0876f5b1.png",
  "/images/partners/logo-2.svg",
  "/images/partners/logo.svg",
  "/images/partners/logocr@2x.png",
  "/images/partners/png_transparent_peoples_friendship_university_of_russia_bauman_moscow.png",
  "/images/partners/ranepa-logo.svg",
  "/images/partners/wsgs00Rd1KK0S1yv1rfvX44e7E_QA9wOvkCqX2b0JLsbJ_rOHJ3UJWV6Jot2buy.png",
];

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#111] border-y border-white/5 relative z-10 overflow-hidden py-16">
      <div className="container mx-auto px-4 mb-10">
        <p className="text-center text-xs text-gray-500 uppercase tracking-[0.3em] font-bold font-display">
          {t.partners}
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-8 lg:gap-10 items-center whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50,
            repeatType: "loop"
          }}
          style={{ width: "max-content" }}
        >
          {[...partners, ...partners].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 h-20 md:w-44 md:h-24 bg-white/[0.04] border border-white/[0.06] rounded-2xl flex items-center justify-center p-4 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-500 group"
            >
              <img
                src={src}
                alt={`Partner ${index}`}
                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#111] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#111] to-transparent z-10" />
      </div>
    </section>
  );
};
