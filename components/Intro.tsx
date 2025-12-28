import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Image as ImageIcon, BarChart3, MessageCircle, ArrowUpRight } from 'lucide-react';

const BentoFeatures: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10" id="features">
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-secondary mb-6">
                <Sparkles size={14} className="text-primary" />
                <span>إمكانيات لا محدودة</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                كل أدوات الوكالة.. <span className="text-text-secondary">في منصة وحدة.</span>
            </h2>
            <p className="text-text-secondary text-lg">
                صممناها لتغطي كل احتياجاتك التسويقية، من الفكرة إلى التحليل.
            </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Card 1: Creative (Large - Span 2) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 group relative rounded-[32px] bg-[#0E0E10] border border-white/10 overflow-hidden p-8 flex flex-col justify-between hover:border-primary/30 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
                
                <div className="relative z-10 max-w-md">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                        <MessageCircle size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">كاتب يفهم "لهجتنا"</h3>
                    <p className="text-text-secondary leading-relaxed">
                        مودل لغوي مدرب خصيصاً على اللهجة السعودية والخليجية. يحول النصوص الجامدة إلى إعلانات عامية، جذابة، وقريبة من القلب.
                    </p>
                </div>

                {/* Visual Demo - Chat Interface */}
                <div className="mt-8 relative w-full h-32 md:h-auto md:absolute md:bottom-8 md:left-8 md:w-[280px] bg-[#1C1C1E] border border-white/10 rounded-2xl p-4 shadow-xl">
                    <div className="flex flex-col gap-3">
                        <div className="self-end bg-primary/20 text-primary-light text-xs py-2 px-3 rounded-tr-lg rounded-bl-lg rounded-tl-lg">
                            اكتب لي إعلان قهوة ليوم التأسيس
                        </div>
                        <div className="self-start bg-white/5 text-white text-xs py-2 px-3 rounded-tl-lg rounded-br-lg rounded-tr-lg border border-white/5">
                            "تقهو وتأسس.. ☕️🇸🇦 عرضنا ليوم التأسيس ما يتفوت! خصم ٥٠٪ على كل المحاصيل."
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Card 2: Visuals (Tall) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:row-span-2 group relative rounded-[32px] bg-[#0E0E10] border border-white/10 overflow-hidden p-8 flex flex-col hover:border-purple-500/30 transition-all duration-500"
            >
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4" />

                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                    <ImageIcon size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">ستديو تصوير.. بدون مصور</h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                    صور منتجك بالجوال، وسديم يحوله لصورة احترافية بأي خلفية تبيها خلال ثواني.
                </p>

                {/* Visual Demo - Before/After simulated */}
                <div className="flex-1 w-full bg-[#151516] rounded-2xl border border-white/5 overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-80" />
                     <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                        <div className="flex items-center gap-2 text-xs text-white">
                            <Sparkles size={12} className="text-purple-400" />
                            <span>تمت المعالجة: خلفية رمضانية</span>
                        </div>
                     </div>
                </div>
            </motion.div>

            {/* Card 3: Analysis (Active) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative rounded-[32px] bg-[#0E0E10] border border-white/10 overflow-hidden p-8 flex flex-col justify-between hover:border-green-500/30 transition-all duration-500"
            >
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6 text-green-400">
                    <BarChart3 size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">مدير تسويق لا ينام</h3>
                <p className="text-text-secondary leading-relaxed">
                    تحليل فوري لحملاتك مع توصيات "وقف الهدر" أو "زد الميزانية" بناءً على الأرقام.
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-green-400 gap-1 cursor-pointer hover:text-green-300 transition-colors">
                    جرب المحلل الآن <ArrowUpRight size={16} />
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;