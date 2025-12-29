
import React from 'react';
import { Play, Image as ImageIcon, Sparkles, Wand2, ArrowLeft } from 'lucide-react';

const VeoSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 relative overflow-hidden bg-[#030304]">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030304] to-[#030304] pointer-events-none" />
      
      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
            
            {/* Text Side */}
            <div className="flex-1 text-center lg:text-right order-2 lg:order-1">
                <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                    صورك الجامدة.. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-white">صارت تتحرك.</span>
                </h2>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
                    حول صور منتجاتك الثابتة إلى فيديوهات سينمائية متحركة (Cinematic Motion). 
                    تقنية ذكية تفهم سياق الصورة وتضيف حركة طبيعية تلفت الأنظار في الإعلانات.
                </p>
            </div>

            {/* Visual Side - Side by Side Comparison */}
            <div className="flex-1 w-full order-1 lg:order-2">
                <div className="relative p-2 md:p-4 bg-[#0E0E10] border border-white/10 rounded-[24px] md:rounded-[40px] shadow-2xl overflow-hidden">
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-20 h-20 bg-primary/20 blur-2xl -z-0"></div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 bg-purple-500/20 blur-2xl -z-0"></div>

                    {/* Comparison Container - Forced Row on Mobile */}
                    <div className="flex flex-row gap-2 md:gap-4 relative z-10 h-[220px] xs:h-[250px] sm:h-[500px]">
                        
                        {/* 1. BEFORE (Static) */}
                        <div className="flex-1 relative h-full bg-[#1A1A1C] rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group">
                            <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-black/60 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold text-zinc-400 flex items-center gap-1 md:gap-1.5 z-10 border border-white/5">
                                <ImageIcon size={10} className="md:w-3 md:h-3" />
                                قبل
                            </div>
                            
                            {/* Static Full Image */}
                            <img 
                                src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=800&auto=format&fit=crop" 
                                alt="Static Product" 
                                className="absolute inset-0 w-full h-full object-cover opacity-90"
                            />
                        </div>

                        {/* Arrow Indicator - Centered */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-white text-black p-1 md:p-2 rounded-full shadow-lg border-2 md:border-4 border-[#0E0E10] flex transform scale-75 md:scale-100">
                             <ArrowLeft size={16} className="md:w-5 md:h-5" />
                        </div>

                        {/* 2. AFTER (Motion Result - Static Preview) */}
                        <div className="flex-1 relative h-full bg-black rounded-xl md:rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_30px_rgba(0,108,217,0.15)]">
                             <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-primary/20 backdrop-blur-md border border-primary/20 px-2 py-1 md:px-3 md:py-1.5 rounded-lg text-[10px] md:text-xs font-bold text-primary flex items-center gap-1 md:gap-1.5 z-20">
                                <Play size={10} fill="currentColor" className="md:w-3 md:h-3" />
                                بعد
                            </div>

                            {/* Static Image representing video */}
                            <img 
                                src="https://images.unsplash.com/photo-1605733513597-a8f8341084e6?q=80&w=800&auto=format&fit=crop"
                                alt="Moving Product"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Play Overlay */}
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <div className="w-8 h-8 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                     <Play size={14} fill="white" className="text-white ml-0.5 md:ml-1 md:w-7 md:h-7" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default VeoSection;
