
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
                        <span>ابدأ مجاناً</span>
                        <ArrowUpRight size={20} />
                    </button>
                    <p className="text-center text-xs text-[#6C6C70]">لا تحتاج بطاقة ائتمان</p>
                </div>
            </div>
        </div>
        )}

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 mb-20 text-right">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 flex flex-col items-start gap-6">
             <div className="w-28 h-auto opacity-100 cursor-pointer" onClick={() => handleNav('home')}>
                <svg className="w-full h-full fill-white" viewBox="0 0 1644.9 501.7" xmlns="http://www.w3.org/2000/svg">
                    <path d="M197.9,228.6c-28.9-6.6-74.8-5.6-72.9-44.2-.7-43.9,65.4-42.1,93.1-27.7,11.1,5.9,20.5,13.7,28.4,23.2l40.5-38.3c-35-45.1-102-55.3-155-39.9-99,29.5-85.9,169.6,27.7,177.8,17.3,2.4,54.7,6.6,63.5,18.8,14.1,14.8,11.2,45.1-4.9,57.4-35.5,25.7-95.2,8-122-26.6l-40.1,38.8c30.5,34.4,67.3,52.8,117,52.3,46.2.5,91.5-16.5,110-59.2,26.1-68.7-10.3-122.3-85.3-132.2v-.2Z"/>
                    <path d="M503.4,195.9c-41.2-34.9-136-29-164.3,23.7l34.2,30.8c5.7-8.1,12.7-15.1,20.9-20.9,14.8-11.8,53.7-12.3,65.9,2,11.1,9.7,10.8,32.3,10.4,47.7-35.1-.8-91.1-1.3-114.3,17.7-32.8,19.5-34.3,79.5-6.8,104.3,12.9,12.6,31.3,18.8,55.4,18.8s60.2-13.3,68.4-45.9h2.7c3.5,24.1,18.3,40.8,43.6,40.5h31.9v-46.3h-23.4c-4.2-41.5,15-144.8-24.7-172.4h.1ZM424.2,378.2c-25,.3-38-11.3-35.5-35.7-3.1-34,55.1-28.6,81.9-28.6v30.8c.1,24.5-24.1,33.4-46.3,33.5h-.1Z"/>
                    <path d="M744.2,218.4h-2.2c-8.5-28-35.5-44.4-64.8-44.1-68.7,1-91.5,54.8-91.8,122.4.3,67.8,22.8,122.3,91.8,123.3,29.4.4,56.3-16.6,64.8-44.6h2.2v39.2h57.6V81.6h-57.6v136.8ZM695.6,372.4c-55.8-1.8-50.5-53.9-49.9-95.4-2.4-48.5,48.1-70.4,84.6-45,9.3,6.9,14,16.1,14,27.5v74.7c.3,26.6-23.9,38.3-48.6,38.2h0Z"/>
                    <path d="M1009.2,183.8c-39.8-18.1-98.9-10.9-127.8,24.1-31.2,35.4-35.3,96-21.1,139.9,14.4,45.7,55,73.2,103,72.2,39.1.1,75.4-13,97.2-43.3l-31-34.7c-15.9,19.6-32.3,32.1-59.9,31.7-39,1.1-59.3-25.6-57.1-62.1h156.1c2.9-49.7-10.3-106-59.4-127.8h0ZM1008.8,276.1h-96.3c-1.7-31.6,17-59.1,49.9-58.5,33.3-.6,47.7,27.6,46.4,58.5h0Z"/>
                    <path d="M1383.1,174.4c-33.4-.7-62.2,17.6-72,47.2h-.9c-19.2-61.7-111.8-64.1-130.9-2.7h-2.2v-39.2h-57.6v234.9h57.6v-155.3c-.2-11.8,5.1-21.3,13.7-28.1,31.8-21.7,70.6-7.7,67.7,40.7v142.7h57.6v-155.3c0-11.7,4.6-21.2,13.3-28.1,31.8-21.6,71.2-8,68.2,40.7v142.7h57.6v-148.5c0-51.6-19.7-91.3-72-91.8h0Z"/>
                    <path d="M1588.8,378.7c-.3-21.2-13-33.7-36-33.3-22.5-.4-35.8,12.3-36,33.3-2.2,23.7,9.4,41.8,36,41,27.1.9,38.1-17.1,36-40.9h0Z"/>
                </svg>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                المنصة الأولى لإدارة التسويق الرقمي بالذكاء الاصطناعي، مصممة خصيصاً للسوق السعودي.
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
           <p className="text-[13px] text-gray-500">© 2026 Sadem Inc. Riyadh, Saudi Arabia.</p>
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
