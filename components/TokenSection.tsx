
import React, { useState } from 'react';
import { 
    Magnet, PenTool, ShoppingBag, Video, Mic, Users, 
    BarChart3, Calendar, Lightbulb, MessageSquare, 
    Layout, Search, Zap, Cpu, 
    Globe, Command, Sparkles,
    FileText, TrendingUp, MonitorPlay, Eye, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration Data Based on Sadem Specs ---

const CATEGORIES = [
    { 
        id: 'creative', 
        label: 'صناعة المحتوى', 
        subtitle: 'Creative Writing',
        desc: 'نصوص إعلانية وتسويقية بلهجة طبيعية. من الهوكات الخاطفة إلى وصف المنتجات المقنع.',
        icon: PenTool,
        color: 'from-purple-600 to-indigo-600',
        shadow: 'shadow-purple-500/20',
        accent: 'text-purple-400',
        bgAccent: 'bg-purple-500/10',
        glow: 'shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]'
    },
    { 
        id: 'analysis', 
        label: 'التحليل والتطوير', 
        subtitle: 'Analysis & Development',
        desc: 'افحص أداء إعلاناتك ومتجرك. اكتشف "خريطة الملل" ونقاط الضعف قبل إطلاق الحملة.',
        icon: BarChart3,
        color: 'from-emerald-600 to-teal-600',
        shadow: 'shadow-emerald-500/20',
        accent: 'text-emerald-400',
        bgAccent: 'bg-emerald-500/10',
        glow: 'shadow-[0_0_30px_-5px_rgba(52,211,153,0.4)]'
    },
    { 
        id: 'planning', 
        label: 'التخطيط الإبداعي', 
        subtitle: 'Creative Planning',
        desc: 'نظم فوضى الإبداع. جداول محتوى شهرية وأفكار متجددة مربوطة بالترندات الحالية.',
        icon: Lightbulb,
        color: 'from-blue-600 to-cyan-600',
        shadow: 'shadow-blue-500/20',
        accent: 'text-blue-400',
        bgAccent: 'bg-blue-500/10',
        glow: 'shadow-[0_0_30px_-5px_rgba(96,165,250,0.4)]'
    },
    { 
        id: 'studio', 
        label: 'سديم ستديو', 
        subtitle: 'Sadem Studio',
        desc: 'إنتاج مرئي وصوتي متكامل. حول صورك لفيديو، واصنع شخصيات تتحدث بلغتك.',
        icon: Video,
        color: 'from-orange-600 to-red-600',
        shadow: 'shadow-orange-500/20',
        accent: 'text-orange-400',
        bgAccent: 'bg-orange-500/10',
        glow: 'shadow-[0_0_30px_-5px_rgba(251,146,60,0.4)]'
    },
];

const TOOLS = [
    // 1. Creative Writing (صناعة المحتوى)
    { id: 1, title: "مولد الهوكات (Hook Gen)", desc: "توليد أول 3 ثوانٍ لجذب الانتباه (صدمة، فضول).", cat: "creative", icon: Magnet },
    { id: 2, title: "كاتب السكربتات", desc: "سيناريوهات إعلانية بأطر عالمية (AIDA, PAS).", cat: "creative", icon: FileText },
    { id: 3, title: "وصف المنتجات", desc: "وصف احترافي بشخصيات متعددة (المقنع، المبسط).", cat: "creative", icon: ShoppingBag },
    { id: 4, title: "كاتب الصفحات (Bio)", desc: "محتوى 'من نحن' وسياسات المتجر والبايو.", cat: "creative", icon: Layout },
    { id: 5, title: "مولد الردود", desc: "ردود احترافية على العملاء (رسمي، ودي، اعتذار).", cat: "creative", icon: MessageSquare },

    // 2. Analysis (التحليل والتطوير)
    { id: 6, title: "تحليل الإعلان (Ad Vision)", desc: "تقييم الفيديو وتقديم 'خريطة الملل' ونسبة النجاح.", cat: "analysis", icon: Eye },
    { id: 7, title: "تحليل المتجر (Store Analyzer)", desc: "فحص تجربة المستخدم (UX) وعناصر الثقة.", cat: "analysis", icon: Globe },
    { id: 8, title: "استراتيجية المنتج", desc: "تحديد التمركز (Positioning) والميزة التنافسية.", cat: "analysis", icon: TrendingUp },
    { id: 9, title: "محلل السكربتات", desc: "اكتشاف نقاط الضعف في النص قبل التصوير.", cat: "analysis", icon: Search },
    { id: 10, title: "محلل الحملات", desc: "قرارات مالية صارمة (إيقاف/زيادة) بناءً على ROAS.", cat: "analysis", icon: Zap },

    // 3. Planning (التخطيط الإبداعي)
    { id: 11, title: "محرك الأفكار", desc: "أفكار لا نهائية مربوطة بالترندات وطرق التصوير.", cat: "planning", icon: Sparkles },
    { id: 12, title: "خطة المحتوى", desc: "جدول نشر شهري (ترفيهي، تعليمي، بيعي).", cat: "planning", icon: Calendar },

    // 4. Studio (سديم ستديو)
    { id: 13, title: "ستديو الإعلانات", desc: "دمج المنتج في خلفيات واقعية مع نصوص.", cat: "studio", icon: Layers },
    { id: 14, title: "محرك الفيديو", desc: "تحويل صور المنتجات لفيديو سينمائي متحرك.", cat: "studio", icon: MonitorPlay },
    { id: 15, title: "محرك الشخصيات", desc: "تحريك الصور بشكل واقعي وحقيقي", cat: "studio", icon: Users },
    { id: 16, title: "المعلق الصوتي", desc: "Text-to-Speech بلهجات عربية واقعية جداً.", cat: "studio", icon: Mic },
];

const TokenSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('creative');
  const activeCategory = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];
  const filteredTools = TOOLS.filter(t => t.cat === activeTab);

  return (
    <section className="w-full py-20 md:py-32 relative bg-[#030304] overflow-hidden" id="layers">
        
        {/* Subtle Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
            
            {/* Header Label */}
            <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400">
                    <Command size={12} />
                    <span>منظومة الأدوات</span>
                </div>
            </div>

            {/* 1. TOP NAVIGATION (The Dock - Updated for Mobile Grid) */}
            <div className="flex justify-center mb-8 md:mb-12 w-full">
                <div className="p-1.5 bg-[#0E0E10] border border-white/10 rounded-[24px] md:rounded-full w-full md:w-auto shadow-2xl mx-auto">
                    <div className="grid grid-cols-2 md:flex md:items-center gap-2 md:gap-1">
                        {CATEGORIES.map((cat) => {
                            const isActive = activeTab === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`relative px-3 py-3 md:px-5 md:py-2.5 rounded-xl md:rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-2.5 whitespace-nowrap min-h-[60px] md:min-h-0 ${
                                        isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                    }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="navPill"
                                            className={`absolute inset-0 rounded-xl md:rounded-full bg-[#1A1A1A] border border-white/10 ${cat.glow}`}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    
                                    <span className="relative z-10 flex flex-col md:flex-row items-center gap-2">
                                        <cat.icon 
                                            size={16} 
                                            className={`transition-colors duration-300 ${isActive ? cat.accent : 'grayscale opacity-50'}`} 
                                        />
                                        <span>{cat.label}</span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* 2. DYNAMIC CONTENT AREA */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Centered Title for Context */}
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {activeCategory.label}
                        </h2>
                        <p className="text-zinc-500 text-base">
                            {activeCategory.subtitle}
                        </p>
                    </div>

                    {/* Split Layout: 1/3 Left, 2/3 Right */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                        
                        {/* LEFT: Category Highlight (Smaller Hero Card) */}
                        <div className="lg:col-span-4 flex flex-col h-full">
                            <div className={`relative overflow-hidden rounded-2xl p-6 md:p-8 flex flex-col h-full min-h-[300px] bg-gradient-to-br ${activeCategory.color} ${activeCategory.shadow} shadow-2xl`}>
                                
                                {/* Decorative Background Icon - Reduced size */}
                                <activeCategory.icon 
                                    size={200} 
                                    className="absolute -bottom-10 -left-10 text-white opacity-10 rotate-12 pointer-events-none" 
                                />
                                
                                {/* Texture */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                                <div className="relative z-10">
                                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase mb-4 backdrop-blur-md border border-white/20">
                                        <Sparkles size={10} fill="currentColor" />
                                        <span>نظام سديم</span>
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">
                                        {activeCategory.label}
                                    </h3>
                                    <p className="text-white/90 text-sm leading-relaxed font-medium">
                                        {activeCategory.desc}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Tools Grid (Tiles) */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 gap-3 md:gap-4 h-full content-start">
                                {filteredTools.map((tool, i) => (
                                    <motion.div
                                        key={tool.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="group relative bg-[#0E0E10] hover:bg-[#161616] border border-white/5 hover:border-white/10 rounded-xl md:rounded-2xl p-3 md:p-4 cursor-pointer transition-all duration-300 flex flex-col md:flex-row items-start gap-3 md:gap-4 overflow-hidden h-auto md:h-[100px]"
                                    >
                                        {/* Icon Box */}
                                        <div className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${activeCategory.bgAccent} ${activeCategory.accent}`}>
                                            <tool.icon size={16} className="md:w-[18px]" strokeWidth={1.5} />
                                        </div>

                                        {/* Text Info */}
                                        <div className="flex-1 w-full">
                                            <h4 className="text-xs md:text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors truncate w-full">
                                                {tool.title}
                                            </h4>
                                            <p className="text-[10px] md:text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed line-clamp-2">
                                                {tool.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </AnimatePresence>

        </div>
    </section>
  );
};

export default TokenSection;
