
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
             <div className="w-8 h-8 md:w-6 md:h-6 bg-white rounded flex items-center justify-center">
                <div className="w-4 h-4 md:w-3 md:h-3 bg-black rounded-[2px] transform rotate-45" />
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
            <button className="text-[13px] text-white/70 hover:text-white transition-colors font-medium px-2">
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
              <button className="w-full py-4 bg-primary text-white font-bold rounded-xl mt-2 text-base active:scale-[0.98] transition-transform">
                ابدأ التجربة المجانية
              </button>
              <button className="w-full py-4 text-white/60 font-medium text-sm">
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
