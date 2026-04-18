import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { Mic2, FlaskConical, Users, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const TabsSection: React.FC = () => {
   const { t } = useLanguage();

   // Unified Card Style matching BentoGrid
   const cardStyle = "bg-[#111] border border-white/10 p-8 rounded-[2rem] hover:border-white/20 transition-all duration-500 group relative overflow-hidden";
   const iconBoxStyle = "w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10";

   return (
      <section id="projects" className="py-20 bg-[#111] relative">
         <div className="container mx-auto px-4 max-w-7xl">

            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
               <div>
                  <h2 className="text-5xl font-display font-bold mb-4 text-white tracking-tight">{t.tracks.title}</h2>
                  <p className="text-gray-400 max-w-md">{t.tracks.subtitle}</p>
               </div>
            </div>

            {/* 1. Tracks Grid - 4 Items */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
               {/* Track 1: Ecosystem */}
               <div className={cardStyle}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-mint/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`${iconBoxStyle} text-brand-mint shadow-[0_0_15px_rgba(0,210,160,0.1)]`}>
                     <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">{t.tracks.track_1}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed relative z-10">{t.tracks.track_1_desc}</p>
                  <ArrowUpRight className="absolute top-8 right-8 text-gray-600 group-hover:text-white transition-colors" />
               </div>

               {/* Track 2: Ya v dele */}
               <div className={cardStyle}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`${iconBoxStyle} text-brand-yellow shadow-[0_0_15px_rgba(253,203,88,0.1)]`}>
                     <Mic2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">{t.tracks.track_2}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed relative z-10">{t.tracks.track_2_desc}</p>
                  <ArrowUpRight className="absolute top-8 right-8 text-gray-600 group-hover:text-white transition-colors" />
               </div>

               {/* Track 3: EcoCareer Lab */}
               <div className={cardStyle}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`${iconBoxStyle} text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)]`}>
                     <FlaskConical className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">{t.tracks.track_3}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed relative z-10">{t.tracks.track_3_desc}</p>
                  <ArrowUpRight className="absolute top-8 right-8 text-gray-600 group-hover:text-white transition-colors" />
               </div>

               {/* Track 4: RUDN NSO */}
               <div className={cardStyle}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`${iconBoxStyle} text-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.1)]`}>
                     <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">{t.tracks.track_4}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed relative z-10">{t.tracks.track_4_desc}</p>
                  <ArrowUpRight className="absolute top-8 right-8 text-gray-600 group-hover:text-white transition-colors" />
               </div>
            </div>

            {/* 2. Key Directions (Featured) */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="relative rounded-[2.5rem] overflow-hidden bg-[#111] border border-white/10 group"
            >
               <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-16 flex flex-col justify-center relative z-10">
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-mint/5 border border-brand-mint/20 w-fit mb-8">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-mint animate-pulse" />
                        <span className="text-brand-mint text-[10px] font-bold uppercase tracking-widest">{t.tracks.project_label}</span>
                     </div>

                     <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                        {t.tracks.project_title}
                     </h3>

                     <p className="text-gray-400 mb-10 leading-relaxed max-w-md text-sm md:text-base">
                        {t.tracks.project_desc}
                     </p>

                     <a href="https://t.me/EcoCartaMsk" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-fit">
                           {t.tracks.project_btn} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                     </a>
                  </div>

                  <div className="relative min-h-[300px] lg:min-h-full bg-[#1A1A1A] overflow-hidden">
                     <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(0,0,0,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.5)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                     <img
                        src="/images/ecocareer-logo.jpg"
                        alt="EcoCareer Lab"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover opacity-40 blur-[2px] mix-blend-luminosity group-hover:scale-105 group-hover:opacity-60 group-hover:blur-0 transition-all duration-700"
                     />

                     <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#111]/50 to-[#111]" />
                  </div>
               </div>
            </motion.div>

         </div>
      </section>
   );
};