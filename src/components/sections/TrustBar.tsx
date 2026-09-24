import React, { useLayoutEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

type Partner = {
  src: string;
  alt: string;
  darken?: boolean;
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
    { src: '/images/partners/rudn-clean.webp', alt: 'РУДН' },
    { src: '/images/partners/ranepa-logo.webp', alt: 'Президентская академия' },
    { src: '/images/partners/YWhweqR06gLT3Nnmlkb7Gln3etdiWYq_Ey1yBW_M493u37cmyGt0ij_h3pocb5O.webp', alt: 'Pro mentor' },
    { src: '/images/partners/wsgs00Rd1KK0S1yv1rfvX44e7E_QA9wOvkCqX2b0JLsbJ_rOHJ3UJWV6Jot2buy.webp', alt: 'Наставник' },
    { src: '/images/partners/40934154.webp', alt: 'МУИ' },
  ],
  [
    { src: '/images/partners/Z6ssy_xSoI8XWmBE4L331A1SZ0MwffSqrhVeIBYdhTrV5Ew964tQT6DAjli73zv.webp', alt: 'Экологическая инициатива' },
    { src: '/images/partners/__-.webp', alt: 'Экосистема', darken: true },
    { src: '/images/partners/ya-v-dele-dark.webp', alt: 'Я в деле' },
    { src: '/images/partners/logocr@2x.webp', alt: 'Центр развития', darken: true },
    { src: '/images/partners/2026-04-16_11-49-54.webp', alt: 'Collectors club' },
  ],
];

const LogoCard: React.FC<{ partner: Partner }> = ({ partner }) => (
  <div
    className="flex h-[5.75rem] w-56 shrink-0 items-center justify-center rounded-[1.4rem] border border-black/5 bg-[#f4f3ef] px-7 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.16)] sm:h-28 sm:w-72 lg:h-32 lg:w-80 lg:px-9"
  >
    <img
      src={partner.src}
      alt={partner.alt}
      loading="lazy"
      decoding="async"
      draggable={false}
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
  const viewportRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const pausedUntilRef = useRef(0);
  const draggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartYRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const touchHorizontalRef = useRef(false);

  const pauseAutoScroll = (delay = 2400) => {
    pausedUntilRef.current = performance.now() + delay;
  };

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = viewport?.firstElementChild as HTMLElement | null;

    if (!viewport || !track) return;

    const groupWidth = track.scrollWidth / 3;
    viewport.scrollLeft = groupWidth;
    positionRef.current = groupWidth;

    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      // iOS can deliver RAF at a lower/variable rate while the page is scrolling.
      // Keep a fractional logical position and allow wider frame gaps so the
      // marquee speed stays constant instead of becoming almost imperceptible.
      const elapsedSeconds = Math.min((currentTime - previousTime) / 1000, 0.25);
      previousTime = currentTime;

      const currentGroupWidth = track.scrollWidth / 3;

      if (currentGroupWidth > 0) {
        if (currentTime < pausedUntilRef.current) {
          // Native touch scrolling owns the viewport while paused.
          positionRef.current = viewport.scrollLeft;
        } else if (!reduceMotion) {
          const distance = (currentGroupWidth / duration) * elapsedSeconds;
          positionRef.current += direction === 'left' ? distance : -distance;
        }

        if (positionRef.current < currentGroupWidth * 0.25) {
          positionRef.current += currentGroupWidth;
        } else if (positionRef.current > currentGroupWidth * 1.75) {
          positionRef.current -= currentGroupWidth;
        }

        viewport.scrollLeft = positionRef.current;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [direction, duration, reduceMotion]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartXRef.current = event.clientX;
    dragStartYRef.current = event.clientY;
    touchHorizontalRef.current = false;

    if (event.pointerType === 'touch') {
      return;
    } else {
      pauseAutoScroll();
      draggingRef.current = true;
      dragStartScrollRef.current = event.currentTarget.scrollLeft;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') {
      const deltaX = Math.abs(event.clientX - dragStartXRef.current);
      const deltaY = Math.abs(event.clientY - dragStartYRef.current);

      if (deltaX > 8 && deltaX > deltaY) {
        touchHorizontalRef.current = true;
        pauseAutoScroll();
      }

      return;
    }

    if (!draggingRef.current) return;

    event.preventDefault();
    event.currentTarget.scrollLeft =
      dragStartScrollRef.current - (event.clientX - dragStartXRef.current);
    pauseAutoScroll();
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') {
      if (touchHorizontalRef.current) pauseAutoScroll();
      touchHorizontalRef.current = false;
      return;
    }

    draggingRef.current = false;
    pauseAutoScroll();

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={viewportRef}
      className={`relative cursor-grab select-none overflow-x-auto overscroll-x-contain active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${offsetClass}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onPointerCancel={handlePointerEnd}
      onWheel={() => pauseAutoScroll()}
    >
      <div className="flex w-max">
        {[0, 1, 2].map((group) => (
          <div key={group} className="flex gap-3 pr-3 sm:gap-4 sm:pr-4" aria-hidden={group !== 1}>
            {partners.map((partner) => (
              <LogoCard key={`${partner.src}-${group}`} partner={partner} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="container relative mx-auto mb-9 px-5 sm:mb-12 lg:px-8">
        <h2 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] font-extrabold uppercase leading-none tracking-[-0.045em] text-white">
          {t.partners}
        </h2>
      </div>

      <div className="relative">
        <div className="space-y-3 sm:space-y-4">
          <LogoRow partners={partnerRows[0]} direction="left" duration={28} offsetClass="-ml-20" />
          <LogoRow partners={partnerRows[1]} direction="right" duration={32} offsetClass="-ml-8" />
          <LogoRow partners={partnerRows[2]} direction="left" duration={25} offsetClass="-ml-32" />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[clamp(4.5rem,18vw,18rem)]"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,.96) 0%, rgba(0,0,0,.66) 30%, rgba(0,0,0,.28) 62%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[clamp(4.5rem,18vw,18rem)]"
          style={{
            background:
              'linear-gradient(to left, rgba(0,0,0,.96) 0%, rgba(0,0,0,.66) 30%, rgba(0,0,0,.28) 62%, rgba(0,0,0,0) 100%)',
          }}
        />
      </div>
    </section>
  );
};
