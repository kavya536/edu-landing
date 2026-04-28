import { useState, lazy, Suspense } from 'react';
import PricingPage from './PricingPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';

// Lazy load below-the-fold components
const Advantage = lazy(() => import('./components/Advantage'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Curriculum = lazy(() => import('./components/Curriculum'));
const TutorExpertise = lazy(() => import('./components/TutorExpertise'));
const Masterclass = lazy(() => import('./components/Masterclass'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

import { PrivacyPolicy, TermsOfService, RefundPolicy } from './components/LegalViews';
import { useEffect } from 'react';

// Simple loading fallback
const SectionLoader = () => <div className="h-40 flex items-center justify-center text-slate-300 font-serif italic">Loading excellence...</div>;

function App() {
  const [view, setView] = useState('landing');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'pricing') {
    return <PricingPage onBack={() => setView('landing')} />;
  }

  if (view === 'privacy') {
    return <PrivacyPolicy onBack={() => setView('landing')} />;
  }

  if (view === 'terms') {
    return <TermsOfService onBack={() => setView('landing')} />;
  }

  if (view === 'refund') {
    return <RefundPolicy onBack={() => setView('landing')} />;
  }

  return (
    <>
      <Navbar setView={setView} />

      <main className="pt-20 lg:pt-24">
        <Hero />
        <Features />
        
        <Suspense fallback={<SectionLoader />}>
          <Advantage />
          <HowItWorks />
          <Curriculum />
          <TutorExpertise />
          <Masterclass />
          <Testimonials />
          <FAQ />
          <Contact onViewPricing={() => setView('pricing')} />
          <Footer setView={setView} />
        </Suspense>
      </main>
    </>
  );
}

export default App;
