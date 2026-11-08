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
    <section id="about" className="relative py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-[#00FF87]">
            <User size={14} /> ABOUT MEHUL
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering Solutions with <span className="timeline-gradient-text">Precision & Speed</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl text-base">
            Bridging robust backend engineering in Laravel with responsive, dynamic frontend experiences in React.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => soundFx.playHover()}
              className="glass-panel p-6 rounded-2xl glass-panel-hover transition-all duration-300 transform hover:-translate-y-1.5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FF87]/5 rounded-bl-full pointer-events-none group-hover:bg-[#00FF87]/15 transition-colors" />
              <div className="text-2xl sm:text-4xl font-extrabold text-[#00FF87] font-mono mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-white font-semibold text-sm sm:text-base">
                {stat.label}
              </div>
              <div className="text-emerald-400/70 text-xs mt-1 font-mono">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Bio Card */}
          <div className="lg:col-span-7 glass-panel p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Zap size={22} className="text-[#00FF87]" /> Full Stack Developer Mindset
              </h3>
              <p className="text-zinc-300 leading-relaxed text-base">
                I am a passionate Junior Full Stack Developer currently completing my BCA at Saurashtra University with an impressive <strong className="text-white">7.45 CGPA</strong>. My development journey is fueled by hands-on engineering where I take ideas from relational database design and secure backend RESTful APIs all the way to intuitive, animated interfaces.
              </p>
              <p className="text-zinc-300 leading-relaxed text-base">
                During my 6-month tenure as Junior Full Stack Developer at <strong className="text-[#00FF87]">UEST EdTech</strong>, I actively contributed to enterprise-grade School ERP software, architected modular Laravel services, resolved security vulnerabilities through granular policy auth, and trimmed API response times by up to 40%.
              </p>
            </div>

            {/* Core Values checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Clean MVC Code Architecture',
                'Optimized SQL & Indexing',
                'Sanctum & JWT Secure Auth',
                'Responsive React & Tailwind UI',
                'Agile Sprint Team Player',
                'Dedicated Continuous Learner',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-200">
                  <CheckCircle size={16} className="text-[#00FF87] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Education & Languages Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Education Card */}
            <div className="glass-panel p-6 rounded-2xl space-y-4 flex-1">
              <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-sm font-semibold border-b border-emerald-500/20 pb-3">
                <BookOpen size={18} /> EDUCATION JOURNEY
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-[#03150d] border border-emerald-500/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-white text-base">Bachelor of Computer Applications (BCA)</h4>
                      <div className="text-zinc-400 text-xs mt-0.5">Saurashtra University</div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-950 text-[#00FF87] border border-emerald-500/30">
                      CGPA: 7.45
                    </span>
                  </div>
                  <div className="text-zinc-400 text-xs mt-2 font-mono">2023 – 2026 (Expected)</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#03150d] border border-emerald-500/20">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-white text-base">Higher Secondary Certificate (HSC)</h4>
                      <div className="text-zinc-400 text-xs mt-0.5">Uma Vidhya Sankul</div>
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-emerald-950 text-[#00FF87] border border-emerald-500/30">
                      Score: 70%
                    </span>
                  </div>
                  <div className="text-zinc-400 text-xs mt-2 font-mono">Completed 2023</div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-panel p-5 rounded-2xl">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold mb-3">
                <Globe2 size={16} /> SPOKEN LANGUAGES
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-lg bg-[#02130b] border border-emerald-500/20">
                  <div className="text-white font-medium text-sm">Gujarati</div>
                  <div className="text-[11px] text-[#00FF87] font-mono mt-0.5">Native</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#02130b] border border-emerald-500/20">
                  <div className="text-white font-medium text-sm">Hindi</div>
                  <div className="text-[11px] text-emerald-300 font-mono mt-0.5">Fluent</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#02130b] border border-emerald-500/20">
                  <div className="text-white font-medium text-sm">English</div>
                  <div className="text-[11px] text-emerald-300 font-mono mt-0.5">Working</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
