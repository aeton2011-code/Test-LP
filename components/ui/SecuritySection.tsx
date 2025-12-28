import React from 'react';
import { ShieldCheck, Lock, Database } from 'lucide-react';

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
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
                <Lock size={24} className="text-text-tertiary mb-4" />
                <h3 className="text-white font-bold mb-2">تشفير كامل</h3>
                <p className="text-sm text-text-tertiary">بيانات مشفرة بالكامل عند النقل والتخزين.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
                <Database size={24} className="text-text-tertiary mb-4" />
                <h3 className="text-white font-bold mb-2">عزل البيانات</h3>
                <p className="text-sm text-text-tertiary">بياناتك معزولة تماماً عن بيانات المتاجر الأخرى.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center">
                <ShieldCheck size={24} className="text-text-tertiary mb-4" />
                <h3 className="text-white font-bold mb-2">لا تدريب</h3>
                <p className="text-sm text-text-tertiary">لا نستخدم محتواك لتدريب نماذجنا إطلاقاً.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;