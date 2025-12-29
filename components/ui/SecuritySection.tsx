
import React from 'react';
import { ShieldCheck, Lock, Database, UserCog } from 'lucide-react';

const SecuritySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto max-w-[1000px] text-center">
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-8 border border-green-500/20">
            <ShieldCheck size={32} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            بياناتك ملكك وحدك.
        </h2>
        
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto mb-10 md:mb-16 leading-relaxed">
            نحن نلتزم بأعلى معايير الأمان العالمية. بيانات متجرك وعملائك مشفرة ولا تُستخدم أبداً في تدريب نماذج الذكاء الاصطناعي العامة.
        </p>

        <div className="grid grid-cols-3 gap-2 md:gap-8">
            <div className="p-3 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center hover:bg-white/[0.04] transition-colors">
                <Database size={20} className="text-green-400 mb-2 md:mb-5 md:w-7 md:h-7" />
                <h3 className="text-white text-xs md:text-lg font-bold mb-1 md:mb-3 text-center">بياناتك معزولة</h3>
                <p className="text-[10px] md:text-sm text-text-secondary leading-relaxed text-center hidden md:block">قاعدة بياناتك خاصة بك تماماً ولا تختلط ببيانات المتاجر الأخرى.</p>
            </div>
            <div className="p-3 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center hover:bg-white/[0.04] transition-colors">
                <Lock size={20} className="text-green-400 mb-2 md:mb-5 md:w-7 md:h-7" />
                <h3 className="text-white text-xs md:text-lg font-bold mb-1 md:mb-3 text-center">لا تُباع</h3>
                <p className="text-[10px] md:text-sm text-text-secondary leading-relaxed text-center hidden md:block">بياناتك سرية. لا نبيعها ولا نستخدمها في إعلاناتنا أو تدريب نماذجنا.</p>
            </div>
            <div className="p-3 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center hover:bg-white/[0.04] transition-colors">
                <UserCog size={20} className="text-green-400 mb-2 md:mb-5 md:w-7 md:h-7" />
                <h3 className="text-white text-xs md:text-lg font-bold mb-1 md:mb-3 text-center">تحكم كامل</h3>
                <p className="text-[10px] md:text-sm text-text-secondary leading-relaxed text-center hidden md:block">أنت من يقرر متى تربط (أو تفصل) منصات مثل تيك توك.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
