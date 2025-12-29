
import React from 'react';
import { ShieldCheck, Lock, Database, UserCog } from 'lucide-react';

const SecuritySection: React.FC = () => {
  return (
    <section className="py-24 px-6 border-t border-white/5 bg-[#050505]">
      <div className="container mx-auto max-w-[1000px] text-center">
        
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-8 border border-green-500/20">
            <ShieldCheck size={32} />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            بياناتك ملكك وحدك.
        </h2>
        
        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            نحن نلتزم بأعلى معايير الأمان العالمية. بيانات متجرك وعملائك مشفرة ولا تُستخدم أبداً في تدريب نماذج الذكاء الاصطناعي العامة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center hover:bg-white/[0.04] transition-colors">
                <Database size={28} className="text-green-400 mb-5" />
                <h3 className="text-white text-lg font-bold mb-3">بياناتك معزولة لكل حساب</h3>
                <p className="text-sm text-text-secondary leading-relaxed">قاعدة بياناتك خاصة بك تماماً ولا تختلط ببيانات المتاجر الأخرى.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center hover:bg-white/[0.04] transition-colors">
                <Lock size={28} className="text-green-400 mb-5" />
                <h3 className="text-white text-lg font-bold mb-3">لا تُباع ولا تُستخدم تسويقياً</h3>
                <p className="text-sm text-text-secondary leading-relaxed">بياناتك سرية. لا نبيعها ولا نستخدمها في إعلاناتنا أو تدريب نماذجنا.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center hover:bg-white/[0.04] transition-colors">
                <UserCog size={28} className="text-green-400 mb-5" />
                <h3 className="text-white text-lg font-bold mb-3">التحكم الكامل بربط المنصات</h3>
                <p className="text-sm text-text-secondary leading-relaxed">أنت من يقرر متى تربط (أو تفصل) منصات مثل تيك توك.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
