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
        <Hero />
        <TrustBar />
        <BentoGrid />
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
