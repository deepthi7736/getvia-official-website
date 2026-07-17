import React from 'react';
import { motion } from 'framer-motion';
import { User, Layers, ShieldCheck, Activity } from 'lucide-react';

export default function Ecosystem() {
  const steps = [
    { icon: <User className="w-5 h-5" />, label: "Discerning Customer", desc: "Intentional high-intent searches mapped contextually." },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Verified Architecture", desc: "Stringent background evaluation matching top global standardizations." },
    { icon: <Layers className="w-5 h-5" />, label: "Unified Interface", desc: "Direct client acquisition with real-time operational execution." },
    { icon: <Activity className="w-5 h-5" />, label: "Continuous Scaling", desc: "Insightful native optimization suite to compound organic authority." }
  ];

  return (
    <section id="product" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl tracking-tight mb-4">Engineered to Facilitate Complete Clarity</h2>
        <p className="font-sans text-gray-400 font-light text-base md:text-lg">
          The structural operational lifecycle path connecting critical discovery vectors seamlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        {steps.map((step, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="glass-panel rounded-2xl p-6 flex flex-col justify-between hover:border-white/20 transition-colors group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E2FF44] mb-6 group-hover:bg-[#E2FF44] group-hover:text-[#0A0F0D] transition-all duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-sans font-semibold mb-2">{step.label}</h3>
              <p className="text-sm font-sans text-gray-400 leading-relaxed font-light">{step.desc}</p>
            </div>
            <div className="font-mono text-xs text-gray-600 mt-8">0{idx + 1} // PROTOCOL</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}