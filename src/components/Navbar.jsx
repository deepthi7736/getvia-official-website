import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-t-0 border-x-0 mx-auto max-w-7xl backdrop-blur-md"
    >
      <a href="#home" className="flex items-center">
  <img
    src="/getvia-logo.png"
    alt="Getvia"
    className="h-10 w-auto object-contain"
  />
</a>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-gray-400">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#business" className="hover:text-white transition-colors">For Business</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm font-sans font-medium text-white hover:opacity-80 transition-opacity">Log In</button>
          <button className="flex items-center gap-1 bg-white text-[#0A0F0D] font-sans font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#E2FF44] transition-all duration-300 shadow-lg">
            Explore Getvia <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-[#0A0F0D] border-b border-white/10 flex flex-col p-6 gap-6 font-sans text-base"
        >
          <a href="#product" onClick={() => setIsOpen(false)}>Product</a>
          <a href="#solutions" onClick={() => setIsOpen(false)}>Solutions</a>
          <a href="#business" onClick={() => setIsOpen(false)}>For Business</a>
          <hr className="border-white/10" />
          <button className="text-left w-full text-gray-400">Log In</button>
          <button className="w-full text-center bg-[#E2FF44] text-[#0A0F0D] py-3 rounded-full font-semibold">Explore Getvia</button>
        </motion.div>
      )}
    </motion.nav>
  );
}
