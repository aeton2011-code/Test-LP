
import React from 'react';
import { Twitter, Instagram, Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';

interface FooterProps {
    showCTA?: boolean;
    onNavigate?: (page: string) => void;
}

const TikTok = ({ size = 24 }: { size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const SocialIcon = ({ icon: Icon }: { icon: React.ElementType }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all border border-white/5">
        <Icon size={18} />
    </a>
);

const Footer: React.FC<FooterProps> = ({ showCTA = true, onNavigate }) => {

  const handleNav = (target: string) => {
      if (onNavigate) {
          onNavigate(target);
          window.scrollTo(0, 0);
      }
  };

  const FooterLink = ({ target, children }: { target: string, children?: React.ReactNode }) => (
    <button 
        onClick={() => handleNav(target)} 
        className="hover:text-white transition-colors flex items-center gap-1 group w-full text-right justify-start"
    >
        {children}
        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0" />
    </button>
  );

  return (
    <footer className="relative z-50 bg-black pt-24 pb-12 border-t border-white/10" dir="rtl">
      <div className="container mx-auto px-6 max-w-[1200px]">
        
        {/* Top CTA Section */}
        {showCTA && (
        <div className="relative mb-32 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30 rounded-[40px] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between text-right overflow-hidden rounded-[40px] bg-[#0A0A0A] border border-white/10 p-12 md:p-20 shadow-2xl">
                
                {/* Background Particles/Texture */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl pointer-events-none" />

                <div className="relative z-10 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-bold mb-6">
                        <Sparkles size={16} />
                        <span>انضم للنخبة</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[1.5] tracking-tight">
                        جاهز تنقل تسويقك <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">للمستوى الجاي؟</span>
                    </h2>
                    <p className="text-[#98989D] text-lg leading-relaxed max-w-xl">
                        لا تضيع وقتك في التخمين. انضم لأكثر من 10,000 تاجر يستخدمون سديم لاتخاذ قرارات أذكى.
                    </p>
                </div>

                <div className="relative z-10 mt-10 md:mt-0 flex flex-col gap-4 min-w-[200px]">
                    <button 
                        onClick={() => handleNav('pricing')}
                        className="h-16 px-10 rounded-full bg-white text-black font-bold text-lg hover:bg-[#EDEDED] transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center gap-3"
                    >
                        <span>اشترك الآن</span>
                        <ArrowUpRight size={20} />
                    </button>
                    {/* No free trial note removed */}
                </div>
            </div>
        </div>
        )}

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-20 text-right">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start gap-6">
             <div className="flex items-center gap-3 cursor-pointer opacity-100 hover:opacity-80 transition-opacity" onClick={() => handleNav('home')}>
                <div className="w-12 h-12 text-white">
                   <svg viewBox="300 300 500 500" fill="currentColor" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path d="M497,325.4c8.8-1.8,14,2,20.3,7.3,49.7,48.5,102.4,94.1,152.4,142.3,10.1,9.8,23.8,19.2,14.7,34.7-3.6,6.2-18.2,17.1-24.2,22.8-48.1,45.8-96.6,91.2-144.8,136.9-7.8,6.7-17.1,7.8-25.5,1.5-13.8-10.6-32.2-29.3-45-41.9-10.4-10.3-14.9-14.4-13.3-30.4s6.1-29.8,9-33.9c5.3-7.5,14.6-5.1,20.8-.2s28.1,30.6,37.4,31.5,12.9-3.7,18.5-8.5c27.2-23.4,52-52,78.9-75.9,13.5-14.9-7.2-29.4-17.5-39.5-21.7-21.3-45-40.9-66.4-62.4-14.8-12.8-27.6,4.6-38,14s-14.6,17-22.5,17.6-9.4-1.8-11.7-5.3-8.1-28.3-8.6-33.3c-1.9-19.3,6-23.2,18.3-35.4s27.9-28.5,39.5-37.5c1.8-1.4,5.6-3.8,7.7-4.2Z"/>
                      <path d="M361.1,451.3c7-1.3,11.1,1,16.3,5.2,7.8,6.3,29.9,26.2,35.5,33.5,11,14.3-2.8,23-12.5,32.5-5.3,5.2-24.6,24.1-29.8,26.2s-9.1,1.6-14.1-1.3-39.2-35.7-41.5-39.4c-4.1-6.6-2.1-12.8,2.4-18.5s27.8-27.5,36-34,4.7-3.7,7.7-4.2Z"/>
                   </svg>
                </div>
                <span className="text-3xl font-bold text-white tracking-tight">Sadem</span>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
               أول منصة سعودية بالكامل للتسويق الذكي، تساعد المتاجر وصنّاع المحتوى على اتخاذ قرارات تبيع، من خلال محتوى فعال وتحليل عملي يفهم السوق..
             </p>
             <div className="flex gap-4 mt-2">
               <SocialIcon icon={Twitter} />
               <SocialIcon icon={Instagram} />
               <SocialIcon icon={Linkedin} />
               <SocialIcon icon={TikTok} />
             </div>
          </div>
          
          {/* Links Columns */}
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="text-white font-bold text-[15px] mb-6">المنتج</h4>
            <ul className="space-y-4 text-[14px] text-gray-400">
              <li><FooterLink target="features">المميزات</FooterLink></li>
              <li><FooterLink target="pricing">الأسعار</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold text-[15px] mb-6">المصادر</h4>
            <ul className="space-y-4 text-[14px] text-gray-400">
              <li><FooterLink target="blog">المدونة</FooterLink></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold text-[15px] mb-6">الشركة</h4>
            <ul className="space-y-4 text-[14px] text-gray-400">
              <li><FooterLink target="about">من نحن</FooterLink></li>
              <li><FooterLink target="contact">تواصل معنا</FooterLink></li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-[13px] text-gray-500">© 2026 Sadem Inc. Made in Riyadh, Saudi Arabia.</p>
           <div className="flex gap-8 text-[13px] text-gray-500">
              <button onClick={() => handleNav('privacy')} className="hover:text-white transition-colors">سياسة الخصوصية</button>
              <button onClick={() => handleNav('terms')} className="hover:text-white transition-colors">شروط الاستخدام</button>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
