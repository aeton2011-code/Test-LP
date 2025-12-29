
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: any) => void;
  currentPage: any;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    setMobileMenu(false);
    if (target === 'pricing') onNavigate('pricing');
    else if (target === 'home') onNavigate('home');
    else {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
            const element = document.querySelector(target);
            if(element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(target);
        if(element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'المنظومة', target: '#layers' },
    { name: 'لماذا سديم؟', target: '#comparison' },
    { name: 'آراء العملاء', target: '#testimonials' },
  ];

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`
            w-full max-w-[900px] h-14 md:h-12 rounded-full px-4
            flex items-center justify-between
            transition-all duration-300 pointer-events-auto
            ${scrolled || mobileMenu
              ? 'bg-[#0E0E10]/90 backdrop-blur-2xl border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
              : 'bg-transparent border border-transparent'}
          `}
        >
          {/* Logo - Tech & Minimal */}
          <div className="flex items-center cursor-pointer gap-2" onClick={(e) => handleLinkClick(e, 'home')}>
             <div className="w-8 h-8 md:w-6 md:h-6 text-white">
                <svg viewBox="300 300 500 500" fill="currentColor" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M497,325.4c8.8-1.8,14,2,20.3,7.3,49.7,48.5,102.4,94.1,152.4,142.3,10.1,9.8,23.8,19.2,14.7,34.7-3.6,6.2-18.2,17.1-24.2,22.8-48.1,45.8-96.6,91.2-144.8,136.9-7.8,6.7-17.1,7.8-25.5,1.5-13.8-10.6-32.2-29.3-45-41.9-10.4-10.3-14.9-14.4-13.3-30.4s6.1-29.8,9-33.9c5.3-7.5,14.6-5.1,20.8-.2s28.1,30.6,37.4,31.5,12.9-3.7,18.5-8.5c27.2-23.4,52-52,78.9-75.9,13.5-14.9-7.2-29.4-17.5-39.5-21.7-21.3-45-40.9-66.4-62.4-14.8-12.8-27.6,4.6-38,14s-14.6,17-22.5,17.6-9.4-1.8-11.7-5.3-8.1-28.3-8.6-33.3c-1.9-19.3,6-23.2,18.3-35.4s27.9-28.5,39.5-37.5c1.8-1.4,5.6-3.8,7.7-4.2Z"/>
                  <path d="M361.1,451.3c7-1.3,11.1,1,16.3,5.2,7.8,6.3,29.9,26.2,35.5,33.5,11,14.3-2.8,23-12.5,32.5-5.3,5.2-24.6,24.1-29.8,26.2s-9.1,1.6-14.1-1.3-39.2-35.7-41.5-39.4c-4.1-6.6-2.1-12.8,2.4-18.5s27.8-27.5,36-34,4.7-3.7,7.7-4.2Z"/>
                </svg>
             </div>
             <span className="font-bold text-lg md:text-base tracking-tight text-white">Sadem</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a 
                key={i} 
                href={link.target.startsWith('#') ? link.target : undefined}
                onClick={(e) => handleLinkClick(e, link.target)}
                className="px-4 py-1.5 text-[13px] text-text-secondary hover:text-white transition-colors font-medium cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a 
                onClick={(e) => handleLinkClick(e, 'pricing')}
                className={`px-4 py-1.5 text-[13px] transition-colors font-medium cursor-pointer ${
                    currentPage === 'pricing' ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
            >
                الأسعار
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
                className="text-[13px] transition-colors font-medium px-2 text-white/50 cursor-default"
            >
              دخول
            </button>
            <button 
                onClick={(e) => handleLinkClick(e, 'pricing')}
                className="h-8 px-4 bg-white text-black hover:bg-[#EDEDED] rounded-full text-[12px] font-bold transition-all hover:scale-105"
            >
               جرب الآن
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white ml-2 active:bg-white/10" onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed inset-x-4 top-24 rounded-[24px] bg-[#0E0E10]/95 backdrop-blur-xl border border-white/10 z-50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-2 space-y-1">
              {navLinks.map((link, i) => (
                <a 
                  key={i} 
                  onClick={(e) => handleLinkClick(e, link.target)}
                  className="text-base font-medium text-white/90 hover:text-white active:bg-white/5 p-4 rounded-xl transition-all text-center"
                >
                  {link.name}
                </a>
              ))}
              <a 
                  onClick={(e) => handleLinkClick(e, 'pricing')}
                  className={`text-base font-medium p-4 rounded-xl transition-all text-center ${
                    currentPage === 'pricing' ? 'text-white bg-white/5' : 'text-white/90 active:bg-white/5'
                  }`}
              >
                  الأسعار
              </a>
              <div className="h-px bg-white/10 my-2 mx-4" />
              <button 
                onClick={(e) => handleLinkClick(e, 'pricing')}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl mt-2 text-base active:scale-[0.98] transition-transform"
              >
                اشترك الآن
              </button>
              <button 
                  className="w-full py-4 text-white/40 font-medium text-sm cursor-default"
              >
                تسجيل الدخول
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
