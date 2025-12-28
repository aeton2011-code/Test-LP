
import React from 'react';
import { Star, Sparkles, Cpu, Brain, Target, Lightbulb, Radio } from 'lucide-react';

/* --- Trusted By & Stats --- */
export const TrustedBy: React.FC = () => {
  const logos = [
      "Shopify", "WooCommerce", "TikTok", "Snapchat", "Meta", "Google Ads", "Zid", "Salla"
  ];
  // Duplicate list for seamless infinite scroll
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-12 relative border-b border-white/5" id="social-proof">
      <div className="container mx-auto max-w-[1400px] relative z-10 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-center md:text-right">
             <div className="flex -space-x-2 space-x-reverse overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050505] grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed" alt=""/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050505] grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sara" alt=""/>
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#050505] grayscale" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Fahad" alt=""/>
            </div>
            <p className="text-text-secondary text-sm font-medium">
                يستخدمه <span className="text-white font-bold">نخبة المسوقين</span> وأصحاب المتاجر الإلكترونية حول العالم
            </p>
        </div>
        
        <div className="relative w-full overflow-hidden" dir="ltr">
            {/* Gradient Masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-60 bg-gradient-to-r from-[#030304] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-60 bg-gradient-to-l from-[#030304] to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap items-center w-max py-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
                {marqueeLogos.map((logo, i) => (
                    <span key={i} className="text-lg md:text-2xl font-bold text-white cursor-default select-none mx-6 md:mx-10 font-sans tracking-tight">
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
        <section id="comparison" className="py-16 md:py-24 px-6 relative bg-[#030304] overflow-hidden" dir="rtl">
             
             {/* Background Effects */}
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-40" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none opacity-40" />

             <div className="container mx-auto max-w-6xl relative z-10">
                
                {/* Header */}
                <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        جمعنا لك "عقلية الخبير".. <br className="md:hidden" />
                        <span className="text-text-secondary">مع نبض السوق المباشر.</span>
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg leading-relaxed px-4">
                        الذكاء الاصطناعي العام "يخمن" بناءً على معلومات قديمة. <br className="hidden md:block"/>
                        سديم يدمج <span className="text-white font-bold">استراتيجيات كبار المسوقين</span> مع <span className="text-white font-bold">الترندات العالمية</span> في وقت واحد.
                    </p>
                </div>

                {/* --- 1. THE EXPERTISE GRID (Expert Logic) --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
                    
                    {/* Expert 1: Ad Specialists */}
                    <div className="bg-[#0E0E10] border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 relative z-10">
                            <Target size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">عقلية المعلن</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                             بُني النظام على هياكل إعلانية مثبتة لزيادة معدل النقر (CTR) وليس مجرد نصوص عشوائية.
                        </p>
                    </div>

                    {/* Expert 2: Market Watchers (Global Trends) */}
                    <div className="bg-[#0E0E10] border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-red-500/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-4 relative z-10">
                            <Radio size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">صائد الترندات</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            النظام متصل بالسوق لحظياً. يكتشف "الترند" قبل أن يبرد، ويربط منتجك بالمناسبات العالمية والمحلية تلقائياً.
                        </p>
                    </div>

                    {/* Expert 3: Psychologists */}
                    <div className="bg-[#0E0E10] border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-purple-500/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 relative z-10">
                            <Brain size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">التسويق النفسي</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            يستخدم محفزات نفسية (FOMO، الانتماء) لدفع العميل لاتخاذ قرار الشراء فوراً.
                        </p>
                    </div>

                    {/* Expert 4: Brand Strategists */}
                    <div className="bg-[#0E0E10] border border-white/5 rounded-3xl p-6 relative overflow-hidden group hover:border-orange-500/30 transition-all">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 relative z-10">
                            <Lightbulb size={24} />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-2">حارس الهوية</h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                            يضمن أن يظل صوت علامتك التجارية (Tone of Voice) ثابتاً ومحترفاً في كل مرة.
                        </p>
                    </div>

                </div>

                {/* --- 2. HEAD TO HEAD COMPARISON (The Process) --- */}
                {/* Note: In RTL flex/grid, the first element appears on the Right. 
                    So we place Sadem first to be on the Right side. */}
                <div className="relative rounded-[32px] border border-white/10 bg-[#0E0E10] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
                        
                        {/* Sadem Side (First in Code = Right in RTL) */}
                        <div className="p-8 md:p-12 bg-primary/[0.03] relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                            
                            <div className="flex items-center gap-3 mb-6">
                                <Sparkles size={24} className="text-primary" />
                                <h3 className="text-xl font-bold text-white">نظام سديم (Sadem OS)</h3>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">طريقة العمل</h4>
                                    <p className="text-white text-sm md:text-base leading-relaxed">
                                        "تحليل وتوظيف". يستخدم الإنترنت للبحث عن المعلومات، ثم يصيغها بقواعد تسويقية صارمة وضعها الخبراء.
                                        <br/>
                                        <span className="text-green-400 text-sm block mt-2">النتيجة: محتوى حديث، مُصمم ليبيع.</span>
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">الوعي باللحظة</h4>
                                    <p className="text-white text-sm md:text-base leading-relaxed">
                                        متصل ومُحدّث. يرصد المواسم والأحداث الحالية، ويستخدمها لصناعة محتوى يواكب اللحظة.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Generic AI Side (Second in Code = Left in RTL) */}
                        <div className="p-8 md:p-12 bg-white/[0.01]">
                            <div className="flex items-center gap-3 mb-6 opacity-60">
                                <Cpu size={24} />
                                <h3 className="text-xl font-bold">النماذج العامة (GPT/Gemini)</h3>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">طريقة العمل</h4>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                        "بحث وتلخيص عشوائي". يجمع معلومات من الإنترنت المفتوح دون فلتر تسويقي.
                                        <br/>
                                        <span className="text-red-400 text-sm block mt-2">النتيجة: معلومات كثيرة، لكن مبيعات قليلة.</span>
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-text-tertiary uppercase tracking-wider mb-2">الوعي باللحظة</h4>
                                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                        غالباً ما تكون معلوماته محدودة بتاريخ معين (Cut-off date) أو يهلوس بمعلومات غير دقيقة.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

             </div>
        </section>
    );
};

/* --- Testimonials Section --- */
export const Testimonials: React.FC = () => {
    const reviews = [
        { name: "محمد العتيبي", text: "كنت استخدم شات جي بي تي، بس سديم غير اللعبة تماماً باللهجة." },
        { name: "سارة الأحمد", text: "أكثر شي ريحني الربط مع المتجر، ما يحتاج اشرح للمودل وش منتجاتي." },
        { name: "فهد الدوسري", text: "الفرق في النتائج واضح، الإعلانات صارت تشبهنا." },
        { name: "خالد الزهراني", text: "الهوكات اللي يطلعها سديم مجنونة وتجيب تفاعل." },
        { name: "نورة المالكي", text: "واجهة سهلة ونتائج مبهرة من أول استخدام." },
        { name: "عبدالله السالم", text: "وفرت راتب كاتب محتوى ومصمم بفضل الله ثم سديم." },
        { name: "ريم القحطاني", text: "الكتابة باللهجة المحلية ممتازة وطبيعية جداً." },
        { name: "عمر الجابر", text: "سديم غير طريقتي في التخطيط التسويقي للأفضل." },
    ];

    const marqueeReviews = [...reviews, ...reviews, ...reviews];

    return (
        <section className="py-20 md:py-32 relative overflow-hidden" id="testimonials">
            <div className="container mx-auto max-w-7xl relative z-10 mb-12 md:mb-16 px-6 text-center">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    ناس استخدمت الأدوات فعلًا
                </h2>
                <p className="text-text-secondary text-lg">قصص نجاح حقيقية من رواد الأعمال</p>
            </div>
            
            <div className="relative w-full" dir="ltr">
                 {/* Updated gradients to match global background */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-60 bg-gradient-to-r from-[#030304] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-60 bg-gradient-to-l from-[#030304] to-transparent z-20 pointer-events-none" />
                
                <div className="flex animate-marquee gap-4 md:gap-6 w-max py-8 hover:[animation-play-state:paused]">
                    {marqueeReviews.map((review, i) => (
                        <div 
                            key={i} 
                            className="w-[300px] md:w-[380px] p-6 md:p-8 rounded-[28px] bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-white/20 transition-all flex flex-col gap-5 shrink-0 hover:bg-white/[0.06] hover:-translate-y-1 duration-300 shadow-xl group relative overflow-hidden"
                            dir="rtl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative z-10 flex gap-1 text-[#F59E0B]">
                                {[1,2,3,4,5].map(star => <Star key={star} size={18} fill="currentColor" className="drop-shadow-sm" />)}
                            </div>
                            <p className="relative z-10 text-white text-[15px] md:text-[16px] leading-relaxed font-medium">
                                "{review.text}"
                            </p>
                            <div className="relative z-10 mt-auto pt-4 border-t border-white/5 flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-sm font-bold text-white">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold">{review.name}</p>
                                    <p className="text-text-tertiary text-xs">مالك متجر</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
