
import React from 'react';
import { 
  PenTool, BarChart3, Video, Lightbulb, 
  Sparkles, MessageSquare, ShoppingBag, 
  Layout, Search, Mic, Layers, MonitorPlay,
  Users, TrendingUp, Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES_DATA = [
  {
    id: 'creative',
    category: "صناعة المحتوى (Creative Writing)",
    description: "أدوات كتابية ذكية تفهم اللهجة السعودية وتكتب نصوصاً تبيع.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    tools: [
      { name: "مولد الهوكات (Hook Gen)", desc: "جمل افتتاحية تخطف الانتباه في أول 3 ثوانٍ (صدمة، فضول، سؤال).", icon: Sparkles },
      { name: "كاتب السكربتات", desc: "سيناريوهات إعلانية كاملة مبنية على أطر تسويقية عالمية (AIDA, PAS).", icon: Video },
      { name: "وصف المنتجات", desc: "نصوص وصفية مقنعة للمنتجات بشخصيات كتابة متعددة.", icon: ShoppingBag },
      { name: "كاتب الصفحات (Bio)", desc: "محتوى احترافي لصفحات 'من نحن' والسياسات والبايو.", icon: Layout },
      { name: "مولد الردود", desc: "صياغة ردود دبلوماسية وذكية على تعليقات وتقييمات العملاء.", icon: MessageSquare },
    ]
  },
  {
    id: 'analysis',
    category: "التحليل والتطوير (Analysis)",
    description: "حول الأرقام والبيانات إلى قرارات نمو واضحة.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    tools: [
      { name: "تحليل المتجر (Store Analyzer)", desc: "فحص شامل لتجربة المستخدم (UX) وسرعة المتجر وعناصر الثقة.", icon: Globe },
      { name: "استراتيجية المنتج", desc: "تحديد الميزة التنافسية (USP) والتمركز السوقي الصحيح.", icon: TrendingUp },
      { name: "محلل السكربتات", desc: "مراجعة النصوص الإعلانية واكتشاف نقاط الضعف قبل التصوير.", icon: Search },
      { name: "محلل الحملات", desc: "قراءة أرقام الحملات (ROAS, CPA) وتقديم توصيات بالتحسين.", icon: BarChart3 },
    ]
  },
  {
    id: 'studio',
    category: "سديم ستديو (Studio)",
    description: "إنتاج إبداعي مرئي وصوتي بضغطة زر.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    tools: [
      { name: "ستديو الإعلانات", desc: "دمج صور المنتجات في خلفيات واقعية واحترافية.", icon: Layers },
      { name: "محرك الفيديو (Veo)", desc: "تحويل صور المنتجات الثابتة إلى فيديوهات سينمائية متحركة.", icon: MonitorPlay },
      { name: "محرك الشخصيات", desc: "جعل الصور الشخصية تتحدث وتتحرك بتزامن دقيق (Lip-sync).", icon: Users },
      { name: "المعلق الصوتي", desc: "تحويل النص إلى كلام (TTS) بلهجات سعودية واقعية جداً.", icon: Mic },
    ]
  },
  {
    id: 'planning',
    category: "التخطيط (Planning)",
    description: "نظم أفكارك واضمن الاستمرارية.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    tools: [
      { name: "محرك الأفكار", desc: "توليد أفكار محتوى لا نهائية مرتبطة بالترندات الحالية.", icon: Lightbulb },
      { name: "خطة المحتوى", desc: "بناء جدول نشر شهري متوازن (بيعي، ترفيهي، قيمي).", icon: PenTool },
    ]
  }
];

const FeaturesPage: React.FC = () => {
  return (
    <section className="pt-28 md:pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto" dir="rtl">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                كل الأدوات اللي تحتاجها <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-blue-300">في مكان واحد.</span>
            </h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                سديم يجمع لك قوة فريق تسويق كامل (كاتب، مصمم، محلل، ومخطط) في منصة واحدة سهلة الاستخدام.
            </p>
        </div>

        {/* Content Groups */}
        <div className="space-y-16">
            {FEATURES_DATA.map((group, groupIndex) => (
                <motion.div 
                    key={group.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: groupIndex * 0.1 }}
                >
                    {/* Category Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
                        <div className={`px-4 py-2 rounded-xl ${group.bg} border ${group.border}`}>
                            <h2 className={`text-xl font-bold ${group.color}`}>{group.category}</h2>
                        </div>
                        <p className="text-text-secondary text-base md:text-lg">{group.description}</p>
                    </div>

                    {/* Tools Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {group.tools.map((tool, toolIndex) => (
                            <motion.div 
                                key={toolIndex}
                                whileHover={{ y: -5 }}
                                className="bg-[#0E0E10] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors ${group.color}`}>
                                        <tool.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-white transition-colors">
                                            {tool.name}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {tool.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-24 text-center">
            <div className="bg-gradient-to-r from-[#0E0E10] to-[#151515] border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                
                <h2 className="text-3xl font-bold text-white mb-6 relative z-10">جاهز تجرب هذه الأدوات؟</h2>
                <p className="text-text-secondary mb-8 relative z-10">ابدأ الآن واختصر 90% من وقتك في التسويق.</p>
                
                <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-[#EDEDED] hover:scale-105 transition-all relative z-10 shadow-xl">
                    ابدأ تجربتك المجانية
                </button>
            </div>
        </div>

    </section>
  );
};

export default FeaturesPage;
