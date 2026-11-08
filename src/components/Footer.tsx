import React from 'react';
import { ArrowUp } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-8 pb-24 md:pb-12 px-4 sm:px-6 md:px-14 border-t border-emerald-500/15 bg-[#010604]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#041a10] border border-[#00FF87]/30 flex items-center justify-center text-[#00FF87] font-mono text-xs font-bold shrink-0">
            MB
          </div>
          <div>
            <div className="text-white text-xs sm:text-sm font-semibold">Mehul Bhankhodiya</div>
            <div className="text-[11px] sm:text-xs text-zinc-500">
              Junior Full Stack Developer • Morbi, Gujarat
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs text-zinc-400 font-mono">
          <span>React + TS + Vite + GSAP</span>
          <span className="text-[#00FF87]">●</span>
          <span className="text-emerald-400">Loki Green Timeline</span>
        </div>

        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#041d12] border border-emerald-500/30 text-emerald-300 hover:text-[#00FF87] hover:border-[#00FF87] transition-all text-xs font-mono"
        >
          <span>Top</span>
          <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
};
