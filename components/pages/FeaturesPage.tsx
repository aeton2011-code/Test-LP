
import React from 'react';
import { PenTool, BarChart3, Video, Lightbulb, Check } from 'lucide-react';

const FeatureBlock = ({ title, desc, icon: Icon, items }: any) => (
    <div className="bg-[#0E0E10] border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white mb-6">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-text-secondary mb-6 leading-relaxed">{desc}</p>
        <ul className="space-y-3">
            {items.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check size={14} className="text-primary" />
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const FeaturesPage: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">مميزات سديم</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                اكتشف الأدوات التي ستغير طريقة عملك بالكامل.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureBlock 
                title="المحرك اللغوي (Arabic Native)"
                desc="نماذج ذكاء اصطناعي مدربة خصيصاً على اللغة العربية واللهجات المتنوعة لإنتاج محتوى لا يبدو آلياً."
                icon={PenTool}
                items={["كتابة وصف المنتجات", "توليد سيناريوهات إعلانية", "ردود خدمة عملاء ذكية", "تحسين محركات البحث (SEO)"]}
            />
            <FeatureBlock 
                title="التحليل والتطوير"
                desc="اربط حساباتك الإعلانية ودع سديم يحلل الأرقام ويعطيك التوصيات بدلاً من الجداول المعقدة."
                icon={BarChart3}
                items={["تحليل حملات تيك توك وسناب شات", "توصيات تحسين الميزانية", "تحليل سلوك الزوار", "توقع المبيعات"]}
            />
            <FeatureBlock 
                title="الستديو الذكي (Sadem Studio)"
                desc="حول صور منتجاتك الثابتة إلى مواد إعلانية احترافية، سواء صور معالجة أو فيديوهات متحركة."
                icon={Video}
                items={["تغيير خلفيات المنتجات", "تحريك الصور", "توليد صور تخيلية", "تحسين جودة الصور"]}
            />
            <FeatureBlock 
                title="التخطيط الآلي"
                desc="لا تشيل هم 'وش أنزل اليوم؟'. سديم يخطط لك جدول محتوى شهري متكامل بناءً على المناسبات."
                icon={Lightbulb}
                items={["تقويم المحتوى التفاعلي", "اقتراح أفكار للمناسبات", "تذكير بمواعيد النشر", "توليد هوكات (Hooks) متجددة"]}
            />
        </div>
    </section>
  );
};

export default FeaturesPage;
