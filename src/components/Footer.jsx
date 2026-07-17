import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#060908] border-t border-white/5 font-sans mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 rounded-sm bg-[#E2FF44] flex items-center justify-center font-bold text-[#0A0F0D] text-[10px]">V</div>
            <span className="font-bold text-lg tracking-tight text-white">getvia<span className="text-[#E2FF44]">.</span></span>
          </div>
          <p className="text-xs text-gray-500 max-w-xs leading-relaxed font-light">
            The next generation enterprise discovery environment designed for uncompromised validation metrics.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Platform</h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Smart Finder</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Verified API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Global Map Index</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Enterprise</h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Business Profiles</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Success System</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Growth Engine</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">Corporate</h4>
          <ul className="space-y-2.5 text-xs text-gray-400 font-light">
            <li><a href="#" className="hover:text-white transition-colors">Vision Blueprint</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security Integrity</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Relations</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-gray-500">
        <div>&copy; 2026 Getvia Inc. All rights reserved globally.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Charter</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Operations</a>
        </div>
      </div>
    </footer>
  );
}
