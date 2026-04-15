import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const partners = [
  "/images/partners/partner-1.jpg",
  "/images/partners/partner-2.jpg",
  "/images/partners/partner-3.jpg",
  "/images/partners/partner-4.jpg",
  "/images/partners/partner-5.jpg",
  "/images/partners/partner-6.jpg",
  "/images/partners/partner-7.jpg",
  "/images/partners/partner-8.jpg",
  "/images/partners/partner-9.jpg",
  "/images/partners/partner-10.png",
  "/images/partners/partner-11.jpg",
  "/images/partners/partner-12.png",
  "/images/partners/partner-13.jpg",
  "/images/partners/partner-14.jpg",
  "/images/partners/partner-15.png",
  "/images/partners/partner-16.jpg",
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
                className="w-full h-full object-contain brightness-0 invert opacity-50 group-hover:opacity-90 transition-all duration-500"
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
