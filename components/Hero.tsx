
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 overflow-visible min-h-[80vh] flex flex-col items-center justify-center font-sans">
      
      {/* Refined Spotlight - Ambient & Clean */}
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50 z-0" />

      <div className="container mx-auto max-w-[1280px] text-center relative z-10 flex flex-col items-center px-6">
        
        {/* Headline - Sharper & High Contrast */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-[80px] font-extrabold tracking-tight leading-[1.2] md:leading-[1.1] mb-6 md:mb-8 text-center max-w-6xl text-white drop-shadow-xl"
        >
          <span className="block">وكالتك التسويقية الكاملة..</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-white to-white/70">
            بدون فريق، بدون وكالة.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
           className="flex flex-col items-center max-w-2xl mx-auto"
        >
            <p className="text-base md:text-2xl text-zinc-400 leading-relaxed font-medium px-4">
                سديم — خلك دايم خطوة قدّام
            </p>
        </motion.div>

        {/* CTAs - Unified Primary */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-5 mt-10 md:mt-12 mb-8 relative z-30 w-full sm:w-auto px-6 sm:px-0"
        >
          {/* Primary CTA */}
          <button className="group relative inline-flex h-14 md:h-16 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-primary px-8 md:px-12 font-bold text-white shadow-[0_0_50px_-10px_rgba(0,108,217,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_70px_-15px_rgba(0,108,217,0.6)]">
            <span className="absolute inset-0 -z-10 animate-shimmer bg-[linear-gradient(110deg,#006CD9,45%,#3B82F6,55%,#006CD9)] bg-[length:200%_100%]" />
            <div className="flex items-center gap-3 relative z-10">
                <span className="text-base md:text-lg tracking-tight">ابدأ التجربة المجانية</span>
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
