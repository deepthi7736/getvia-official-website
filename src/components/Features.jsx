import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BarChart3, MessageSquare, Compass } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Compass />, title: "Contextual Discovery Map", desc: "Sophisticated spatial engines that isolate hyper-relevant enterprise hubs gracefully." },
    { icon: <MessageSquare />, title: "Instant WhatsApp Integrations", desc: "Direct, latency-free pathways minimizing client conversions friction lines securely." },
    { icon: <BarChart3 />, title: "Advanced Analytics Engine", desc: "Deeper predictive consumer analytics charting impressions transparently." },
    { icon: <Smartphone />, title: "Uncompromising Interface Design", desc: "Flawlessly rendered viewpoints configured precisely for fluid premium web presence." }
  ];

  return (
    <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#E2FF44] block mb-2">// TECHNICAL FEATURES</span>
          <h2 className="text-4xl md:text-6xl tracking-tight max-w-2xl">Intuitive Solutions Built For Global Velocity.</h2>
        </div>
        <p className="font-sans text-gray-400 font-light max-w-sm text-sm md:text-base leading-relaxed">
          Every layer optimized meticulously to eliminate traditional local marketplace listing friction entirely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="glass-panel p-8 rounded-3xl flex flex-col md:flex-row items-start gap-6 hover:bg-white/[0.04] transition-colors"
          >
            <div className="p-3.5 rounded-2xl bg-white/5 text-[#E2FF44] border border-white/10 shrink-0">
              {feat.icon}
            </div>
            <div>
              <h3 className="text-xl font-sans font-semibold mb-2 text-white">{feat.title}</h3>
              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">{feat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
