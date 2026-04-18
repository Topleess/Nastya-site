import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const photos = [
  { id: 1, src: "/images/gallery-1.png", alt: "Event", type: "pro" },
  { id: 2, src: "/images/gallery-2.png", alt: "Speaking", type: "pro" },
  { id: 3, src: "/images/gallery-3.png", alt: "Conference", type: "pro" },
  { id: 4, src: "/images/gallery-4.png", alt: "Meeting", type: "pro" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "Community", type: "casual" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Work", type: "pro" },
  { id: 7, src: "/images/gallery-7.jpg", alt: "Field Work", type: "casual" },
];

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="gallery" className="py-20 bg-[#111]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-display font-bold mb-4 text-white tracking-tight">{t.gallery.title}</h2>
        <p className="text-gray-400 mb-12 max-w-lg">{t.gallery.subtitle}</p>

        {/* Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <div key={photo.id} className="break-inside-avoid relative group rounded-[1.5rem] overflow-hidden border border-white/10 bg-[#1a1a1a]">

              {/* Image */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />

              {/* Tech Overlay corners */}
              <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="px-3 py-1 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                  {photo.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};