import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Rocket,
  CheckCircle,
  Copy,
  Sparkles,
} from 'lucide-react';
import { soundFx } from '../utils/audio';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    soundFx.playClick();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      soundFx.playSuccess();
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1200);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    soundFx.playClick();
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Glowing Rocket & Title Area */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16 relative">
          <div className="relative">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-[#032e18] via-[#054425] to-[#00FF87]/30 border border-[#00FF87]/50 flex items-center justify-center text-[#00FF87] shadow-[0_0_25px_rgba(0,255,135,0.4)] animate-float">
              <Rocket size={24} className="sm:w-8 sm:h-8 -rotate-45" />
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00FF87] rounded-full animate-ping" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="timeline-gradient-text">Together</span>
          </h2>
          <p className="text-zinc-300 max-w-2xl text-xs sm:text-base font-light leading-relaxed">
            Have a website idea, a web application to build, or a development role in mind? Feel free to reach out. I am open to discussing new engineering opportunities and full-time roles.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="glass-panel p-4 sm:p-7 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6 border-[rgba(0,255,135,0.25)]">
              <h3 className="text-base sm:text-xl font-bold text-white flex items-center gap-2">
                <Sparkles size={16} className="text-[#00FF87]" /> Direct Connection
              </h3>

              {/* Email Card */}
              <div
                onClick={() => copyToClipboard('mehulbhankhodiya200@gmail.com', 'email')}
                onMouseEnter={() => soundFx.playHover()}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#02130b] border border-emerald-500/20 hover:border-[#00FF87] transition-all cursor-pointer group flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-[#00FF87] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-mono">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00FF87] transition-colors truncate max-w-[180px] xs:max-w-[220px] sm:max-w-none">
                      mehulbhankhodiya200@gmail.com
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Copy Email"
                  className="text-zinc-400 group-hover:text-[#00FF87] p-1"
                >
                  {copiedField === 'email' ? <CheckCircle size={15} className="text-[#00FF87]" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Phone Card */}
              <div
                onClick={() => copyToClipboard('+91 9737922938', 'phone')}
                onMouseEnter={() => soundFx.playHover()}
                className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#02130b] border border-emerald-500/20 hover:border-[#00FF87] transition-all cursor-pointer group flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5 sm:gap-3.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-[#00FF87] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs text-zinc-400 font-mono">Mobile / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#00FF87] transition-colors">
                      +91 9737922938
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Copy Phone"
                  className="text-zinc-400 group-hover:text-[#00FF87] p-1"
                >
                  {copiedField === 'phone' ? <CheckCircle size={15} className="text-[#00FF87]" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#02130b] border border-emerald-500/20 flex items-center gap-2.5 sm:gap-3.5">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-[#00FF87] shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs text-zinc-400 font-mono">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Morbi, Gujarat, India (Open to Remote / Relocation)
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-1 flex items-center gap-2 sm:gap-3">
                <a
                  href="https://linkedin.com/in/mehul-bhankhodiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-[#031c11] border border-emerald-500/30 hover:border-[#00FF87] text-white hover:text-[#00FF87] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Linkedin size={15} /> LinkedIn
                </a>

                <a
                  href="https://github.com/mehulbhankhodiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-[#031c11] border border-emerald-500/30 hover:border-[#00FF87] text-white hover:text-[#00FF87] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                >
                  <Github size={15} /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-4 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-[rgba(0,255,135,0.3)] shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              {isSuccess && (
                <div className="mb-4 sm:mb-6 p-3.5 sm:p-4 rounded-xl bg-emerald-950/90 border-2 border-[#00FF87] text-emerald-200 flex items-center gap-2.5 shadow-[0_0_20px_#00FF87]">
                  <CheckCircle size={20} className="text-[#00FF87] shrink-0" />
                  <div>
                    <div className="font-bold text-xs sm:text-sm text-white">Message Transmitted!</div>
                    <div className="text-[11px] sm:text-xs text-emerald-300">
                      Thank you for reaching out. Mehul will reply promptly!
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[11px] sm:text-xs font-mono text-emerald-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#02130b] border border-emerald-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00FF87] transition-all text-xs sm:text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 sm:space-y-2">
                    <label className="text-[11px] sm:text-xs font-mono text-emerald-300">E-mail *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#02130b] border border-emerald-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00FF87] transition-all text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-mono text-emerald-300">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Time Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#02130b] border border-emerald-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00FF87] transition-all text-xs sm:text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1 sm:space-y-2">
                  <label className="text-[11px] sm:text-xs font-mono text-emerald-300">Message *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your role or project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#02130b] border border-emerald-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00FF87] transition-all text-xs sm:text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-[#00FF87] to-emerald-400 text-black font-extrabold text-xs sm:text-sm shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={15} />
                  <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
