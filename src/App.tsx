import React from 'react';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { BentoGrid } from './components/sections/BentoGrid';
import { TabsSection } from './components/sections/TabsSection';
import { Gallery } from './components/sections/Gallery';
import { Timeline } from './components/sections/Timeline';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { LanguageProvider } from './context/LanguageContext';

function AppContent() {
  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-mint selection:text-brand-black overflow-x-hidden">
      <Header />
      <main>
        <div className="relative overflow-hidden bg-[#111]">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,210,160,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,210,160,.03) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          <div className="pointer-events-none absolute -right-[20rem] -top-[12rem] h-[52rem] w-[52rem] rounded-full bg-brand-mint/20 blur-[150px] mix-blend-screen" />
          <div className="pointer-events-none absolute -left-[18rem] top-[55vh] h-[46rem] w-[46rem] rounded-full bg-brand-yellow/[0.09] blur-[140px]" />

          <Hero />
          <TrustBar />
          <BentoGrid />
        </div>
        <TabsSection />
        <Gallery />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
