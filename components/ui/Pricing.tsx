
import React, { useState } from 'react';
import { Check, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PlanTier {
    credits: number;
    price: number;
}

interface Plan {
    id: string;
    name: string;
    desc: string;
    features: string[];
    priceLabel: string;
    recommended?: boolean;
    tiers: PlanTier[];
    period: string;
}

const PLANS: Plan[] = [
    {
        id: 'plus',
        name: 'بلس (Plus)',
        desc: 'بداية قوية للمتاجر الناشئة',
        period: '/ شهر',
        tiers: [
            { credits: 1000, price: 99 },
            { credits: 2000, price: 198 }
        ],
        features: [
            'جميع أدوات صناعة المحتوى الأساسية',
            'تحليل المتجر الإلكتروني',
            'محلل الحملات الإعلانية (قريباً)',
            'خطة المحتوى',
            'المعلق الصوتي'
        ],
        priceLabel: 'قيمة ممتازة',
    },
    {
        id: 'pro',
        name: 'برو (Pro)',
        desc: 'الحل المتكامل للتجار وصناع المحتوى',
        period: '/ شهر',
        tiers: [
            { credits: 4000, price: 299 },
            { credits: 8000, price: 598 },
            { credits: 16000, price: 1196 },
            { credits: 32000, price: 2392 }
        ],
        features: [
            'كل ما في بلس',
            'ستديو الإعلانات (فائق)',
            'محرك الفيديو (Veo)',
            'تحليل الحملات المتقدم (قريباً)',
            'دعم فني سريع',
            'أسرع وقت معالجة (Fast Lane)',
            'وصول مبكر للميزات الجديدة'
        ],
        priceLabel: 'للمحترفين',
        recommended: true, 
    }
];

const PlanCard: React.FC<{ plan: Plan; isAnnual: boolean }> = ({ plan, isAnnual }) => {
    const [selectedTierIndex, setSelectedTierIndex] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const currentTier = plan.tiers[selectedTierIndex];
    const isPro = plan.id === 'pro';

    // Pricing Calculation
    const monthlyPrice = currentTier.price;
    // 25% discount for annual, displayed as monthly cost
    const price = isAnnual ? Math.round(monthlyPrice * 0.75) : monthlyPrice; 

    // Apple-style Design Logic
    const cardBg = isPro ? 'bg-[#151516] text-white border-white/10' : 'bg-white text-gray-900 border-gray-200';
    const textPrimary = isPro ? 'text-white' : 'text-gray-900';
    const textSecondary = isPro ? 'text-zinc-400' : 'text-gray-500';
    const accentColor = isPro ? 'text-blue-400' : 'text-blue-600';
    
    const buttonStyle = isPro 
        ? 'bg-white text-black hover:bg-gray-200 border border-white/10' 
        : 'bg-gray-900 text-white hover:bg-black';
    
    const selectorBg = isPro ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200';
    const featureIconBg = isPro ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-50 text-blue-600';

    const handleTierSelect = (index: number) => {
        setSelectedTierIndex(index);
        setIsDropdownOpen(false);
    };

    return (
        <div className={`relative flex flex-col h-full transition-all duration-300 rounded-[20px] md:rounded-[24px] overflow-hidden ${isPro ? 'shadow-2xl shadow-black/50 ring-1 ring-white/10 scale-[1.02] z-10' : 'hover:shadow-lg'}`}>
            
            <div className={`flex flex-col h-full p-4 md:p-8 ${cardBg} border`}>
                
                {/* Header */}
                <div className="mb-4 md:mb-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between items-start mb-2 gap-2">
                        <h3 className={`text-lg md:text-2xl font-bold ${textPrimary}`}>{plan.name}</h3>
                        {plan.recommended && (
                            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-900/20 border border-blue-400/20 self-start lg:self-auto">
                                <Sparkles size={10} className="text-white" fill="currentColor" />
                                <span className="text-[9px] md:text-[10px] font-bold text-white tracking-wide whitespace-nowrap">
                                    الأمثل للنمو
                                </span>
                            </div>
                        )}
                    </div>
                    <p className={`text-xs md:text-sm font-medium leading-relaxed ${textSecondary} min-h-[40px] line-clamp-2 md:line-clamp-none`}>{plan.desc}</p>
                </div>

                {/* Dynamic Pricing Selector */}
                <div className="mb-6 md:mb-8 relative">
                    <div 
                        className={`rounded-2xl border transition-all ${selectorBg} ${isDropdownOpen ? 'ring-2 ring-blue-500/50' : ''}`}
                    >
                        {/* Selected Display */}
                        <button 
                            onClick={() => plan.tiers.length > 1 && setIsDropdownOpen(!isDropdownOpen)}
                            disabled={plan.tiers.length <= 1}
                            className={`w-full p-3 md:p-4 flex flex-col md:flex-row items-center justify-between text-center md:text-right gap-2 ${plan.tiers.length > 1 ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                            <div className="flex flex-col items-center md:items-start w-full">
                                <div className="flex items-baseline gap-2 justify-center md:justify-start w-full">
                                    <span className={`text-2xl md:text-3xl font-black font-sans tracking-tight ${textPrimary}`}>
                                        {price.toLocaleString('en-US')}
                                    </span>
                                    <span className={`text-xs md:text-sm font-bold ${textSecondary}`}>ريال</span>
                                    {isAnnual && (
                                        <span className={`text-xs font-medium line-through decoration-red-500/50 decoration-2 text-red-400/80 mr-1`}>
                                            {monthlyPrice}
                                        </span>
                                    )}
                                </div>
                                <span className={`text-[10px] md:text-xs ${textSecondary} mt-0.5 font-medium`}>
                                    {isAnnual ? '/ شهر (يدفع سنوياً)' : '/ شهر'}
                                </span>
                            </div>
                            
                            <div className="flex items-center justify-center gap-1 w-full md:w-auto border-t md:border-t-0 border-current/5 pt-2 md:pt-0 mt-1 md:mt-0">
                                <span className={`text-xs md:text-sm font-bold font-sans whitespace-nowrap ${accentColor}`}>
                                    {currentTier.credits.toLocaleString('en-US')} Cr
                                </span>
                                {plan.tiers.length > 1 && (
                                    <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 ${textSecondary} transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                )}
                            </div>
                        </button>

                        {/* Dropdown Options */}
                        <AnimatePresence>
                            {isDropdownOpen && plan.tiers.length > 1 && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className={`absolute top-full left-0 right-0 mt-2 rounded-xl shadow-xl z-20 overflow-hidden max-h-48 overflow-y-auto border ${isPro ? 'bg-[#1c1c1e] border-white/10' : 'bg-white border-gray-200'}`}
                                >
                                    {plan.tiers.map((tier, idx) => {
                                        const tierPrice = isAnnual ? Math.round(tier.price * 0.75) : tier.price;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => handleTierSelect(idx)}
                                                className={`w-full flex items-center justify-between px-3 py-2 md:px-4 md:py-3 text-xs md:text-sm transition-colors ${idx === selectedTierIndex ? (isPro ? 'bg-white/10' : 'bg-gray-50') : (isPro ? 'hover:bg-white/5' : 'hover:bg-gray-50')}`}
                                            >
                                                <span className={`font-bold font-sans ${textPrimary}`}>{tier.credits.toLocaleString('en-US')} Cr</span>
                                                <span className={`font-medium font-sans ${textSecondary}`}>{tierPrice} ريال</span>
                                            </button>
                                        );
                                    })}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Features List */}
                <div className={`flex-1 pt-4 md:pt-6 border-t ${isPro ? 'border-white/10' : 'border-gray-100'}`}>
                    <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                        {plan.features.map((feat, i) => (
                            <li key={i} className={`flex items-start gap-2 md:gap-3 text-[10px] md:text-xs font-medium leading-relaxed ${textSecondary}`}>
                                <div className={`mt-0.5 min-w-[16px] w-[16px] h-[16px] md:min-w-[18px] md:w-[18px] md:h-[18px] rounded-full flex items-center justify-center shrink-0 ${featureIconBg}`}>
                                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3" />
                                </div>
                                <span>{feat}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action Button */}
                <button
                    className={`w-full py-3 md:py-4 rounded-xl text-xs md:text-sm font-bold transition-all shadow-sm mt-auto ${buttonStyle} hover:scale-[1.02] active:scale-[0.98]`}
                >
                    {plan.priceLabel}
                </button>
            </div>
        </div>
    );
};

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="w-full pt-32 pb-24 px-4 bg-[#050505] relative overflow-hidden" id="pricing">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                أسعار مرنة تناسب طموحك
            </h2>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-12">
            <div className="bg-[#0E0E10] border border-white/10 p-1.5 rounded-full flex relative shadow-xl">
                 <button
                    onClick={() => setIsAnnual(false)}
                    className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 min-w-[100px] ${!isAnnual ? 'text-black bg-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
                 >
                    شهري
                 </button>
                 <button
                    onClick={() => setIsAnnual(true)}
                    className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 min-w-[120px] flex items-center justify-center gap-2 ${isAnnual ? 'text-black bg-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
                 >
                    سنوي
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border whitespace-nowrap transition-colors ${isAnnual ? 'bg-black text-white border-black' : 'bg-primary/20 text-primary border-primary/20'}`}>
                        وفر 25%
                    </span>
                 </button>
            </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-8 items-stretch">
            {PLANS.map((plan) => (
                <PlanCard key={plan.id} plan={plan} isAnnual={isAnnual} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
