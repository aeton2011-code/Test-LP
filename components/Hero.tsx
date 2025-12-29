
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-10 md:pt-48 md:pb-16 overflow-visible flex flex-col items-center justify-start font-sans perspective-1000">
      
      {/* Refined Spotlight - Ambient & Clean */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-60 z-0" />
      
      <div className="container mx-auto max-w-7xl text-center relative z-10 flex flex-col items-center px-4 md:px-6">
        
        {/* Saudi Made Badge */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] md:text-xs font-bold mb-6 backdrop-blur-md tracking-wide hover:bg-emerald-500/20 transition-colors select-none"
        >
             <span>🇸🇦 صناعة سعودية 100٪</span>
        </motion.div>

        {/* Headline - Optimized typography for single-line second sentence */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[22px] xs:text-2xl sm:text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] font-extrabold tracking-tight leading-[1.3] md:leading-[1.15] mb-6 md:mb-8 text-center w-full max-w-full md:max-w-6xl text-white drop-shadow-2xl mx-auto"
        >
          <span className="block mb-1 md:mb-2 text-white">هبوط المبيعات…</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-400 pb-2 leading-tight md:whitespace-nowrap">
            يبدأ من قرار، محتوى وتحليل خاطئ.
          </span>
        </motion.h1>

        {/* Sub-headline - Better Readability */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
           className="flex flex-col items-center max-w-3xl mx-auto mb-8 md:mb-10"
        >
            <p className="text-base md:text-xl lg:text-2xl text-zinc-300 leading-relaxed font-normal px-2 md:px-4">
                سديم يختصر عليك جيش من الموظفين، اكتب محتواك، صمم اعلاناتك، حلل متجرك، أنشئ فيديوهاتك وأكثر ... <span className="text-white font-bold decoration-primary/50 underline-offset-4 border-b-2 border-primary/50 pb-0.5">بضغطة زر.</span>
            </p>
        </motion.div>

        {/* CTAs - High Conversion Design */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 w-full sm:w-auto relative z-30"
        >
          <button className="group relative inline-flex h-12 md:h-14 lg:h-16 w-auto items-center justify-center overflow-hidden rounded-full bg-white text-black px-8 md:px-10 lg:px-12 font-bold shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-[1.02] hover:bg-gray-100 ring-4 ring-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <div className="flex items-center gap-3 relative z-10">
                <span className="text-base md:text-lg tracking-tight">اشترك الآن</span>
                <ArrowLeft size={20} className="md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
