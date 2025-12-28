
import React, { useState } from 'react';
import { 
    Magnet, PenTool, ShoppingBag, Video, Mic, Users, 
    BarChart3, Calendar, Lightbulb, MessageSquare, 
    Layout, Search, Zap, Cpu, 
    Globe, Command, Sparkles,
    FileText, TrendingUp, MonitorPlay
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration Data ---

const CATEGORIES = [
    { 
        id: 'content', 
        label: 'صناعة المحتوى', 
        subtitle: 'Content Engine',
        desc: 'محرك لغوي يكتب بلهجتك. حول الأفكار إلى نصوص بيعية، سيناريوهات، وهوكات تخطف الانتباه.',
        icon: PenTool,
        color: 'from-purple-600 to-indigo-600',
        shadow: 'shadow-purple-500/20',
        accent: 'text-purple-400',
        bgAccent: 'bg-purple-500/10',
        glow: 'shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]'
    },
    { 
        id: 'analyze', 
        label: 'التحليل والتطوير', 
        subtitle: 'Analytics & Growth',
        desc: 'لا تخمن، حلل. افحص أداء إعلاناتك ومتجرك، واحصل على توصيات مبنية على بيانات.',
        icon: BarChart3,
        color: 'from-emerald-600 to-teal-600',
        shadow: 'shadow-emerald-500/20',
        accent: 'text-emerald-400',
        bgAccent: 'bg-emerald-500/10',
        glow: 'shadow-[0_0_30px_-5px_rgba(52,211,153,0.4)]'
    },
    { 
        id: 'plan', 
        label: 'التخطيط الإبداعي', 
        subtitle: 'Creative Planner',
        desc: 'نظم فوضى الإبداع. جداول محتوى شهرية، وأفكار متجددة تضمن لك الحضور الدائم.',
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
        subtitle: 'Media Production',
        desc: 'أدوات إنتاج مرئي وصوتي متكاملة. صور منتجات، فيديوهات، وتعليق صوتي بذكاء اصطناعي.',
        icon: Video,
        color: 'from-orange-600 to-red-600',
        shadow: 'shadow-orange-500/20',
        accent: 'text-orange-400',
        bgAccent: 'bg-orange-500/10',
        glow: 'shadow-[0_0_30px_-5px_rgba(251,146,60,0.4)]'
    },
];

const TOOLS = [
    // 1. Content Creation
    { id: 1, title: "مولد الهوكات", desc: "جمل افتتاحية تخطف الانتباه", cat: "content", icon: Magnet },
    { id: 2, title: "كاتب السكربتات", desc: "سيناريوهات إعلانية مقنعة", cat: "content", icon: FileText },
    { id: 3, title: "وصف المنتجات", desc: "نصوص تبرز مميزات المنتج", cat: "content", icon: ShoppingBag },
    { id: 4, title: "كاتب الصفحات", desc: "محتوى صفحات الهبوط", cat: "content", icon: Layout },
    { id: 5, title: "الردود الجاهزة", desc: "ردود ذكية لخدمة العملاء", cat: "content", icon: MessageSquare },

    // 2. Analysis & Development
    { id: 6, title: "تحليل الإعلان", desc: "كشف نقاط الضعف", cat: "analyze", icon: Search },
    { id: 7, title: "تحليل المتجر", desc: "تحسين تجربة المستخدم", cat: "analyze", icon: Globe },
    { id: 8, title: "استراتيجية المنتج", desc: "خطة تطوير وتسويق", cat: "analyze", icon: TrendingUp },
    { id: 9, title: "محلل السكربتات", desc: "تقييم جودة النصوص", cat: "analyze", icon: Zap },

    // 3. Creative Planning
    { id: 10, title: "مولد الأفكار", desc: "أفكار محتوى لا تنتهي", cat: "plan", icon: Sparkles },
    { id: 11, title: "خطة المحتوى", desc: "جدول نشر شهري متكامل", cat: "plan", icon: Calendar },

    // 4. Sadem Studio
    { id: 12, title: "ستديو الإعلانات", desc: "تصميم صور المنتجات", cat: "studio", icon: Cpu },
    { id: 13, title: "محرك الفيديو", desc: "تحويل الصور إلى فيديو", cat: "studio", icon: MonitorPlay },
    { id: 14, title: "محرك الشخصيات", desc: "أفاتار متحدث (AI)", cat: "studio", icon: Users },
    { id: 15, title: "المعلق الصوتي", desc: "تحويل النص لصوت", cat: "studio", icon: Mic },
];

const TokenSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('content');
  const activeCategory = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];
  const filteredTools = TOOLS.filter(t => t.cat === activeTab);

  return (
    <section className="w-full py-24 relative bg-[#030304] overflow-hidden" id="layers">
        
        {/* Subtle Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
            
            {/* Header Label */}
            <div className="flex justify-center mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-400">
                    <Command size={12} />
                    <span>قدرات النظام</span>
                </div>
            </div>

            {/* 1. TOP NAVIGATION (The Dock) */}
            <div className="flex justify-center mb-12">
                <div className="p-1.5 bg-[#0E0E10] border border-white/10 rounded-2xl flex items-center gap-1 shadow-2xl overflow-x-auto max-w-full scrollbar-hide">
                    {CATEGORIES.map((cat) => {
                        const isActive = activeTab === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveTab(cat.id)}
                                className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2.5 whitespace-nowrap min-w-[120px] justify-center ${
                                    isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300 hover:bg-white/5'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="navPill"
                                        className={`absolute inset-0 rounded-xl bg-[#1A1A1A] border border-white/10 ${cat.glow}`}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                
                                <span className="relative z-10 flex items-center gap-2">
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
                                {/* Removed Button Here */}
                            </div>
                        </div>

                        {/* RIGHT: Tools Grid (Tiles) */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full content-start">
                                {filteredTools.map((tool, i) => (
                                    <motion.div
                                        key={tool.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="group relative bg-[#0E0E10] hover:bg-[#161616] border border-white/5 hover:border-white/10 rounded-2xl p-4 cursor-pointer transition-all duration-300 flex items-start gap-4 overflow-hidden h-[100px]"
                                    >
                                        {/* Icon Box */}
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${activeCategory.bgAccent} ${activeCategory.accent}`}>
                                            <tool.icon size={18} strokeWidth={1.5} />
                                        </div>

                                        {/* Text Info */}
                                        <div className="flex-1">
                                            <h4 className="text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                                {tool.title}
                                            </h4>
                                            <p className="text-[11px] text-zinc-500 group-hover:text-zinc-400 transition-colors leading-relaxed line-clamp-2">
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
