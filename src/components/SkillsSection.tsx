import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Terminal,
  Cpu,
  Workflow,
  Sparkles,
  Layers,
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'languages', label: 'Languages' },
    { id: 'database', label: 'Databases & Tools' },
  ];

  const skillGroups = [
    {
      category: 'backend',
      name: 'Laravel MVC Framework',
      level: 'Advanced',
      desc: 'Controllers, Routing, Middleware, Policies, Architecture',
      icon: Server,
      badge: 'Production Proven',
    },
    {
      category: 'backend',
      name: 'RESTful API Engineering',
      level: 'Advanced',
      desc: 'Designed 12+ endpoints for Web & React Native apps with caching',
      icon: Cpu,
      badge: 'Core Focus',
    },
    {
      category: 'backend',
      name: 'Laravel Sanctum Auth',
      level: 'Proficient',
      desc: 'Token-based authentication, CSRF protection, password resets',
      icon: Workflow,
      badge: 'Security',
    },
    {
      category: 'backend',
      name: 'Node.js & Express.js',
      level: 'Proficient',
      desc: 'Asynchronous event-driven backend services and custom middleware',
      icon: Server,
      badge: 'Full Stack',
    },
    {
      category: 'frontend',
      name: 'React.js',
      level: 'Advanced',
      desc: 'Hooks, Functional Components, State Management, Custom Hooks',
      icon: Code2,
      badge: 'Frontend Core',
    },
    {
      category: 'frontend',
      name: 'GSAP Animation & Canvas',
      level: 'Proficient',
      desc: 'High-performance interactive animations, timeline tweens & scrolls',
      icon: Sparkles,
      badge: 'Interactive',
    },
    {
      category: 'frontend',
      name: 'Bootstrap 5 & Tailwind CSS',
      level: 'Expert',
      desc: 'Responsive mobile-first layouts, modern glassmorphism & dark UIs',
      icon: Layers,
      badge: 'UI Design',
    },
    {
      category: 'frontend',
      name: 'HTML5 & Modern CSS3',
      level: 'Expert',
      desc: 'Semantic structure, Flexbox, Grid, CSS animations & SVG',
      icon: Code2,
      badge: 'Foundation',
    },
    {
      category: 'languages',
      name: 'PHP 8+',
      level: 'Advanced',
      desc: 'Object-Oriented Programming, PSR standards, Composer packages',
      icon: Terminal,
      badge: 'Primary Backend',
    },
    {
      category: 'languages',
      name: 'JavaScript & TypeScript',
      level: 'Advanced',
      desc: 'Async/await, closures, typed interfaces, event-loop principles',
      icon: Terminal,
      badge: 'Modern JS',
    },
    {
      category: 'languages',
      name: 'Python',
      level: 'Intermediate',
      desc: 'Scripting, backend logic, data parsing and algorithm design',
      icon: Terminal,
      badge: 'Polyglot',
    },
    {
      category: 'languages',
      name: 'Java',
      level: 'Intermediate',
      desc: 'Core OOP concepts, collection frameworks and application logic',
      icon: Terminal,
      badge: 'OOP',
    },
    {
      category: 'database',
      name: 'MySQL Relational Database',
      level: 'Advanced',
      desc: 'Complex joins, composite indexing, query profiling, normalization',
      icon: Database,
      badge: 'High Performance',
    },
    {
      category: 'database',
      name: 'MongoDB',
      level: 'Proficient',
      desc: 'Document schemas, aggregation pipelines, MERN stack integration',
      icon: Database,
      badge: 'NoSQL',
    },
    {
      category: 'database',
      name: 'Git & GitHub Version Control',
      level: 'Advanced',
      desc: 'Feature branching, pull requests, merge conflict resolution',
      icon: Workflow,
      badge: 'Collaboration',
    },
    {
      category: 'database',
      name: 'Postman & API Testing',
      level: 'Advanced',
      desc: 'Automated test collections, environment variables, mock servers',
      icon: Cpu,
      badge: 'Testing',
    },
  ];

  const filteredSkills =
    activeCategory === 'all'
      ? skillGroups
      : skillGroups.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] sm:text-xs font-mono text-[#00FF87]">
            <Code2 size={13} /> TECHNICAL EXPERTISE
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The Multi-Stack <span className="timeline-gradient-text">Toolkit</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-xs sm:text-base">
            From database indexing and secure authentication to dynamic client-side rendering with React and GSAP.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 pt-4 sm:pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-emerald-500 to-[#00FF87] text-black shadow-[0_0_15px_rgba(0,255,135,0.4)] scale-105 font-bold'
                    : 'bg-[#041a10]/70 text-zinc-300 hover:text-[#00FF87] border border-emerald-500/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="glass-panel p-4 sm:p-5 rounded-2xl glass-panel-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#032014] border border-emerald-500/30 flex items-center justify-center text-[#00FF87] group-hover:scale-110 transition-all shadow-[0_0_10px_rgba(0,255,135,0.15)]">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-950/80 text-[#00FF87] border border-emerald-500/30">
                      {skill.badge}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-sm sm:text-base mb-1 group-hover:text-[#00FF87] transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-3 sm:mb-4">
                    {skill.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-emerald-500/15 flex items-center justify-between text-xs font-mono text-zinc-300">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] shadow-[0_0_8px_#00FF87]" />
                    {skill.level}
                  </span>
                  <span className="text-zinc-500 text-[10px] sm:text-[11px] group-hover:text-emerald-400 transition-colors">
                    Production Ready
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
