
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon, Flame, MessageSquare, Layers, TrendingUp, Hash, Eye } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10 bg-[#030304]" id="features">
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Structured Grid - Cleaner Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* 1. Large Feature: The "Brain" (Content & Strategy) */}
            <div className="lg:col-span-2 bg-[#0E0E10] border border-white/5 rounded-[32px] p-8 md:p-12 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                
                <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 text-center md:text-right">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary mx-auto md:mx-0">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            المحرك اللغوي الذكي
                        </h3>
                        <p className="text-text-secondary text-lg leading-relaxed mb-8">
                            نظامنا مزود بـ (System Instructions) معقدة تفرض عليه التحدث كخبير تسويق محترف.
                            يكتب لك سكربتات، هوكات، وردود على العملاء بلهجات عربية متعددة (فصحى، عامية، محلية) ويفهم نفسية العميل.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                             <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-zinc-300 border border-white/5">تكتيكات نفسية (FOMO)</span>
                             <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-zinc-300 border border-white/5">لهجات متعددة</span>
                             <span className="px-3 py-1 rounded-lg bg-white/5 text-xs text-zinc-300 border border-white/5">شخصيات كتابة (Personas)</span>
                        </div>
                    </div>
                    
                    {/* Visual: Chat Simulation */}
                    <div className="flex-1 w-full max-w-md bg-[#151516] border border-white/10 rounded-2xl p-4 shadow-2xl">
                         <div className="flex flex-col gap-4 text-sm">
                            {/* User Bubble */}
                            <div className="self-end bg-primary text-white py-2.5 px-4 rounded-2xl rounded-tr-sm max-w-[85%]">
                                أبي هوك قوي لفيديو عطور، مدته 3 ثواني
                            </div>
                            
                            {/* AI Processing Indicator */}
                            <div className="self-start flex gap-1 ml-2">
                                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" />
                                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                                <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </div>

                            {/* Sadem Bubble */}
                            <div className="self-start bg-white/5 border border-white/5 text-zinc-200 py-3 px-4 rounded-2xl rounded-tl-sm max-w-[90%] leading-relaxed">
                                <span className="text-primary font-bold block mb-1 text-xs">سديم AI</span>
                                "تبي الصدق؟ 🤨 <br/>
                                عطرك هذا هو السبب إن محد سألك 'وش عطرك؟'.. تبي تعرف ليش؟"
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* 2. Feature: Ad Vision (Analysis) */}
            <div className="bg-[#0E0E10] border border-white/5 rounded-[32px] p-8 overflow-hidden relative group hover:border-purple-500/20 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 relative z-10">
                    <Eye size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">تحليل الإعلان (Ad Vision)</h3>
                <p className="text-text-secondary leading-relaxed mb-8 relative z-10">
                    ارفع الفيديو قبل النشر، وسديم يعطيك تقرير شامل: الجودة البصرية، قوة الهوك، والأهم.. <strong>"خريطة الملل" (Boredom Map)</strong> اللي تعلمك متى العميل بيسوي سكيب.
                </p>
                
                {/* Visual: Analysis Grid */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-[10px] text-zinc-500 block mb-1">قوة الهوك</span>
                        <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[90%]"></div>
                        </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-[10px] text-zinc-500 block mb-1">نسبة الملل</span>
                        <div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                            <div className="h-full bg-red-500 w-[15%]"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Feature: Trend Hunter */}
            <div className="bg-[#0E0E10] border border-white/5 rounded-[32px] p-8 overflow-hidden relative group hover:border-orange-500/20 transition-colors">
                 <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400 relative z-10">
                    <Flame size={24} fill="currentColor" className="animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">صائد الترندات</h3>
                <p className="text-text-secondary leading-relaxed mb-8 relative z-10">
                    لا تدور الترند، خله يجيك. سديم يراقب السوشيال ميديا ويعلمك "وش الهبة" اليوم في منطقتك ويربطها بمنتجك فوراً قبل ما تبرد.
                </p>

                {/* Visual: Trend Alert */}
                <div className="bg-[#151516] border border-white/5 rounded-xl p-4 mt-auto relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp size={14} className="text-orange-500" />
                        <span className="text-xs font-bold text-zinc-300">الترندات اليوم 🔥</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1"
                        >
                            <Hash size={10} />
                            الجمعة_البيضاء
                        </motion.div>
                         <motion.div 
                             initial={{ scale: 0.9, opacity: 0 }}
                             whileInView={{ scale: 1, opacity: 1 }}
                             transition={{ delay: 0.4 }}
                             className="bg-white/5 border border-white/10 text-zinc-400 px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-1"
                         >
                            <Hash size={10} />
                            عام_جديد
                        </motion.div>
                    </div>

                    {/* Notification Toast simulation */}
                    <div className="absolute bottom-2 left-2 right-2 bg-[#222] border border-white/10 p-2 rounded-lg flex items-center gap-2 shadow-lg transform translate-y-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[10px] text-zinc-400">فرصة: اربط منتجك بـ #الجمعة_البيضاء</span>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
