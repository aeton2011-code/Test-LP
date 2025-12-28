
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

const articles = [
    {
        id: 1,
        title: "كيف تستخدم الذكاء الاصطناعي في حملات رمضان؟",
        excerpt: "دليل شامل لتجهيز متجرك لموسم رمضان باستخدام أدوات سديم للتسويق الآلي.",
        date: "10 March 2024",
        author: "سارة الأحمد",
        category: "استراتيجيات",
        image: "https://images.unsplash.com/photo-1555421689-d68471e18963?auto=format&fit=crop&q=80"
    },
    {
        id: 2,
        title: "مستقبل التجارة الإلكترونية في السعودية 2024",
        excerpt: "قراءة في أرقام السوق السعودي وأهم الترندات المتوقعة هذا العام.",
        date: "5 March 2024",
        author: "عبدالله الماجد",
        category: "تقارير سوق",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
    },
    {
        id: 3,
        title: "5 أسرار لكتابة إعلانات تخطف الانتباه",
        excerpt: "كيف تصيغ الهوك (Hook) المثالي الذي يوقف العميل عن التمرير؟",
        date: "28 February 2024",
        author: "نورة العتيبي",
        category: "صناعة المحتوى",
        image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80"
    },
    {
        id: 4,
        title: "تحليل سلة المشتريات المتروكة",
        excerpt: "طرق ذكية لاستعادة العملاء الذين لم يكملوا عملية الشراء.",
        date: "15 February 2024",
        author: "فهد الدوسري",
        category: "نمو المتاجر",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80"
    }
];

const Blog: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">المدونة</h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                مقالات، شروحات، وأحدث أخبار التسويق الرقمي والتجارة الإلكترونية.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
                <motion.article 
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group bg-[#0E0E10] border border-white/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all cursor-pointer flex flex-col h-full"
                >
                    <div className="relative h-48 overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white font-medium border border-white/10">
                            {article.category}
                        </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-xs text-text-tertiary mb-4">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            <span className="flex items-center gap-1"><User size={12} /> {article.author}</span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-relaxed">
                            {article.title}
                        </h2>
                        
                        <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                            {article.excerpt}
                        </p>
                        
                        <div className="flex items-center text-primary text-sm font-bold gap-1 mt-auto">
                            اقرأ المزيد <ArrowUpRight size={16} />
                        </div>
                    </div>
                </motion.article>
            ))}
        </div>
    </section>
  );
};

export default Blog;
