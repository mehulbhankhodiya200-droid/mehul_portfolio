import React from 'react';
import { Github, Linkedin, FileDown } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-5 md:px-12 py-4 flex items-center justify-between backdrop-blur-md bg-[#020b07]/60 border-b border-[rgba(0,255,135,0.12)]">
      {/* Brand / Logo */}
      <a
        href="#hero"
        onClick={() => soundFx.playClick()}
        className="flex items-center gap-3 group"
      >
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#052e16] to-[#02130b] border border-[rgba(0,255,135,0.3)] flex items-center justify-center font-bold text-[#00FF87] shadow-[0_0_15px_rgba(0,255,135,0.2)] group-hover:shadow-[0_0_25px_rgba(0,255,135,0.5)] transition-all duration-300">
          <span className="font-mono text-base tracking-wider">MB</span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00FF87] rounded-full animate-ping opacity-75" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00FF87] rounded-full" />
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-semibold tracking-wide text-white group-hover:text-[#00FF87] transition-colors">
            Mehul Bhankhodiya
          </div>
          <div className="text-[11px] text-emerald-400/70 font-mono">
            Full Stack Developer
          </div>
        </div>
      </a>

      {/* Center Status Pill */}
      <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#052014]/70 border border-emerald-500/25 text-xs text-emerald-300">
        <span className="w-2 h-2 rounded-full bg-[#00FF87] animate-pulse" />
        <span className="font-medium">Ready for Full-Time Roles • Junior Full Stack Developer</span>
      </div>

      {/* Right Socials & Resume CTA */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com/mehulbhankhodiya"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playHover()}
          className="p-2.5 rounded-lg bg-[#041a10]/60 border border-[rgba(0,255,135,0.2)] text-zinc-300 hover:text-[#00FF87] hover:border-[#00FF87] transition-all hover:scale-105"
          title="GitHub Profile"
        >
          <Github size={18} />
        </a>

        <a
          href="https://linkedin.com/in/mehul-bhankhodiya"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => soundFx.playHover()}
          className="p-2.5 rounded-lg bg-[#041a10]/60 border border-[rgba(0,255,135,0.2)] text-zinc-300 hover:text-[#00FF87] hover:border-[#00FF87] transition-all hover:scale-105"
          title="LinkedIn Profile"
        >
          <Linkedin size={18} />
        </a>

        <a
          href="/Mehul_Bhankhodiya_Resume.pdf"
          download="Mehul_Bhankhodiya_Resume.pdf"
          onClick={() => soundFx.playClick()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-[#00FF87] text-black font-semibold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,135,0.3)] hover:shadow-[0_0_30px_rgba(0,255,135,0.6)] hover:scale-105 transition-all"
        >
          <FileDown size={16} />
          <span className="hidden sm:inline">Download CV</span>
          <span className="sm:hidden">CV</span>
        </a>
      </div>
    </header>
  );
};
