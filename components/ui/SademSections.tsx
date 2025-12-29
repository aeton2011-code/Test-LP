
import React from 'react';
import { Star, Sparkles, Cpu, Brain, Target, Lightbulb, Radio, CheckCircle, XCircle } from 'lucide-react';

/* --- Trusted By & Stats --- */
export const TrustedBy: React.FC = () => {
  const logos = [
      "Shopify", "WooCommerce", "TikTok", "Snapchat", "Meta", "Google Ads", "Zid", "Salla"
  ];
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-4 md:py-6 relative border-b border-white/5" id="social-proof">
      <div className="container mx-auto max-w-[1400px] relative z-10 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 text-center md:text-right">
             <div className="flex -space-x-2 space-x-reverse overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050505] grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed" alt=""/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050505] grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara" alt=""/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050505] grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Fahad" alt=""/>
            </div>
            <p className="text-text-secondary text-sm font-medium">
                يثق بنا أكثر من <span className="text-white font-bold">10,000 تاجر</span> حول العالم
            </p>
        </div>
        
        <div className="relative w-full overflow-hidden" dir="ltr">
            {/* Gradients hidden on mobile to remove "black shadow" look */}
            <div className="absolute left-0 top-0 bottom-0 hidden md:block w-60 bg-gradient-to-r from-[#030304] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 hidden md:block w-60 bg-gradient-to-l from-[#030304] to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap items-center w-max py-2 opacity-30 hover:opacity-80 transition-opacity duration-500">
                {marqueeLogos.map((logo, i) => (
                    <span key={i} className="text-xl md:text-2xl font-bold text-white cursor-default select-none mx-6 md:mx-12 font-sans tracking-tight">
                        {logo}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

/* --- Why Sadem (Expertise Comparison) --- */
export const WhySadem: React.FC = () => {
    return (
        <section id="comparison" className="py-20 md:py-32 px-6 relative bg-[#030304] overflow-hidden" dir="rtl">
             
             {/* Background Effects */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none opacity-40" />

             <div className="container mx-auto max-w-6xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        ليش سديم غير؟ <br />
                        <span className="text-text-secondary text-2xl md:text-4xl">لأنه صُمّم لقرارات البيع… مو لكل شي ولا لأي شي</span>
                    </h2>
                </div>

                {/* --- 1. THE EXPERTISE GRID (Expert Logic) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
                    
                    {[
                        { icon: Target, title: "عقلية المعلن", desc: "بنية إعلانية مثبتة لزيادة معدل النقر (CTR).", color: "blue" },
                        { icon: Radio, title: "صائد الترندات", desc: "يكتشف 'الترند' قبل أن يبرد ويربط منتجك به.", color: "red" },
                        { icon: Brain, title: "تسويق نفسي", desc: "محفزات نفسية (FOMO) لدفع العميل للشراء.", color: "purple" },
                        { icon: Lightbulb, title: "حارس الهوية", desc: "صوت علامتك (Tone of Voice) ثابت ومحترف.", color: "orange" }
                    ].map((item, idx) => (
                         <div key={idx} className={`bg-[#0E0E10] border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-${item.color}-500/30 transition-all hover:-translate-y-1 duration-300`}>
                            <div className={`w-12 h-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mb-4 relative z-10`}>
                                <item.icon size={24} />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                 {item.desc}
                            </p>
                        </div>
                    ))}

                </div>

                {/* --- 2. HEAD TO HEAD COMPARISON (High Contrast) --- */}
                <div className="relative rounded-[32px] overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 shadow-2xl">
                    
                    {/* Sadem Side (Winner) */}
                    <div className="p-8 md:p-14 bg-gradient-to-br from-[#006CD9]/10 to-[#030304] relative border-b md:border-b-0 md:border-l border-white/10 z-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] rounded-full" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-10">
                                <div className="p-2 bg-primary rounded-lg shadow-lg shadow-primary/30">
                                     <Sparkles size={20} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">نظام سديم (Sadem OS)</h3>
                            </div>
                            
                            <div className="space-y-8">
                                <div className="flex gap-4 items-start group">
                                    <CheckCircle size={24} className="text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">صانع قرار.</h4>
                                        <p className="text-text-secondary mt-1">ما يعطيك خيارات تحيرك، يعطيك الزبدة والقرار النهائي.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <CheckCircle size={24} className="text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">مدير إبداعي.</h4>
                                        <p className="text-text-secondary mt-1">يغنيك عن المصمم والكاتب والمونتيير، يجهز حملتك كاملة بضغطة زر.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start group">
                                    <CheckCircle size={24} className="text-green-500 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">مستشار نمو.</h4>
                                        <p className="text-text-secondary mt-1">يحلل تجربة عميلك داخل المتجر، ويعلمك وين الفلوس قاعدة تضيع.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Generic AI Side (Loser) */}
                    <div className="p-8 md:p-14 bg-[#0A0A0A] relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                         <div className="flex items-center gap-3 mb-10 opacity-60">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <Cpu size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-300">الذكاء الاصطناعي العادي</h3>
                        </div>
                        
                        <div className="space-y-8 opacity-60">
                            <div className="flex gap-4 items-start">
                                <XCircle size={24} className="text-zinc-600 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-xl font-bold text-zinc-400">كاتب فقط.</h4>
                                    <p className="text-zinc-600 mt-1">يكتب نصوص عادية وما تبيع ولا تجذب العميل</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <XCircle size={24} className="text-zinc-600 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-xl font-bold text-zinc-400">عشوائية الاقتراحات.</h4>
                                    <p className="text-zinc-600 mt-1">يعطيك اقتراحات عشوائية ما تحقق الهدف "وش أختار؟".</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <XCircle size={24} className="text-zinc-600 shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-xl font-bold text-zinc-400">منفذ أوامر.</h4>
                                    <p className="text-zinc-600 mt-1">هدفه يجمالك وتكون راضي عنه ما يبادر ولا يحقق النتائج</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* Punchline Footer */}
                <div className="mt-8 text-center">
                    <p className="text-white text-xl font-medium inline-block bg-white/5 border border-white/10 px-6 py-3 rounded-full">
                        💡 الزبدة: سديم مو أداة مساعدة... <span className="text-primary font-bold">سديم هو فريقك التسويقي.</span>
                    </p>
                </div>

             </div>
        </section>
    );
};

/* --- Testimonials Section --- */
export const Testimonials: React.FC = () => {
    const reviews = [
        { name: "محمد العتيبي", niche: "متجر عطور", metric: "300% زيادة في CTR", text: "كنت استخدم شات جي بي تي، بس سديم غير اللعبة تماماً باللهجة." },
        { name: "سارة الأحمد", niche: "أزياء وعبايات", metric: "وفرت 4 ساعات يومياً", text: "أكثر شي ريحني الربط مع المتجر، ما يحتاج اشرح للمودل وش منتجاتي." },
        { name: "فهد الدوسري", niche: "إلكترونيات", metric: "مبيعات دبل في شهر", text: "الفرق في النتائج واضح، الإعلانات صارت تشبهنا وتبيع." },
        { name: "خالد الزهراني", niche: "قهوة ومحاصيل", metric: "تفاعل انستقرام 🔥", text: "الهوكات اللي يطلعها سديم مجنونة وتجيب تفاعل." },
        { name: "نورة المالكي", niche: "مستلزمات منزل", metric: "بدون مصمم جرافيك", text: "واجهة سهلة ونتائج مبهرة من أول استخدام." },
        { name: "عبدالله السالم", niche: "دروبشيبينغ", metric: "توفير 3000 ريال/شهر", text: "وفرت راتب كاتب محتوى ومصمم بفضل الله ثم سديم." },
    ];

    const marqueeReviews = [...reviews, ...reviews, ...reviews];

    return (
        <section className="py-20 md:py-32 relative overflow-hidden" id="testimonials">
            <div className="container mx-auto max-w-7xl relative z-10 mb-12 md:mb-16 px-6 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    قصص نجاح بالأرقام
                </h2>
                <p className="text-text-secondary text-lg">تجار بدأوا مثلك، والحين يسبقون السوق بخطوة</p>
            </div>
            
            <div className="relative w-full" dir="ltr">
                 {/* Updated gradients to match global background */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-60 bg-gradient-to-r from-[#030304] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-60 bg-gradient-to-l from-[#030304] to-transparent z-20 pointer-events-none" />
                
                <div className="flex animate-marquee gap-4 md:gap-6 w-max py-8 hover:[animation-play-state:paused]">
                    {marqueeReviews.map((review, i) => (
                        <div 
                            key={i} 
                            className="w-[300px] md:w-[380px] p-6 md:p-8 rounded-[28px] bg-[#0E0E10] border border-white/5 hover:border-white/20 transition-all flex flex-col gap-5 shrink-0 hover:bg-white/[0.04] hover:-translate-y-1 duration-300 shadow-xl group relative overflow-hidden"
                            dir="rtl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="flex justify-between items-start relative z-10">
                                <div className="flex gap-1 text-[#F59E0B]">
                                    {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" className="drop-shadow-sm" />)}
                                </div>
                                <span className="bg-primary/20 text-primary-light text-[10px] font-bold px-2 py-1 rounded-full border border-primary/20">
                                    {review.metric}
                                </span>
                            </div>

                            <p className="relative z-10 text-white text-[15px] md:text-[16px] leading-relaxed font-medium">
                                "{review.text}"
                            </p>
                            <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm font-bold text-white border border-white/5">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">{review.name}</p>
                                    <p className="text-text-tertiary text-xs">{review.niche}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
