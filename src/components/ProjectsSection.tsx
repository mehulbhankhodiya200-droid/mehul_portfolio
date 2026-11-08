import React from 'react';
import {
  FolderGit2,
  Github,
  Zap,
  ShoppingCart,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const ProjectsSection: React.FC = () => {

  const projects = [
    {
      id: 1,
      featured: true,
      title: 'Your Decor — E-Commerce Platform',
      year: '2026',
      role: 'Full Stack Developer',
      category: 'Full Stack & E-Commerce',
      summary:
        'A high-performance modern e-commerce platform built with Laravel and React, featuring dynamic cart management, wishlist, multi-step checkout, and real-time inventory management.',
      metrics: [
        { label: 'Lighthouse Score', val: '87 / 100' },
        { label: 'SQL Optimization', val: '40% Faster' },
        { label: 'Security Auth', val: 'Sanctum Verified' },
      ],
      highlights: [
        'Built full e-commerce ecosystem: interactive product catalog, dynamic state cart, wishlist, and secure checkout.',
        'Engineered comprehensive Admin Panel with live inventory dashboard, order pipeline, and role-based permissions.',
        'Optimized 15+ complex SQL queries using composite database indexes and smart caching mechanisms.',
        'Implemented Laravel Sanctum API authentication with automated email verification and secure password recovery.',
        'Designed a responsive React UI achieving high Lighthouse accessibility and speed ratings.',
      ],
      stack: ['PHP 8', 'Laravel MVC', 'MySQL', 'React.js', 'Bootstrap 5', 'Laravel Sanctum', 'JavaScript'],
      github: 'https://github.com/mehulbhankhodiya',
      demo: '#',
      image: '/preview-theme.jpg',
      icon: ShoppingCart,
    },
    {
      id: 2,
      featured: false,
      title: 'Enterprise School ERP Management Suite',
      year: '2026',
      role: 'Backend & API Engineer',
      category: 'Enterprise SaaS',
      summary:
        'Comprehensive school administration software supporting student admission pipelines, attendance tracking, automated fee generation, and RESTful APIs for mobile integration.',
      metrics: [
        { label: 'API Endpoints', val: '12+ Built' },
        { label: 'Security Audits', val: '5 Policies Fixed' },
        { label: 'Dev Velocity', val: '+30% Speed' },
      ],
      highlights: [
        'Built robust backend modules cut dev cycle duration by 30% through reusable service patterns.',
        'Engineered 12+ REST endpoints serving web administrators and React Native mobile clients.',
        'Implemented fine-grained Laravel Policy authorization protecting student academic records.',
      ],
      stack: ['Laravel MVC', 'PHP', 'MySQL', 'RESTful APIs', 'React Native Clients', 'Eloquent ORM'],
      github: 'https://github.com/mehulbhankhodiya',
      demo: '#',
      icon: GraduationCap,
    },
    {
      id: 3,
      featured: false,
      title: 'Multiverse Timeline Portfolio & Canvas Engine',
      year: '2026',
      role: 'Creative Frontend Developer',
      category: 'Interactive Web',
      summary:
        'Futuristic animated developer portfolio with reactive cursor-tracking physics, Loki multiverse green timeline strands, Web Audio FX, and GSAP micro-animations.',
      metrics: [
        { label: 'Rendering FPS', val: '60 FPS Solid' },
        { label: 'Animation Engine', val: 'GSAP + Canvas' },
        { label: 'Bundle Build', val: 'Vite Optimized' },
      ],
      highlights: [
        'Custom 2D Canvas engine tracking mouse velocity, drawing woven temporal strands and constellation networks.',
        'Synthesizer sound controller built directly with Web Audio API for interactive tactile feedback.',
        'Engineered with React 18, TypeScript, Tailwind CSS, and strict accessibility standards.',
      ],
      stack: ['React', 'TypeScript', 'Vite', 'GSAP', 'HTML5 Canvas', 'Tailwind CSS', 'Web Audio API'],
      github: 'https://github.com/mehulbhankhodiya',
      demo: '#',
      icon: Sparkles,
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-[#00FF87]">
            <FolderGit2 size={14} /> PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="timeline-gradient-text">Engineering Projects</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base">
            Explore production applications showcasing full-stack proficiency, database optimization, and modern UI.
          </p>
        </div>

        {/* Featured Project 1 (Your Decor) Hero Card */}
        {projects
          .filter((p) => p.featured)
          .map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                onMouseEnter={() => soundFx.playHover()}
                className="mb-14 glass-panel p-6 sm:p-10 rounded-3xl glass-panel-hover border-[rgba(0,255,135,0.3)] shadow-[0_0_35px_rgba(0,255,135,0.1)] relative overflow-hidden group"
              >
                {/* Ambient glow in corner */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#00FF87]/15 to-transparent rounded-bl-full pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00FF87] text-black shadow-[0_0_15px_#00FF87] flex items-center gap-1.5">
                        <Icon size={14} /> FEATURED FLAGSHIP
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                        {project.year} • {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#00FF87] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-300 leading-relaxed text-base">
                      {project.summary}
                    </p>

                    {/* Metrics Banner */}
                    <div className="grid grid-cols-3 gap-3 py-2">
                      {project.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-xl bg-[#02140c] border border-emerald-500/25"
                        >
                          <div className="text-[#00FF87] font-bold text-base sm:text-lg font-mono">
                            {m.val}
                          </div>
                          <div className="text-zinc-400 text-xs">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-2 pt-1">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300">
                          <Zap size={14} className="text-[#00FF87] shrink-0 mt-1" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#03150d] text-emerald-200 border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4 pt-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-[#00FF87] text-black font-bold text-sm shadow-[0_0_20px_rgba(0,255,135,0.3)] hover:scale-105 transition-all"
                      >
                        <Github size={16} /> View Source Code
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Visual Mockup */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 shadow-[0_0_30px_rgba(0,0,0,0.8)] bg-[#020d08] aspect-[4/3] group-hover:border-[#00FF87] transition-all">
                      <img
                        src="/preview-theme.jpg"
                        alt="Your Decor Showcase"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#010905] via-transparent to-transparent" />
                      
                      {/* Live Badge */}
                      <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#041a10]/90 backdrop-blur-md border border-emerald-500/30 flex items-center justify-between">
                        <div>
                          <div className="text-white text-xs font-bold">Your Decor eCommerce</div>
                          <div className="text-[11px] text-[#00FF87] font-mono">React UI + Laravel Sanctum</div>
                        </div>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00FF87] animate-ping" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => soundFx.playHover()}
                  className="glass-panel p-7 rounded-2xl glass-panel-hover flex flex-col justify-between space-y-6 group transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#032014] border border-emerald-500/30 flex items-center justify-center text-[#00FF87] group-hover:scale-110 group-hover:border-[#00FF87] transition-all shadow-[0_0_15px_rgba(0,255,135,0.15)]">
                        <Icon size={24} />
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                        {project.year} • {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00FF87] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-[#02130b] border border-emerald-500/20 text-center">
                          <div className="text-xs font-bold text-[#00FF87] font-mono">{m.val}</div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights bullet */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Zap size={13} className="text-[#00FF87] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Stack & Links */}
                  <div className="space-y-4 pt-2 border-t border-emerald-500/20">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#03150d] text-emerald-300 border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-[#00FF87] transition-colors"
                      >
                        <Github size={15} /> GitHub Repository &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
