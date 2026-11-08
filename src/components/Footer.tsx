import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 md:px-14 border-t border-emerald-500/15 bg-[#010604]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#041a10] border border-[#00FF87]/30 flex items-center justify-center text-[#00FF87] font-mono text-xs font-bold">
            MB
          </div>
          <div>
            <div className="text-white text-sm font-semibold">Mehul Bhankhodiya</div>
            <div className="text-xs text-zinc-500">
              Junior Full Stack Developer • Morbi, Gujarat
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
          <span>Engineered with React + TypeScript + Vite + GSAP</span>
          <span className="text-[#00FF87]">●</span>
          <span className="text-emerald-400">Temporal Green Universe</span>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#041d12] border border-emerald-500/30 text-emerald-300 hover:text-[#00FF87] hover:border-[#00FF87] transition-all hover:scale-105 text-xs font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
};
