import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const photos = [
  { id: 1, src: "/images/gallery/photo-1361.webp", alt: "Speaking at a conference" },
  { id: 2, src: "/images/gallery/photo-1362.webp", alt: "Professional meeting" },
  { id: 3, src: "/images/gallery/photo-1363.webp", alt: "Community event" },
  { id: 4, src: "/images/gallery/photo-1364.webp", alt: "International reception" },
  { id: 5, src: "/images/gallery/photo-1365.webp", alt: "Industry exhibition" },
  { id: 6, src: "/images/gallery/photo-1366.webp", alt: "Professional networking" },
  { id: 7, src: "/images/gallery/photo-1367.webp", alt: "Public talk" },
  { id: 8, src: "/images/gallery/photo-1368.webp", alt: "Startup presentation" },
  { id: 9, src: "/images/gallery/photo-1369.webp", alt: "BreakPoint forum" },
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
                className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale group-hover:grayscale-0"
              />

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
