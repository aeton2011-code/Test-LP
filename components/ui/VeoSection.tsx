import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VeoSection: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#030304] to-[#030304] pointer-events-none" />
      
      <div className="container mx-auto max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Side */}
            <div className="flex-1 text-center lg:text-right order-2 lg:order-1">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    صورك الجامدة.. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-400 to-white">صارت تتحرك.</span>
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                    وفر تكاليف الإنتاج الباهظة. حول صور منتجاتك الثابتة إلى فيديوهات سينمائية متحركة (Cinematic Motion) تجذب الانتباه وتزيد المبيعات، بضغطة زر.
                </p>
                <button className="h-12 px-8 rounded-full bg-white text-black font-bold hover:bg-[#EDEDED] transition-colors flex items-center justify-center gap-2 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <span>جرب تحريك الصور</span>
                    <Play size={16} fill="currentColor" />
                </button>
            </div>

            {/* Visual Side - Simulation of Static to Video */}
            <div className="flex-1 w-full order-1 lg:order-2">
                <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#0E0E10] aspect-[4/3] group">
                    
                    {/* The "Video" */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
                        {/* Placeholder for the product image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-2xl opacity-40 animate-pulse-slow"></div>
                            <div className="relative z-10 text-white/20 font-bold text-6xl tracking-tighter">PERFUME</div>
                        </div>
                    </div>

                    {/* UI Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <Play size={18} fill="currentColor" className="ml-1" />
                        </div>
                        <div className="flex-1">
                            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                                <motion.div 
                                    className="h-full bg-blue-500"
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                />
                            </div>
                        </div>
                        <span className="text-xs font-mono text-white">00:04</span>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-6 left-6 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur border border-white/10 text-xs font-bold text-white">
                        AI Motion Generated
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default VeoSection;