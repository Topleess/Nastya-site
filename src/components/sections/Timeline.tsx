import React, { useEffect, useMemo, useState } from 'react';
import { Calendar, CheckCircle2, Sparkles, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { achievements, Achievement, AchievementCategory } from '../../data/achievements';

type Filter = 'all' | AchievementCategory;

const categoryLabels = {
  en: { all: 'All', education: 'Education', olympiads: 'Olympiads', appreciation: 'Recognition', programs: 'Programs' },
  ru: { all: 'Все', education: 'Образование', olympiads: 'Олимпиады', appreciation: 'Благодарности', programs: 'Программы' },
  es: { all: 'Todos', education: 'Educación', olympiads: 'Olimpiadas', appreciation: 'Reconocimiento', programs: 'Programas' },
};

export const Timeline: React.FC = () => {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Achievement | null>(null);
  const labels = categoryLabels[language];

  const visibleAchievements = useMemo(() => {
    const filtered = filter === 'all'
      ? achievements
      : achievements.filter((achievement) => achievement.category === filter);

    return [...filtered].sort((a, b) => Number(b.year) - Number(a.year));
  }, [filter]);

  useEffect(() => {
    if (!selected) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selected]);

  return (
    <section className="py-20 bg-[#111]" id="achievements">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-[#111] border border-white/10 rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-mint/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                  <Sparkles className="w-3 h-3 text-brand-mint" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Achievements</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-[0.95] tracking-tight mb-5">
                  {t.awards.title}
                </h2>
                <p className="text-gray-400 leading-relaxed">{t.awards.description}</p>
              </div>

              <div className="flex flex-wrap gap-2" aria-label="Achievement categories">
                {(Object.keys(labels) as Filter[]).map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors ${filter === category ? 'bg-brand-mint text-brand-black' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                  >
                    {labels[category]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {visibleAchievements.map((achievement, index) => (
                <motion.button
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.025, 0.25) }}
                  key={`${achievement.year}-${achievement.title}`}
                  type="button"
                  onClick={() => setSelected(achievement)}
                  className="group text-left bg-[#1A1A1A] border border-white/5 hover:border-brand-mint/60 rounded-2xl p-5 min-h-36 flex flex-col justify-between transition-all hover:bg-brand-mint/5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-brand-mint text-xs font-bold tracking-widest">{achievement.year}</span>
                    <CheckCircle2 className="w-4 h-4 text-brand-mint/40 group-hover:text-brand-mint transition-colors shrink-0" />
                  </div>
                  <h3 className="mt-6 text-sm md:text-base font-semibold text-white leading-snug">{achievement.title}</h3>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 16 }}
              onClick={(event) => event.stopPropagation()}
              className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden w-full max-w-5xl max-h-[94vh] flex flex-col shadow-[0_0_50px_rgba(0,210,160,0.15)]"
            >
              <div className="flex items-start justify-between gap-6 p-5 md:p-7 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-brand-mint text-xs font-bold uppercase tracking-widest mb-2">
                    <Calendar className="w-4 h-4" />
                    {selected.year} · {labels[selected.category]}
                  </div>
                  <h3 className="text-lg md:text-2xl font-display font-bold text-white leading-tight">{selected.title}</h3>
                </div>
                <button type="button" onClick={() => setSelected(null)} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white shrink-0" aria-label="Close">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className={`overflow-y-auto p-4 md:p-6 bg-[#181818] grid gap-4 ${selected.files.length > 1 ? 'md:grid-cols-2' : ''}`}>
                {selected.files.map((file, index) => (
                  <a key={file} href={file} target="_blank" rel="noopener noreferrer" className="block relative bg-white rounded-xl overflow-hidden">
                    <img src={file} alt={`${selected.title}${selected.files.length > 1 ? ` — ${index + 1}` : ''}`} loading="lazy" decoding="async" className="w-full max-h-[68vh] object-contain" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
