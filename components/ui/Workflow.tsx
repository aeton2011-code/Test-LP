import React from 'react';
import { Sparkles, Rocket, Lightbulb } from 'lucide-react';

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
    <section className="py-32 px-6 relative" id="workflow">
      
      <div className="container mx-auto max-w-6xl relative z-10">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 flex flex-col gap-6 items-center leading-tight">
                <span>من الفكرة إلى النتيجة..</span>
                <span className="text-text-tertiary">في 3 خطوات ذكية.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Connector Line - Fainter */}
            <div className="hidden md:block absolute top-[28%] left-10 right-10 h-0.5 bg-white/5 -z-0" />

            {steps.map((step, i) => (
                <div 
                    key={i}
                    className="relative z-10"
                >
                    <div className={`p-8 rounded-[32px] border transition-all duration-300 h-full flex flex-col items-center text-center backdrop-blur-sm ${
                        step.active 
                        ? 'bg-primary/5 border-primary/50 shadow-2xl shadow-primary/10' 
                        : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                    }`}>
                        
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors border ${
                            step.active ? 'bg-primary text-white border-primary' : 'bg-white/5 text-text-tertiary border-white/5'
                        }`}>
                            <step.icon size={28} strokeWidth={2} />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-white">
                            {step.title}
                        </h3>
                        
                        <p className="text-text-secondary text-[15px] leading-relaxed">
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