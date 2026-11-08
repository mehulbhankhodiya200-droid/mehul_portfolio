import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp, ShieldAlert, Users, Layers } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-14">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-[#00FF87]">
            <Briefcase size={14} /> CAREER MILESTONES
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & <span className="timeline-gradient-text">Impact</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base">
            Delivering measurable performance gains and clean architecture on production codebases.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-emerald-500/30 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12">
          {/* Main Experience Node */}
          <div className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-[33px] md:-left-[49px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#030e08] border-2 border-[#00FF87] flex items-center justify-center shadow-[0_0_15px_#00FF87]">
              <span className="w-2.5 h-2.5 bg-[#00FF87] rounded-full animate-ping opacity-75" />
              <span className="w-2.5 h-2.5 bg-[#00FF87] rounded-full" />
            </div>

            {/* Experience Card */}
            <div
              onMouseEnter={() => soundFx.playHover()}
              className="glass-panel p-6 sm:p-8 rounded-2xl glass-panel-hover transition-all duration-300 group-hover:border-[#00FF87]/50"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-500/20 pb-4 mb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-950 text-[#00FF87] border border-emerald-500/30">
                      CURRENT ROLE
                    </span>
                    <span className="text-zinc-400 text-xs flex items-center gap-1">
                      <MapPin size={13} className="text-emerald-400" /> Morbi, Gujarat
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    Junior Full Stack Developer
                  </h3>
                  <div className="text-emerald-300 font-medium text-base">
                    UEST EdTech
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono bg-[#02140c] px-3.5 py-1.5 rounded-lg border border-emerald-500/20 self-start sm:self-auto">
                  <Calendar size={14} className="text-[#00FF87]" />
                  <span>Jan 2026 – Present</span>
                </div>
              </div>

              {/* Achievements with quantifiable impact */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-emerald-950/80 text-[#00FF87] shrink-0 border border-emerald-500/30">
                    <TrendingUp size={16} />
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    <strong className="text-white">Accelerated Development Cycle by 30%:</strong> Architected and shipped backend modules for 3 scalable web applications utilizing Laravel MVC architectural patterns.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-emerald-950/80 text-[#00FF87] shrink-0 border border-emerald-500/30">
                    <Layers size={16} />
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    <strong className="text-white">40% API Response Time Optimization:</strong> Designed and implemented 12+ RESTful API endpoints catering to both web and React Native mobile clients, optimizing heavy queries with caching.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-emerald-950/80 text-[#00FF87] shrink-0 border border-emerald-500/30">
                    <ShieldAlert size={16} />
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    <strong className="text-white">Fixed 5 Critical Security Vulnerabilities:</strong> Implemented rigorous Laravel Policies, gate checks, and middleware-based role authentication safeguarding sensitive customer data.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 rounded bg-emerald-950/80 text-[#00FF87] shrink-0 border border-emerald-500/30">
                    <Users size={16} />
                  </div>
                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                    <strong className="text-white">Enterprise School ERP System:</strong> Actively developing key components for an integrated School ERP / School Management Software in a collaborative 6-member Agile sprint team.
                  </p>
                </div>
              </div>

              {/* Technology badges */}
              <div className="mt-6 pt-5 border-t border-emerald-500/20 flex flex-wrap gap-2">
                {[
                  'PHP 8',
                  'Laravel MVC',
                  'MySQL',
                  'REST APIs',
                  'React Native Integration',
                  'Laravel Policies',
                  'Agile Scrum',
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded bg-[#03150d] border border-emerald-500/20 text-xs font-mono text-emerald-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
