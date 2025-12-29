
import React from 'react';

const UpdateItem = ({ version, date, title, changes, current }: any) => (
    <div className="relative pl-8 md:pl-0">
        {/* Timeline Line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:right-auto md:-ml-px"></div>
        
        {/* Dot */}
        <div className={`absolute right-[-4px] top-6 w-2 h-2 rounded-full md:left-1/2 md:right-auto md:-ml-1 ${current ? 'bg-primary shadow-[0_0_10px_#006CD9]' : 'bg-white/20'}`}></div>

        <div className={`flex flex-col md:flex-row gap-8 mb-12 items-start ${current ? 'opacity-100' : 'opacity-70'}`}>
            <div className="flex-1 md:text-left pt-5 md:pr-12">
                <span className="text-sm font-mono text-text-tertiary block mb-1">{date}</span>
                <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border ${current ? 'bg-primary/10 text-primary border-primary/20' : 'bg-white/5 text-text-secondary border-white/10'}`}>
                    {version}
                </span>
            </div>
            
            <div className="flex-1 bg-[#0E0E10] border border-white/10 rounded-2xl p-6 md:mr-12">
                <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
                <ul className="space-y-2">
                    {changes.map((change: string, i: number) => (
                        <li key={i} className="text-sm text-text-secondary flex items-start gap-2">
                            <span className="text-white/20 mt-1.5">•</span>
                            {change}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const Updates: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto" dir="rtl">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">سجل التحديثات</h1>
            <p className="text-text-secondary text-lg">
                نعمل باستمرار لتحسين سديم. تابع آخر الميزات والإصلاحات هنا.
            </p>
        </div>

        <div className="relative pr-4 md:pr-0">
            <UpdateItem 
                version="v2.1.0"
                date="15 March 2024"
                title="إطلاق محرك الفيديو"
                changes={[
                    "الآن يمكنك تحويل صور المنتجات إلى فيديو متحرك لمدة 6 ثواني.",
                    "تحسين سرعة توليد النصوص بنسبة 40%.",
                    "إضافة قوالب جديدة للمناسبات العالمية."
                ]}
                current={true}
            />
            <UpdateItem 
                version="v2.0.0"
                date="1 February 2024"
                title="تحديث الواجهة الجديد"
                changes={[
                    "إعادة تصميم لوحة التحكم بالكامل لتجربة مستخدم أسهل.",
                    "إطلاق ميزة 'التحليل الذكي' للمتاجر المرتبطة بسلة وشوبيفاي.",
                    "تحسين دقة اللغة العربية في المودل اللغوي."
                ]}
            />
            <UpdateItem 
                version="v1.5.0"
                date="10 January 2024"
                title="تحسينات الأداء"
                changes={[
                    "إصلاح مشاكل تسجيل الدخول.",
                    "دعم تصدير التقارير بصيغة PDF.",
                    "إضافة الوضع الليلي (Dark Mode) كخيار افتراضي."
                ]}
            />
        </div>
    </section>
  );
};

export default Updates;
