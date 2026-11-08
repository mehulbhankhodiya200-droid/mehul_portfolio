import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Sparkles,
  ArrowRight,
  Download,
  Code2,
  Server,
  Database,
  Zap,
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const desktopPhotoRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const bioRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          headlineRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        )
        .from(
          bioRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          tagsRef.current,
          {
            y: 15,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.4'
        )
        .from(
          desktopPhotoRef.current,
          {
            scale: 0.9,
            opacity: 0,
            y: 25,
            duration: 1.1,
            ease: 'power2.out',
          },
          '-=0.9'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Subtle 3D mouse parallax on desktop photo
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!desktopPhotoRef.current) return;
    const rect = desktopPhotoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(desktopPhotoRef.current, {
      x: x * 0.04,
      y: y * 0.04,
      ease: 'power1.out',
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    if (!desktopPhotoRef.current) return;
    gsap.to(desktopPhotoRef.current, {
      x: 0,
      y: 0,
      ease: 'power2.out',
      duration: 0.8,
    });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[92vh] pt-20 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center px-4 sm:px-6 md:px-14 overflow-hidden"
    >
      {/* Background Loki multiverse throne motif */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15 overflow-hidden flex items-center justify-center">
        <img
          src="/loki-timelines.jpg"
          alt="Timeline Nexus Aesthetic"
          className="w-full h-full object-cover filter contrast-125 saturate-150 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030707] via-[#030707]/80 to-[#030707]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6">
          {/* Status Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#052b1b]/85 border border-[#00FF87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)] text-[11px] sm:text-xs font-mono text-[#00FF87]"
          >
            <Sparkles size={13} className="animate-spin-slow text-[#00FF87] shrink-0" />
            <span>JUNIOR FULL STACK DEV • MORBI, GUJARAT</span>
          </div>

          {/* Top Intro Row: On Mobile, Name and Photo sit side-by-side! */}
          <div className="w-full flex items-center justify-between gap-4">
            <div ref={headlineRef} className="flex-1 space-y-1 sm:space-y-3">
              <h2 className="text-zinc-400 text-xs sm:text-base md:text-xl font-medium tracking-wide">
                Hello, I am
              </h2>
              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
                Mehul <span className="timeline-gradient-text">Bhankhodiya</span>
              </h1>
              <p className="text-sm sm:text-xl md:text-2xl text-emerald-300/90 font-medium">
                Building Scalable Backends & Dynamic Web Experiences
              </p>
            </div>

            {/* Mobile-Only Portrait: Beside the name, NO labels covering face */}
            <div className="lg:hidden shrink-0 relative group">
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500 to-[#00FF87] opacity-60 blur-md group-hover:opacity-100 transition-opacity" />
              <div className="relative w-24 h-28 xs:w-28 xs:h-32 sm:w-36 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#00FF87] bg-[#020d08] shadow-[0_0_20px_rgba(0,255,135,0.3)]">
                <img
                  src="/mehul-photo.jpg"
                  alt="Mehul Bhankhodiya"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-1 text-center">
                  <span className="text-[9px] font-mono text-[#00FF87] font-semibold">Junior Dev</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p
            ref={bioRef}
            className="text-zinc-300 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl font-light"
          >
            Results-driven BCA developer with 6 months of hands-on Junior Developer experience at{' '}
            <span className="text-[#00FF87] font-medium">UEST EdTech</span> building
            production-grade web platforms. Specialized in{' '}
            <span className="text-white font-medium">Laravel MVC, PHP, MySQL, RESTful APIs</span>,
            and modern frontend engineering with <span className="text-[#00FF87] font-medium">React & the MERN stack</span>.
          </p>

          {/* Call to Actions & Circular Stamp */}
          <div ref={ctaRef} className="w-full flex flex-col sm:flex-row sm:items-center gap-4 pt-1 sm:pt-2">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#experience"
                onClick={() => soundFx.playClick()}
                className="group flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF87] text-black font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,135,0.4)] hover:shadow-[0_0_30px_rgba(0,255,135,0.7)] transition-all active:scale-95"
              >
                <span>View Experience</span>
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/Mehul_Bhankhodiya_Resume.pdf"
                download="Mehul_Bhankhodiya_Resume.pdf"
                onClick={() => soundFx.playClick()}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2.5 sm:py-3.5 rounded-xl bg-[#041a11]/90 hover:bg-[#072a1c] border border-[rgba(0,255,135,0.3)] text-emerald-300 font-semibold text-xs sm:text-sm hover:border-[#00FF87] transition-all shadow-md shadow-black"
              >
                <Download size={14} />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="w-full sm:w-auto text-center py-2 sm:py-3 px-3 text-zinc-300 hover:text-[#00FF87] text-xs sm:text-sm font-medium transition-colors"
              >
                Contact Me &rarr;
              </a>
            </div>

            {/* Rotating Circular Stamp (Visible on Tablet/Desktop) */}
            <div
              onClick={() => {
                soundFx.playClick();
                const el = document.getElementById('experience');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 hidden md:flex items-center justify-center shrink-0 cursor-pointer group"
              title="Click to explore experience"
            >
              <svg
                className="w-full h-full animate-spin-slow text-[#00FF87] opacity-80 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 100 100"
              >
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-mono tracking-[0.22em] uppercase fill-[#00FF87]">
                  <textPath href="#circlePath">
                    ★ FULL STACK DEV ★ MEHUL BHANKHODIYA
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#032014] border border-[#00FF87]/50 flex items-center justify-center text-[#00FF87] shadow-[0_0_12px_#00FF87] group-hover:scale-110 transition-all">
                <ArrowRight size={13} className="rotate-45 group-hover:rotate-90 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Tech Badges Pill Bar */}
          <div
            ref={tagsRef}
            className="pt-1 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-zinc-300 font-mono"
          >
            <span className="text-emerald-400 font-sans font-semibold mr-1">Arsenal:</span>
            {['PHP 8+', 'Laravel MVC', 'React.js', 'MySQL', 'Node.js', 'REST APIs'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#04160f]/80 border border-emerald-500/20 text-emerald-200/90 shadow-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Column (Desktop Only): Large Borderless Standalone Image with Cosmic Glow & Floating Icons */}
        <div
          className="hidden lg:flex lg:col-span-5 justify-center items-center relative py-6"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Cosmic Nebula Glow Behind Image */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#053d24]/60 via-[#00FF87]/20 to-emerald-900/30 blur-3xl pointer-events-none" />

          {/* Orbital Tech Rings */}
          <div className="absolute w-[380px] h-[380px] rounded-full border border-emerald-500/25 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-[#00FF87]/30 animate-pulse-slow pointer-events-none" />

          {/* Main Borderless Photo Container */}
          <div
            ref={desktopPhotoRef}
            className="relative z-10 w-[380px] flex justify-center items-end"
          >
            {/* Seamless Cutout-style Image */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
              <img
                src="/mehul-photo.jpg"
                alt="Mehul Bhankhodiya"
                className="w-full h-auto object-cover object-top scale-105 filter contrast-110 drop-shadow-[0_20px_35px_rgba(0,255,135,0.25)] select-none pointer-events-none"
              />
            </div>

            {/* Floating Tech Icon 1: React (Top Right) */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="absolute -top-2 -right-4 px-3.5 py-2 rounded-2xl bg-[#041a10]/95 backdrop-blur-md border border-[rgba(0,255,135,0.4)] shadow-[0_0_15px_rgba(0,255,135,0.3)] flex items-center gap-2 animate-float pointer-events-auto cursor-pointer group"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#032918] flex items-center justify-center text-[#00FF87]">
                <Code2 size={16} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white group-hover:text-[#00FF87]">
                  React.js
                </div>
                <div className="text-[9px] text-emerald-400/80 font-mono">Frontend</div>
              </div>
            </div>

            {/* Floating Tech Icon 2: Laravel (Mid Left) */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="absolute top-1/3 -left-6 px-3.5 py-2 rounded-2xl bg-[#041a10]/95 backdrop-blur-md border border-[rgba(0,255,135,0.4)] shadow-[0_0_15px_rgba(0,255,135,0.3)] flex items-center gap-2 animate-float pointer-events-auto cursor-pointer group"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#032918] flex items-center justify-center text-[#00FF87]">
                <Server size={16} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white group-hover:text-[#00FF87]">
                  Laravel MVC
                </div>
                <div className="text-[9px] text-emerald-400/80 font-mono">Backend</div>
              </div>
            </div>

            {/* Floating Tech Icon 3: MySQL (Bottom Right) */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="absolute bottom-8 -right-4 px-3.5 py-2 rounded-2xl bg-[#041a10]/95 backdrop-blur-md border border-[rgba(0,255,135,0.4)] shadow-[0_0_15px_rgba(0,255,135,0.3)] flex items-center gap-2 animate-float pointer-events-auto cursor-pointer group"
              style={{ animationDelay: '4s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#032918] flex items-center justify-center text-[#00FF87]">
                <Database size={16} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white group-hover:text-[#00FF87]">
                  MySQL
                </div>
                <div className="text-[9px] text-emerald-400/80 font-mono">40% Optimized</div>
              </div>
            </div>

            {/* Floating Tech Icon 4: MERN (Bottom Left) */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="absolute bottom-4 -left-4 px-3 py-1.5 rounded-xl bg-[#041a10]/95 backdrop-blur-md border border-[rgba(0,255,135,0.35)] shadow-[0_0_12px_rgba(0,255,135,0.25)] flex items-center gap-1.5 animate-float pointer-events-auto cursor-pointer group"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="w-5 h-5 rounded-md bg-[#032918] flex items-center justify-center text-[#00FF87]">
                <Zap size={13} />
              </div>
              <div className="text-[11px] font-bold text-emerald-300 font-mono">
                MERN Stack
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
