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
    <section id="contact" className="relative py-28 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Glowing Rocket & Title Area */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 relative">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#032e18] via-[#054425] to-[#00FF87]/30 border border-[#00FF87]/50 flex items-center justify-center text-[#00FF87] shadow-[0_0_30px_rgba(0,255,135,0.4)] animate-float">
              <Rocket size={32} className="-rotate-45" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#00FF87] rounded-full animate-ping" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="timeline-gradient-text">Together</span>
          </h2>
          <p className="text-zinc-300 max-w-2xl text-base md:text-lg font-light leading-relaxed">
            Have a website idea, a web application to build, or a development role in mind? Feel free to reach out. I am always open to discussing new engineering opportunities, full-time roles, and innovative ideas.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-panel p-7 rounded-3xl space-y-6 border-[rgba(0,255,135,0.25)]">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles size={18} className="text-[#00FF87]" /> Direct Connection
              </h3>

              {/* Email Card */}
              <div
                onClick={() => copyToClipboard('mehulbhankhodiya200@gmail.com', 'email')}
                onMouseEnter={() => soundFx.playHover()}
                className="p-4 rounded-2xl bg-[#02130b] border border-emerald-500/20 hover:border-[#00FF87] transition-all cursor-pointer group flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-[#00FF87] group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#00FF87] transition-colors break-all">
                      mehulbhankhodiya200@gmail.com
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Copy Email"
                  className="text-zinc-400 group-hover:text-[#00FF87] p-1.5"
                >
                  {copiedField === 'email' ? <CheckCircle size={16} className="text-[#00FF87]" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone Card */}
              <div
                onClick={() => copyToClipboard('+91 9737922938', 'phone')}
                onMouseEnter={() => soundFx.playHover()}
                className="p-4 rounded-2xl bg-[#02130b] border border-emerald-500/20 hover:border-[#00FF87] transition-all cursor-pointer group flex items-center justify-between"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-[#00FF87] group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 font-mono">Mobile / WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#00FF87] transition-colors">
                      +91 9737922938
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Copy Phone"
                  className="text-zinc-400 group-hover:text-[#00FF87] p-1.5"
                >
                  {copiedField === 'phone' ? <CheckCircle size={16} className="text-[#00FF87]" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#02130b] border border-emerald-500/20 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-[#00FF87]">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">Location</div>
                  <div className="text-sm font-semibold text-white">
                    Morbi, Gujarat, India (Open to Relocation / Remote)
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://linkedin.com/in/mehul-bhankhodiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#031c11] border border-emerald-500/30 hover:border-[#00FF87] text-white hover:text-[#00FF87] text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>

                <a
                  href="https://github.com/mehulbhankhodiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#031c11] border border-emerald-500/30 hover:border-[#00FF87] text-white hover:text-[#00FF87] text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-10 rounded-3xl border-[rgba(0,255,135,0.3)] shadow-[0_0_40px_rgba(0,0,0,0.8)]">
              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/90 border-2 border-[#00FF87] text-emerald-200 flex items-center gap-3 shadow-[0_0_20px_#00FF87] animate-bounce">
                  <CheckCircle size={22} className="text-[#00FF87] shrink-0" />
                  <div>
                    <div className="font-bold text-sm text-white">Message Transmitted into the Multiverse!</div>
                    <div className="text-xs text-emerald-300">
                      Thank you for reaching out. Mehul will reply promptly!
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-emerald-300">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#02130b] border border-emerald-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00FF87] focus:ring-1 focus:ring-[#00FF87] transition-all text-sm"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-emerald-300">E-mail *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#02130b] border border-emerald-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00FF87] focus:ring-1 focus:ring-[#00FF87] transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-emerald-300">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Job Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#02130b] border border-emerald-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00FF87] focus:ring-1 focus:ring-[#00FF87] transition-all text-sm"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-emerald-300">Message... *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your project, timeline, or open role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#02130b] border border-emerald-500/30 text-white placeholder-zinc-500 focus:outline-none focus:border-[#00FF87] focus:ring-1 focus:ring-[#00FF87] transition-all text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-[#00FF87] to-emerald-400 text-black font-extrabold text-sm shadow-[0_0_30px_rgba(0,255,135,0.4)] hover:shadow-[0_0_40px_rgba(0,255,135,0.7)] transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send size={16} />
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

