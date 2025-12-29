
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { 
  LayoutDashboard, PenTool, BarChart3, Video, Lightbulb, 
  ArrowLeft, Sparkles, Copy, Terminal, Loader2, MessageSquare,
  ShoppingBag, Mic
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Tool Definition
interface Tool {
  id: string;
  name: string;
  desc: string;
  icon: any;
  category: 'creative' | 'analysis' | 'planning' | 'studio';
}

const TOOLS: Tool[] = [
  { id: 'hook-gen', name: 'مولد الهوكات', desc: 'جمل افتتاحية تخطف الانتباه في 3 ثواني', icon: PenTool, category: 'creative' },
  { id: 'script-gen', name: 'كاتب السكربتات', desc: 'سيناريو إعلاني كامل لإعلانك القادم', icon: Video, category: 'creative' },
  { id: 'product-desc', name: 'وصف المنتجات', desc: 'وصف احترافي يبيع المنتج', icon: ShoppingBag, category: 'creative' },
  { id: 'ad-audit', name: 'تحليل الإعلان', desc: 'فحص جودة الفيديو ونقاط الملل', icon: BarChart3, category: 'analysis' },
  { id: 'ideas', name: 'محرك الأفكار', desc: 'أفكار محتوى لا نهائية مربوطة بالترند', icon: Lightbulb, category: 'planning' },
  { id: 'voiceover', name: 'المعلق الصوتي', desc: 'تحويل النص إلى صوت باللهجة السعودية', icon: Mic, category: 'studio' },
];

const Dashboard: React.FC = () => {
  const [activeToolId, setActiveToolId] = useState<string | null>('hook-gen');
  const [inputTopic, setInputTopic] = useState('');
  const [tone, setTone] = useState('enthusiastic');
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const activeTool = TOOLS.find(t => t.id === activeToolId);

  // Gemini API Integration
  const handleGenerate = async () => {
    if (!inputTopic) return;
    
    setLoading(true);
    setGeneratedContent(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      // Prompt Engineering for Saudi Market
      const prompt = `
        Act as an expert copywriter for the Saudi Arabian market.
        Task: Generate 3 catchy, short video hooks (opening sentences for TikTok/Reels) about the following topic.
        Topic: ${inputTopic}
        Tone: ${tone === 'enthusiastic' ? 'Enthusiastic & High Energy' : tone === 'mystery' ? 'Mysterious & Shocking' : 'Professional & Trustworthy'}
        
        Requirements:
        1. Use "White Dialect" (Saudi accent understood by all).
        2. Keep it under 15 words per hook.
        3. Use emojis appropriate for the context.
        4. Format the output as a simple list.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
            temperature: 0.8, // Slightly creative
        }
      });

      setGeneratedContent(response.text || "عذراً، لم أتمكن من توليد النص. حاول مرة أخرى.");
    } catch (error) {
      console.error("GenAI Error:", error);
      setGeneratedContent("حدث خطأ في الاتصال بالذكاء الاصطناعي. الرجاء التحقق من المفتاح أو المحاولة لاحقاً.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Could add toast here
  };

  return (
    <div className="min-h-screen bg-[#030304] pt-20 pb-10 px-4 md:px-8 flex flex-col md:flex-row gap-6 relative overflow-hidden" dir="rtl">
        
        {/* Background Ambient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0 space-y-2">
            <div className="bg-[#0E0E10] border border-white/10 rounded-2xl p-4 mb-4">
                <div className="flex items-center gap-3 text-white mb-6 px-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Terminal size={16} />
                    </div>
                    <span className="font-bold text-lg">لوحة التحكم</span>
                </div>
                
                <div className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/5 text-white font-medium">
                        <LayoutDashboard size={18} />
                        <span>الرئيسية</span>
                    </button>
                    <div className="pt-4 pb-2 px-3 text-xs font-bold text-zinc-500 uppercase tracking-wider">الأدوات</div>
                    {TOOLS.map((tool) => (
                        <button 
                            key={tool.id}
                            onClick={() => setActiveToolId(tool.id)}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                                activeToolId === tool.id 
                                ? 'bg-primary/10 text-primary border border-primary/20 shadow-[0_0_15px_-5px_rgba(0,108,217,0.3)]' 
                                : 'text-zinc-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            <tool.icon size={18} />
                            <span className="text-sm">{tool.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            
            {/* Credits Card */}
            <div className="bg-gradient-to-br from-[#0E0E10] to-[#151515] border border-white/10 rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 blur-xl rounded-full" />
                <h4 className="text-white font-bold text-sm mb-2 relative z-10">الرصيد المتبقي</h4>
                <div className="text-2xl font-black text-white mb-1 relative z-10">450 <span className="text-xs font-medium text-zinc-500">cr</span></div>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-primary h-full w-[75%]" />
                </div>
                <button className="w-full mt-4 py-2 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200 transition-colors relative z-10">
                    ترقية الباقة
                </button>
            </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-h-[600px] flex flex-col gap-6">
            
            {/* Header */}
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {activeTool?.name || 'اختر أداة'}
                    </h1>
                    <p className="text-zinc-400 text-sm">
                        {activeTool?.desc}
                    </p>
                </div>
            </header>

            {/* Tool Interface */}
            <AnimatePresence mode="wait">
                {activeToolId === 'hook-gen' ? (
                    <motion.div 
                        key="hook-gen"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full"
                    >
                        {/* INPUT Section */}
                        <div className="bg-[#0E0E10] border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col">
                            <div className="space-y-6 flex-1">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-300 mb-2">عن ماذا يتحدث الفيديو؟</label>
                                    <textarea 
                                        value={inputTopic}
                                        onChange={(e) => setInputTopic(e.target.value)}
                                        placeholder="مثال: عطر صيفي برائحة الليمون، مناسب للدوام..."
                                        className="w-full h-32 bg-[#1A1A1C] border border-white/10 rounded-xl p-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-zinc-300 mb-2">النبرة (Tone)</label>
                                    <div className="grid grid-cols-3 gap-2">
                                        {[
                                            { id: 'enthusiastic', label: 'حماسية 🔥' },
                                            { id: 'mystery', label: 'غامضة 🤫' },
                                            { id: 'professional', label: 'رسمية 💼' }
                                        ].map((t) => (
                                            <button
                                                key={t.id}
                                                onClick={() => setTone(t.id)}
                                                className={`py-3 rounded-xl text-sm font-medium border transition-all ${
                                                    tone === t.id 
                                                    ? 'bg-primary text-white border-primary' 
                                                    : 'bg-[#1A1A1C] text-zinc-400 border-white/5 hover:border-white/20'
                                                }`}
                                            >
                                                {t.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={handleGenerate}
                                disabled={loading || !inputTopic}
                                className="w-full mt-8 bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={20} className="animate-spin" />
                                        جاري الكتابة...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles size={20} />
                                        توليد الهوكات
                                    </>
                                )}
                            </button>
                        </div>

                        {/* OUTPUT Section */}
                        <div className="bg-[#151516] border border-white/10 rounded-3xl p-6 md:p-8 relative overflow-hidden min-h-[400px]">
                            {/* Background Texture */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
                            
                            {!generatedContent && !loading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-600 p-8 text-center">
                                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                                        <Lightbulb size={32} className="opacity-50" />
                                    </div>
                                    <p className="max-w-xs">أدخل تفاصيل الفيديو واضغط "توليد" لترى سحر سديم ✨</p>
                                </div>
                            )}

                            {loading && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                                    <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                                    <p className="text-zinc-400 text-sm animate-pulse">جاري تحليل المحتوى وصياغة الأفكار...</p>
                                </div>
                            )}

                            {generatedContent && !loading && (
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-white font-bold">النتائج المقترحة:</h3>
                                        <button 
                                            onClick={() => copyToClipboard(generatedContent)}
                                            className="text-xs flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                                        >
                                            <Copy size={12} />
                                            نسخ الكل
                                        </button>
                                    </div>
                                    <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0E0E10] rounded-xl border border-white/5 p-4">
                                        <pre className="whitespace-pre-wrap font-sans text-zinc-200 leading-loose text-base">
                                            {generatedContent}
                                        </pre>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        <button className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-medium transition-colors border border-white/5">
                                            المزيد من الأفكار
                                        </button>
                                        <button className="flex-1 py-3 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors border border-primary/20">
                                            حفظ في المفضلة
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ) : (
                    /* Placeholder for other tools */
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center justify-center h-full bg-[#0E0E10] border border-white/10 rounded-3xl p-10 text-center"
                    >
                        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6 text-zinc-500">
                             {activeTool?.icon && <activeTool.icon size={40} />}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">قريباً..</h3>
                        <p className="text-zinc-500 max-w-sm">
                            هذه الأداة ({activeTool?.name}) قيد التطوير حالياً وستكون متاحة في التحديث القادم.
                        </p>
                        <button onClick={() => setActiveToolId('hook-gen')} className="mt-8 text-primary font-medium flex items-center gap-2 hover:underline">
                            <ArrowLeft size={16} />
                            العودة لمولد الهوكات
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    </div>
  );
};

export default Dashboard;
