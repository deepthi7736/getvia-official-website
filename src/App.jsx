import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#0A0F0D] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] gradient-glow pointer-events-none z-0" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Ecosystem />
        <Features />
      </main>

      <Footer />
    </div>
  );
}
