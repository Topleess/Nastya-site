import React, { useState } from 'react';
import { CheckCircle2, Sparkles, X, Trophy, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../common/Button';

// Award icon colors for visual variety in modal
const awardColors = [
  "text-green-400",
  "text-brand-mint",
  "text-brand-mint",
  "text-brand-yellow",
  "text-blue-400",
  "text-blue-400",
  "text-green-400",
  "text-purple-400",
  "text-red-400",
];

export const Timeline: React.FC = () => {
  const { t } = useLanguage();
  const [selectedAward, setSelectedAward] = useState<number | null>(null);

  const handleClose = () => setSelectedAward(null);

  return (
    <section className="py-20 bg-[#111]">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Unified Card Style: Dark with Glassmorphism */}
        <div className="bg-[#111] border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden group">

          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

          {/* Glow Effects - Strictly MINT (No Yellow) */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-mint/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-mint/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

          <div className="grid lg:grid-cols-2 gap-12 relative z-10">

            {/* Left Column: Title & Description */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-brand-mint" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Achievements</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-[0.95] tracking-tight">
                {t.awards.title}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                {t.awards.description}
              </p>
            </div>

            {/* Right Column: Tag Cloud / Items */}
            <div className="flex flex-wrap content-center gap-3">
              {t.awards.tags.map((tag, idx) => (
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  onClick={() => setSelectedAward(idx)}
                  // STRICTLY Mint hover effects. No Yellow.
                  className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-white/5 hover:border-brand-mint hover:bg-brand-mint/10 px-5 py-3 rounded-xl text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,210,160,0.2)] cursor-pointer group/tag text-left active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-mint/50 group-hover/tag:text-brand-mint transition-colors" />
                  {tag}
                </motion.button>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Media Modal */}
      <AnimatePresence>
        {selectedAward !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
              className="bg-[#111] border border-white/10 rounded-3xl overflow-hidden max-w-2xl w-full relative shadow-[0_0_50px_rgba(0,210,160,0.15)]"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white z-20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Icon Section */}
                <div className="h-64 md:h-auto relative bg-[#1A1A1A] flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />
                  <Trophy className={`w-16 h-16 ${awardColors[selectedAward % awardColors.length]} relative z-10 opacity-60`} />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4 text-brand-mint text-xs font-bold uppercase tracking-widest">
                    <Calendar className="w-4 h-4" />
                    {t.awards.details[selectedAward % t.awards.details.length].date}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight">
                    {t.awards.tags[selectedAward]}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    {t.awards.details[selectedAward % t.awards.details.length].desc}
                  </p>

                  <div className="flex gap-3">
                    <Button variant="outline" className="text-xs py-3 px-6" onClick={handleClose}>
                      Close
                    </Button>
                    {/* Optional functional button */}
                    <button className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:text-brand-mint transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};