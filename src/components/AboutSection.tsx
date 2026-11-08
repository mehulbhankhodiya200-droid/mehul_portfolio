import React from 'react';
import { User, BookOpen, Globe2, CheckCircle, Zap } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Junior Developer Role', value: '6+ Months', sub: 'UEST EdTech, Morbi' },
    { label: 'Production Apps', value: '3+ Shipped', sub: 'Laravel MVC Architecture' },
    { label: 'REST APIs Engineered', value: '12+ Endpoints', sub: 'Web & React Native' },
    { label: 'Query Performance', value: '40% Faster', sub: 'Indexed & Optimized' },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] sm:text-xs font-mono text-[#00FF87]">
            <User size={13} /> ABOUT MEHUL
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering Solutions with <span className="timeline-gradient-text">Precision & Speed</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-xs sm:text-base">
            Bridging robust backend engineering in Laravel with responsive, dynamic frontend experiences in React.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="glass-panel p-4 sm:p-6 rounded-xl sm:rounded-2xl glass-panel-hover transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-[#00FF87]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00FF87]/15 transition-colors" />
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#00FF87] font-mono mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-xs sm:text-base">
                {stat.label}
              </div>
              <div className="text-emerald-400/70 text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-mono truncate">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Left Bio Card */}
          <div className="lg:col-span-7 glass-panel p-5 sm:p-8 rounded-2xl flex flex-col justify-between space-y-5 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-2xl font-bold text-white flex items-center gap-2">
                <Zap size={20} className="text-[#00FF87]" /> Full Stack Developer Mindset
              </h3>
              <p className="text-zinc-300 leading-relaxed text-xs sm:text-base">
                I am a passionate Junior Full Stack Developer completing my BCA at Saurashtra University with an impressive <strong className="text-white">7.45 CGPA</strong>. My engineering focuses on relational database design, secure RESTful APIs, and responsive animated frontends.
              </p>
              <p className="text-zinc-300 leading-relaxed text-xs sm:text-base">
                During my 6-month tenure as Junior Full Stack Developer at <strong className="text-[#00FF87]">UEST EdTech</strong>, I actively contributed to enterprise-grade School ERP software, architected modular Laravel services, resolved security vulnerabilities through policy auth, and trimmed API response times by up to 40%.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2">
              {[
                'Clean MVC Code Architecture',
                'Optimized SQL & Indexing',
                'Sanctum & JWT Secure Auth',
                'Responsive React & Tailwind UI',
                'Agile Sprint Team Player',
                'Dedicated Continuous Learner',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle size={14} className="text-[#00FF87] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Education & Languages Card */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Education Card */}
            <div className="glass-panel p-4 sm:p-6 rounded-2xl space-y-3 sm:space-y-4 flex-1">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs sm:text-sm font-semibold border-b border-emerald-500/20 pb-2.5">
                <BookOpen size={16} /> EDUCATION JOURNEY
              </div>

              <div className="space-y-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-[#03150d] border border-emerald-500/20">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-base">Bachelor of Computer Applications (BCA)</h4>
                      <div className="text-zinc-400 text-[11px] sm:text-xs mt-0.5">Saurashtra University</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono bg-emerald-950 text-[#00FF87] border border-emerald-500/30 whitespace-nowrap">
                      7.45 CGPA
                    </span>
                  </div>
                  <div className="text-zinc-400 text-[10px] sm:text-xs mt-1.5 font-mono">2023 – 2026 (Expected)</div>
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-[#03150d] border border-emerald-500/20">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-bold text-white text-xs sm:text-base">Higher Secondary Certificate (HSC)</h4>
                      <div className="text-zinc-400 text-[11px] sm:text-xs mt-0.5">Uma Vidhya Sankul</div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono bg-emerald-950 text-[#00FF87] border border-emerald-500/30 whitespace-nowrap">
                      70% Score
                    </span>
                  </div>
                  <div className="text-zinc-400 text-[10px] sm:text-xs mt-1.5 font-mono">Completed 2023</div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-panel p-4 rounded-2xl">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-semibold mb-2.5">
                <Globe2 size={15} /> SPOKEN LANGUAGES
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-[#02130b] border border-emerald-500/20">
                  <div className="text-white font-medium text-xs">Gujarati</div>
                  <div className="text-[10px] text-[#00FF87] font-mono mt-0.5">Native</div>
                </div>
                <div className="p-2 rounded-lg bg-[#02130b] border border-emerald-500/20">
                  <div className="text-white font-medium text-xs">Hindi</div>
                  <div className="text-[10px] text-emerald-300 font-mono mt-0.5">Fluent</div>
                </div>
                <div className="p-2 rounded-lg bg-[#02130b] border border-emerald-500/20">
                  <div className="text-white font-medium text-xs">English</div>
                  <div className="text-[10px] text-emerald-300 font-mono mt-0.5">Working</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
