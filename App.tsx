
import React, { useState } from 'react';
import Navbar from './components/ui/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/Intro'; 
import VeoSection from './components/ui/VeoSection';
import SecuritySection from './components/ui/SecuritySection';
import TokenSection from './components/TokenSection'; 
import Pricing from './components/ui/Pricing';
import Footer from './components/Footer';
import { TrustedBy, Testimonials, WhySadem } from './components/ui/SademSections';
import Workflow from './components/ui/Workflow';
import { motion, AnimatePresence } from 'framer-motion';

// Import New Pages
import Blog from './components/pages/Blog';
import HelpCenter from './components/pages/HelpCenter';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import FeaturesPage from './components/pages/FeaturesPage';
import Updates from './components/pages/Updates';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfUse from './components/pages/TermsOfUse';

type Page = 'home' | 'pricing' | 'blog' | 'help' | 'about' | 'contact' | 'features' | 'updates' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="min-h-screen bg-[#030304] text-white font-sans overflow-x-hidden relative" dir="rtl">
      
      {/* --- ATMOSPHERIC LIGHTING --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Top Center - Main Illumination */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[60vw] h-[500px] bg-primary/5 blur-[120px] rounded-[100%] opacity-30"></div>
          
          {/* Subtle Grid - Structural Feel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      <main className="relative z-10 flex flex-col items-center w-full min-h-screen">
        <AnimatePresence mode="wait">
            
            {/* HOME */}
            {currentPage === 'home' && (
              <motion.div 
                key="home"
                initial="initial" animate="animate" exit="exit" variants={pageVariants}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col gap-0"
              >
                <Hero />
                <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                <TrustedBy />
                <WhySadem />
                <Workflow />
                <BentoFeatures />
                <TokenSection />
                <VeoSection />
                <Testimonials />
                <SecuritySection />
              </motion.div>
            )}

            {/* PRICING */}
            {currentPage === 'pricing' && (
              <motion.div 
                key="pricing"
                initial="initial" animate="animate" exit="exit" variants={pageVariants}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                 <Pricing />
              </motion.div>
            )}

            {/* NEW PAGES */}
            {currentPage === 'blog' && (
                <motion.div key="blog" initial="initial" animate="animate" exit="exit" variants={pageVariants} className="w-full">
                    <Blog />
                </motion.div>
            )}

            {currentPage === 'help' && (
                <motion.div key="help" initial="initial" animate="animate" exit="exit" variants={pageVariants} className="w-full">
                    <HelpCenter />
                </motion.div>
            )}

            {currentPage === 'about' && (
                <motion.div key="about" initial="initial" animate="animate" exit="exit" variants={pageVariants} className="w-full">
                    <About />
                </motion.div>
            )}

            {currentPage === 'contact' && (
                <motion.div key="contact" initial="initial" animate="animate" exit="exit" variants={pageVariants} className="w-full">
                    <Contact />
                </motion.div>
            )}

            {currentPage === 'features' && (
                <motion.div key="features" initial="initial" animate="animate" exit="exit" variants={pageVariants} className="w-full">
                    <FeaturesPage />
                </motion.div>
            )}

            {currentPage === 'updates' && (
                <motion.div key="updates" initial="initial" animate="animate" exit="exit" variants={pageVariants} className="w-full">
                    <Updates />
                </motion.div>
            )}

            {currentPage === 'privacy' && (
                <motion.div key="privacy" initial="initial" animate="animate" exit="exit" variants={pageVariants} className="w-full">
                    <PrivacyPolicy />
                </motion.div>
            )}

            {currentPage === 'terms' && (
                <motion.div key="terms" initial="initial" animate="animate" exit="exit" variants={pageVariants} className="w-full">
                    <TermsOfUse />
                </motion.div>
            )}

        </AnimatePresence>
      </main>
      
      <Footer showCTA={currentPage === 'home'} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
