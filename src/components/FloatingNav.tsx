import React from 'react';
import { Home, User, Code2, Briefcase, Mail, Volume2, VolumeX } from 'lucide-react';

interface FloatingNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isMuted: boolean;
  toggleAudio: () => void;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  activeSection,
  onNavigate,
  isMuted,
  toggleAudio,
}) => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About Me', icon: User },
    { id: 'skills', label: 'Tech Stack', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Get in Touch', icon: Mail, isContact: true },
  ];

  return (
    <div className="fixed right-3 md:right-7 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 flex md:flex-col items-center left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 w-max">
      {/* Dock Container */}
      <div className="bg-[#04130c]/90 backdrop-blur-xl border border-[rgba(0,255,135,0.25)] rounded-full py-2 px-3 md:py-4 md:px-2.5 shadow-[0_0_30px_rgba(0,0,0,0.85),0_0_15px_rgba(0,255,135,0.2)] flex md:flex-col items-center gap-2 md:gap-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <div key={item.id} className="relative group flex items-center">
              {/* Tooltip on left */}
              <div className="absolute right-12 px-3 py-1 bg-[#02130b] border border-[rgba(0,255,135,0.3)] text-[#a7f3d0] text-xs font-medium rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 shadow-lg shadow-black/80">
                {item.label}
              </div>

              {/* Nav Button */}
              <button
                onClick={() => onNavigate(item.id)}
                aria-label={item.label}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? item.isContact
                      ? 'bg-gradient-to-r from-emerald-500 to-[#00FF87] text-black shadow-[0_0_20px_#00FF87]'
                      : 'bg-[rgba(0,255,135,0.2)] text-[#00FF87] shadow-[0_0_15px_rgba(0,255,135,0.5)] border border-[#00FF87]'
                    : item.isContact
                    ? 'bg-emerald-950/60 text-[#00FF87] hover:bg-emerald-600/30 border border-emerald-500/40 hover:scale-110'
                    : 'text-zinc-400 hover:text-[#00FF87] hover:bg-[rgba(0,255,135,0.1)] hover:scale-110'
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.3 : 1.8} />

                {/* Glowing notification pill for contact */}
                {item.isContact && !isActive && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00FF87] rounded-full animate-ping opacity-75" />
                )}
                {item.isContact && (
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00FF87] rounded-full border border-black" />
                )}
              </button>
            </div>
          );
        })}

        {/* Divider */}
        <div className="w-5 h-[1px] bg-emerald-500/25 my-1" />

        {/* Ambient Sound FX Toggle */}
        <div className="relative group flex items-center">
          <div className="absolute right-12 px-3 py-1 bg-[#02130b] border border-[rgba(0,255,135,0.3)] text-[#a7f3d0] text-xs font-medium rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-x-2 group-hover:translate-x-0 shadow-lg shadow-black/80">
            {isMuted ? 'Turn Sound FX On' : 'Mute Sound FX'}
          </div>
          <button
            onClick={toggleAudio}
            aria-label="Toggle Sound Effects"
            className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-[#00FF87] hover:bg-[rgba(0,255,135,0.1)] transition-all duration-300"
          >
            {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} className="text-[#00FF87]" />}
          </button>
        </div>
      </div>
    </div>
  );
};

