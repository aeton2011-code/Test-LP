
import React from 'react';
import { Search, Book, CreditCard, Settings, MessageCircle, FileText } from 'lucide-react';

const HelpCenter: React.FC = () => {
  const categories = [
    { icon: Book, title: "ابدأ هنا", desc: "شروحات أساسية لضبط حسابك وربط متجرك." },
    { icon: Settings, title: "إعداد الحساب", desc: "تغيير كلمة المرور، إدارة الفريق، والأمان." },
    { icon: CreditCard, title: "الفوترة والاشتراكات", desc: "فهم الباقات، الفواتير، وترقية الخطة." },
    { icon: MessageCircle, title: "صناعة المحتوى", desc: "كيف تستخدم أدوات الكتابة وتوليد الصور." },
    { icon: FileText, title: "السياسات", desc: "شروط الاستخدام وسياسة الخصوصية." },
  ];

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">كيف نقدر نساعدك؟</h1>
            
            <div className="max-w-xl mx-auto relative group">
                <input 
                    type="text" 
                    placeholder="ابحث عن مشكلة، سؤال، أو مقال..." 
                    className="w-full bg-[#111] border border-white/10 rounded-2xl px-6 py-4 pr-12 text-white placeholder:text-text-tertiary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all shadow-xl"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary group-focus-within:text-primary transition-colors" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((cat, i) => (
                <div key={i} className="bg-[#0E0E10] border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition-colors cursor-pointer text-right">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                        <cat.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
                    <p className="text-sm text-text-secondary">{cat.desc}</p>
                </div>
            ))}
        </div>

        <div className="bg-white/5 rounded-3xl p-8 md:p-12 text-center border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">ما لقيت اللي تدور عليه؟</h3>
            <p className="text-text-secondary mb-8">فريق الدعم عندنا جاهز يساعدك في أي وقت.</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-[#EDEDED] transition-colors">
                تواصل مع الدعم الفني
            </button>
        </div>
    </section>
  );
};

export default HelpCenter;
