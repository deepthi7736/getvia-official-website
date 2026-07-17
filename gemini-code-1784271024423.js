import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center px-6 max-w-7xl mx-auto z-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 self-start backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E2FF44]" />
            <span className="font-sans text-xs tracking-wide text-gray-300 font-medium">Reimagining Discovery Ecosystems</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] font-light text-white">
            Discover Better <br />
            <span className="italic font-normal text-[#E2FF44]">Businesses.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-sans text-lg md:text-xl text-gray-400 font-light max-w-xl leading-relaxed">
            Getvia is a premium technology ecosystem uniting discerning customers with authenticated institutions and top-tier professionals. No noise. Just absolute trust.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button className="flex items-center justify-center gap-2 bg-[#E2FF44] text-[#0A0F0D] font-sans font-semibold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 group shadow-xl">
              Explore the Platform <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 border border-white/20 text-white font-sans font-medium px-8 py-4 rounded-full hover:bg-white/5 transition-colors">
              For Premium Entities
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full aspect-square max-w-[440px] glass-panel rounded-[2.5rem] p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#E2FF44]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-semibold tracking-wide">Studio Architectural Ltd.</h4>
                  <p className="text-xs font-sans text-gray-400">Verified Professional Tier</p>
                </div>
              </div>
              <span className="bg-[#E2FF44]/10 text-[#E2FF44] text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded border border-[#E2FF44]/20">Active</span>
            </div>

            <div className="my-auto py-6 z-10">
              <p className="text-xs font-mono text-gray-500 mb-2">// CAPABILITIES METRIC</p>
              <div className="flex flex-wrap gap-2">
                {['Spatial Strategy', 'Eco Design', 'Consultancy'].map((tag) => (
                  <span key={tag} className="text-xs font-sans bg-white/5 border border-white/10 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5 text-xs text-gray-400 font-sans">
                <Zap className="w-3.5 h-3.5 text-[#E2FF44]" /> Response Index: <span className="text-white font-medium">&lt; 9 mins</span>
              </div>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border border-[#0A0F0D] bg-zinc-800" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}