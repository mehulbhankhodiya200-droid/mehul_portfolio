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
  const photoRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const bioRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const tagsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(badgeRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          headlineRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          '-=0.4'
        )
        .from(
          bioRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.5'
        )
        .from(
          ctaRef.current,
          {
            y: 25,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        )
        .from(
          tagsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          '-=0.4'
        )
        .from(
          photoRef.current,
          {
            scale: 0.9,
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=1.0'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Subtle 3D mouse parallax on photo
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(photoRef.current, {
      x: x * 0.04,
      y: y * 0.04,
      ease: 'power1.out',
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    if (!photoRef.current) return;
    gsap.to(photoRef.current, {
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
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center px-6 md:px-14 overflow-hidden"
    >
      {/* Background Loki multiverse throne motif with soft blend */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15 overflow-hidden flex items-center justify-center">
        <img
          src="/loki-timelines.jpg"
          alt="Timeline Nexus Aesthetic"
          className="w-full h-full object-cover filter contrast-125 saturate-150 mix-blend-screen scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030707] via-[#030707]/80 to-[#030707]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Status Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#052b1b]/80 border border-[#00FF87]/40 shadow-[0_0_15px_rgba(0,255,135,0.2)] text-xs font-mono text-[#00FF87]"
          >
            <Sparkles size={14} className="animate-spin-slow text-[#00FF87]" />
            <span>JUNIOR FULL STACK DEVELOPER • MORBI, GUJARAT</span>
          </div>

          {/* Name & Title */}
          <div ref={headlineRef} className="space-y-3">
            <h2 className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">
              Hello, I am
            </h2>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
              Mehul <span className="timeline-gradient-text">Bhankhodiya</span>
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-300/90 font-medium">
              Building Scalable Backends & Dynamic Web Experiences
            </p>
          </div>

          {/* Bio */}
          <p
            ref={bioRef}
            className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-2xl font-light"
          >
            Results-driven BCA developer with 6 months of hands-on Junior Developer experience at{' '}
            <span className="text-[#00FF87] font-medium">UEST EdTech</span> building
            production-grade web platforms. Specialized in{' '}
            <span className="text-white font-medium">Laravel MVC, PHP, MySQL, RESTful APIs</span>,
            and modern frontend engineering with <span className="text-[#00FF87] font-medium">React & the MERN stack</span>.
          </p>

          {/* Call to Actions & Circular Stamp */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                onClick={() => soundFx.playClick()}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF87] text-black font-bold text-sm shadow-[0_0_25px_rgba(0,255,135,0.4)] hover:shadow-[0_0_35px_rgba(0,255,135,0.7)] transition-all hover:scale-105 active:scale-95"
              >
                <span>View Experience</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a
                href="/Mehul_Bhankhodiya_Resume.pdf"
                download="Mehul_Bhankhodiya_Resume.pdf"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#041a11]/90 hover:bg-[#072a1c] border border-[rgba(0,255,135,0.3)] text-emerald-300 font-semibold text-sm hover:border-[#00FF87] transition-all hover:scale-105 shadow-md shadow-black"
              >
                <Download size={17} />
                <span>Get Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => soundFx.playClick()}
                className="px-5 py-3.5 rounded-xl text-zinc-300 hover:text-[#00FF87] text-sm font-medium transition-colors"
              >
                Contact Me &rarr;
              </a>
            </div>

            {/* Rotating Circular Stamp (Matching Image 2) */}
            <div className="relative w-24 h-24 hidden sm:flex items-center justify-center shrink-0">
              <svg
                className="w-full h-full animate-spin-slow text-[#00FF87] opacity-80"
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
              <div className="absolute w-8 h-8 rounded-full bg-[#032014] border border-[#00FF87]/50 flex items-center justify-center text-[#00FF87] shadow-[0_0_12px_#00FF87]">
                <ArrowRight size={14} className="rotate-45" />
              </div>
            </div>
          </div>

          {/* Tech Badges Pill Bar */}
          <div
            ref={tagsRef}
            className="pt-2 flex flex-wrap items-center gap-2.5 text-xs text-zinc-300 font-mono"
          >
            <span className="text-emerald-400 font-sans font-semibold mr-1">Core Arsenal:</span>
            {['PHP 8+', 'Laravel MVC', 'React.js', 'MySQL', 'Node.js', 'REST APIs', 'Sanctum Auth'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-[#04160f]/80 border border-emerald-500/20 text-emerald-200/90 shadow-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Right Column: Borderless Standalone Image with Cosmic Glow & Floating Icons (Matching Image 2) */}
        <div
          className="lg:col-span-5 flex justify-center items-center relative py-6"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Cosmic Nebula Glow Behind Image */}
          <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#053d24]/60 via-[#00FF87]/20 to-emerald-900/30 blur-3xl pointer-events-none" />

          {/* Orbital Tech Rings (Behind photo) */}
          <div className="absolute w-[340px] h-[340px] sm:w-[430px] sm:h-[430px] rounded-full border border-emerald-500/25 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[290px] h-[290px] sm:w-[370px] sm:h-[370px] rounded-full border border-dashed border-[#00FF87]/30 animate-pulse-slow pointer-events-none" />

          {/* Main Borderless Photo Container */}
          <div
            ref={photoRef}
            className="relative z-10 w-[290px] sm:w-[360px] md:w-[400px] flex justify-center items-end"
          >
            {/* Seamless Cutout-style Image without any border box */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]">
              <img
                src="/mehul-photo.jpg"
                alt="Mehul Bhankhodiya"
                className="w-full h-auto object-cover object-top scale-105 filter contrast-110 drop-shadow-[0_20px_40px_rgba(0,255,135,0.25)] select-none pointer-events-none"
              />
            </div>

            {/* Floating Animated Tech Icon 1: React (Top Right) */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="absolute -top-3 -right-2 sm:-right-4 px-3.5 py-2 rounded-2xl bg-[#041a10]/90 backdrop-blur-md border border-[rgba(0,255,135,0.4)] shadow-[0_0_20px_rgba(0,255,135,0.3)] flex items-center gap-2 animate-float pointer-events-auto cursor-pointer group"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#032918] flex items-center justify-center text-[#00FF87] group-hover:scale-110 transition-transform">
                <Code2 size={16} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white group-hover:text-[#00FF87] transition-colors">
                  React.js
                </div>
                <div className="text-[9px] text-emerald-400/80 font-mono">Frontend</div>
              </div>
            </div>

            {/* Floating Animated Tech Icon 2: Laravel (Mid Left) */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="absolute top-1/3 -left-3 sm:-left-6 px-3.5 py-2 rounded-2xl bg-[#041a10]/90 backdrop-blur-md border border-[rgba(0,255,135,0.4)] shadow-[0_0_20px_rgba(0,255,135,0.3)] flex items-center gap-2 animate-float pointer-events-auto cursor-pointer group"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#032918] flex items-center justify-center text-[#00FF87] group-hover:scale-110 transition-transform">
                <Server size={16} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white group-hover:text-[#00FF87] transition-colors">
                  Laravel MVC
                </div>
                <div className="text-[9px] text-emerald-400/80 font-mono">Backend Architecture</div>
              </div>
            </div>

            {/* Floating Animated Tech Icon 3: MySQL (Bottom Right) */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="absolute bottom-12 -right-2 sm:-right-4 px-3.5 py-2 rounded-2xl bg-[#041a10]/90 backdrop-blur-md border border-[rgba(0,255,135,0.4)] shadow-[0_0_20px_rgba(0,255,135,0.3)] flex items-center gap-2 animate-float pointer-events-auto cursor-pointer group"
              style={{ animationDelay: '4s' }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#032918] flex items-center justify-center text-[#00FF87] group-hover:scale-110 transition-transform">
                <Database size={16} />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white group-hover:text-[#00FF87] transition-colors">
                  MySQL & APIs
                </div>
                <div className="text-[9px] text-emerald-400/80 font-mono">40% Optimized</div>
              </div>
            </div>

            {/* Floating Animated Tech Icon 4: Full Stack / Node (Bottom Left) */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="absolute bottom-6 -left-2 sm:-left-4 px-3 py-1.5 rounded-xl bg-[#041a10]/90 backdrop-blur-md border border-[rgba(0,255,135,0.35)] shadow-[0_0_15px_rgba(0,255,135,0.25)] flex items-center gap-2 animate-float pointer-events-auto cursor-pointer group"
              style={{ animationDelay: '1.5s' }}
            >
              <div className="w-6 h-6 rounded-lg bg-[#032918] flex items-center justify-center text-[#00FF87]">
                <Zap size={14} />
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
