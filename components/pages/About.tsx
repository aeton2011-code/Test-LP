import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-text-secondary mb-6">
                قصتنا
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                نبني عقلًا رقمياً.. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-white">بقلب سعودي.</span>
            </h1>
        </div>

        <div className="space-y-12 text-lg text-text-secondary leading-loose text-right md:text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                بدأت سديم من مشكلة بسيطة واجهناها جميعاً: أدوات الذكاء الاصطناعي العالمية قوية جداً، لكنها "غريبة" عنا. لا تفهم لهجتنا، لا تعرف مواسمنا، وتعطينا نصوصاً مترجمة بلا روح.
            </motion.p>
            
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                لذلك قررنا بناء <strong>سديم</strong>.
            </motion.p>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                ليس مجرد واجهة لـ GPT، بل نظام تشغيل تسويقي كامل تم تدريبه على ملايين البيانات من السوق العربي والعالمي. نحن نفهم الفرق بين "عرض خاص" و "تخفيضات نار"، ونعرف كيف نكتب إعلاناً للمناسبات العالمية يختلف عن الإعلانات المحلية.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 bg-white/5 md:bg-transparent rounded-3xl p-8 md:p-0 border md:border-none border-white/5">
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">+10,000</h3>
                    <p className="text-sm">تاجر يستخدم سديم</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">2 مليون</h3>
                    <p className="text-sm">قطعة محتوى مولدة</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-2">100%</h3>
                    <p className="text-sm">ابتكار سعودي</p>
                </div>
            </div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                مهمتنا تمكين كل تاجر وصانع محتوى، مهما كان حجمه، من امتلاك قوة وكالة تسويق عالمية في جيبه، وبتكلفة كوب قهوة يومياً.
            </motion.p>
        </div>
    </section>
  );
};

export default About;