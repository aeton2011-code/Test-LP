
import React from 'react';
import { Sparkles, Rocket, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Workflow: React.FC = () => {
  const steps = [
    {
      id: "01",
      icon: Lightbulb,
      title: "أدخل الفكرة",
      desc: "ضع رابط منتجك أو اكتب فكرة حملتك. النظام يفهم السياق فوراً.",
      active: false
    },
    {
      id: "02",
      icon: Sparkles,
      title: "التحليل والمعالجة",
      desc: "يقوم سديم بتحليل الجمهور واقتراح الزوايا التسويقية الأقوى.",
      active: true
    },
    {
      id: "03",
      icon: Rocket,
      title: "التنفيذ والإطلاق",
      desc: "احصل على المحتوى جاهزاً للنشر وشاهد النتائج تتصاعد.",
      active: false
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 relative" id="workflow">
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 flex flex-col gap-2 md:gap-6 items-center leading-tight">
                <span>من الفكرة إلى النتيجة..</span>
                <span className="text-text-tertiary">في 3 خطوات ذكية.</span>
            </h2>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-8 relative">
            
            {/* Animated Connector Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[28%] left-10 right-10 h-[1px] bg-white/5 -z-0 overflow-hidden rounded-full">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent w-1/3 animate-beam" />
            </div>

            {steps.map((step, i) => (
                <div 
                    key={i}
                    className="relative z-10"
                >
                    <div className={`p-3 md:p-8 rounded-[20px] md:rounded-[32px] border transition-all duration-300 h-full flex flex-col items-center text-center backdrop-blur-sm group hover:-translate-y-2 ${
                        step.active 
                        ? 'bg-primary/5 border-primary/50 shadow-[0_0_30px_-10px_rgba(0,108,217,0.2)]' 
                        : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                    }`}>
                        
                        <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 transition-all duration-500 border relative ${
                            step.active 
                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-110' 
                            : 'bg-white/5 text-text-tertiary border-white/5 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white'
                        }`}>
                            <step.icon size={18} className="md:w-7 md:h-7" strokeWidth={2} />
                            
                            {/* Pulse effect for active step */}
                            {step.active && (
                                <span className="absolute -inset-1 rounded-2xl bg-primary/30 animate-ping" />
                            )}
                        </div>

                        <h3 className={`text-xs md:text-xl font-bold mb-2 md:mb-3 transition-colors ${step.active ? 'text-white' : 'text-zinc-400 group-hover:text-white'}`}>
                            {step.title}
                        </h3>
                        
                        <p className="text-text-secondary text-[10px] md:text-[15px] leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
