
import React from 'react';
import { motion } from 'framer-motion';

const SCENARIOS = [
    {
        id: 1,
        input: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600&auto=format&fit=crop",
        outputs: [
            "https://images.unsplash.com/photo-1594035910387-fea477942698?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=600&auto=format&fit=crop"
        ]
    },
    {
        id: 2,
        input: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop",
        outputs: [
            "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&w=600&auto=format&fit=crop"
        ]
    },
    {
        id: 3,
        input: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
        outputs: [
            "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop"
        ]
    }
];

const AdStudioSection: React.FC = () => {
    return (
        <section className="py-20 md:py-32 px-6 bg-[#050505] overflow-hidden" id="ad-studio">
             <div className="container mx-auto max-w-[1100px] relative z-10">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        صور منتجاتك.. <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">صارت حملات عالمية.</span>
                    </h2>
                </div>

                {/* Scenarios Grid */}
                <div className="flex flex-col gap-16 md:gap-24">
                    {SCENARIOS.map((scenario, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col md:flex-row items-center gap-6 md:gap-12"
                        >
                            {/* Input Image (1 Image) */}
                            <div className="w-full md:w-1/3">
                                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/5 relative group">
                                     {/* Input Overlay Hint - Minimal */}
                                     <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                     <img 
                                        src={scenario.input} 
                                        alt="Original" 
                                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" 
                                     />
                                     <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur px-3 py-1 rounded-full text-[10px] text-white/80 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                        الأصل
                                     </div>
                                </div>
                            </div>

                            {/* Arrow Indicator (Subtle) */}
                            <div className="hidden md:flex flex-col items-center justify-center opacity-20">
                                <div className="w-2 h-2 bg-white rounded-full mb-1" />
                                <div className="w-2 h-2 bg-white rounded-full mb-1" />
                                <div className="w-2 h-2 bg-white rounded-full" />
                            </div>

                            {/* Output Images (2 Images) */}
                            <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 md:gap-6">
                                {scenario.outputs.map((img, i) => (
                                    <div key={i} className="aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/5 relative group">
                                        <img 
                                            src={img} 
                                            alt="Result" 
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                                        />
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

             </div>
        </section>
    );
};

export default AdStudioSection;
