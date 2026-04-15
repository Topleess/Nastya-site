import React from 'react';
import { Globe, Atom, Building2, GraduationCap, Users, Trophy, LayoutTemplate } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export const BentoGrid: React.FC = () => {
  const { t } = useLanguage();

  // Unified Card Style
  const cardBase = "bg-[#111] border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between min-h-[16rem] h-full relative group hover:border-brand-mint/30 transition-all duration-300";
  const iconBase = "w-8 h-8 opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 self-end mt-4";

  return (
    <section id="about" className="py-20 bg-brand-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-display font-bold mb-12 text-white uppercase opacity-50 tracking-widest">{t.nav.about}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">

          {/* --- ROW 1 --- */}

          {/* Card 1: Expertise (wide) */}
          <motion.div whileHover={{ y: -5 }} className={`${cardBase} lg:col-span-2`}>
            <div>
              <p className="text-sm font-bold text-brand-yellow uppercase tracking-wider mb-2">{t.bento.card1_text}</p>
              <h3 className="text-xl font-display font-bold text-white leading-tight">{t.bento.card2_title}</h3>
            </div>
            <LayoutTemplate className={`${iconBase} text-brand-yellow`} />
          </motion.div>

          {/* Card 2: Scientific Basis */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">{t.bento.card3_title}</p>
              <h3 className="text-lg font-bold text-white leading-snug">{t.bento.card3_text}</h3>
            </div>
            <Atom className={`${iconBase} text-brand-mint`} />
          </motion.div>

          {/* Card 3: Applied Practice */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <h3 className="text-lg font-bold text-white leading-snug mb-2">{t.bento.card4_title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{t.bento.card4_desc}</p>
            </div>
            <Building2 className={`${iconBase} text-white`} />
          </motion.div>

          {/* Card 4: Education (Green Card) */}
          <motion.div whileHover={{ y: -5 }} className="bg-brand-mint rounded-[2rem] p-8 flex flex-col justify-between min-h-[16rem] h-full relative group hover:shadow-[0_0_30px_rgba(0,210,160,0.3)] transition-all duration-300">
            <div>
              <p className="text-xs font-bold text-brand-black/60 uppercase tracking-wider mb-2">{t.bento.row2_1_title}</p>
              <h3 className="text-xl font-bold text-brand-black leading-tight tracking-tight">
                {t.bento.row2_1_text}
              </h3>
              <p className="text-sm text-brand-black/80 mt-2 font-medium">{t.bento.row2_2_sub}</p>
            </div>
            <GraduationCap className="w-10 h-10 text-brand-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform self-end mt-4" />
          </motion.div>


          {/* --- ROW 2 --- */}

          {/* Card 5: International Expertise */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <p className="text-sm font-bold text-brand-mint uppercase tracking-wider mb-2">{t.bento.row2_3_title}</p>
              <p className="text-lg font-bold text-white leading-snug">{t.bento.row2_3_text}</p>
            </div>
            <Globe className={`${iconBase} text-brand-mint`} />
          </motion.div>

          {/* Card 6: Future Work */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <span className="text-5xl font-display font-bold text-brand-yellow leading-none tracking-tighter">{t.bento.row2_2_title}</span>
              <p className="text-sm font-bold text-white uppercase tracking-wider mt-2">{t.bento.row2_2_text}</p>
            </div>
            <div className="relative z-10 w-full mt-2">
              <p className="text-xs text-gray-400">{t.bento.row2_2_sub}</p>
            </div>
            <Users className={`${iconBase} text-brand-yellow`} />
          </motion.div>

          {/* Card 7: Recognized Result */}
          <motion.div whileHover={{ y: -5 }} className={cardBase}>
            <div>
              <p className="text-sm font-bold text-brand-mint uppercase tracking-wider mb-2">{t.bento.row2_4_title}</p>
              <h3 className="text-lg font-bold text-white leading-snug">{t.bento.row2_4_text}</h3>
              <p className="text-xs text-gray-400 mt-2">{t.bento.row2_4_desc}</p>
            </div>
            <Trophy className={`${iconBase} text-white`} />
          </motion.div>


        </div>
      </div>
    </section>
  );
};
