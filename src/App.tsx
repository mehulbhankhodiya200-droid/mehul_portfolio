import { useState, useEffect } from 'react';
import { TimelineCanvas } from './components/TimelineCanvas';
import { FloatingNav } from './components/FloatingNav';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { soundFx } from './utils/audio';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMuted, setIsMuted] = useState(false);

  // Toggle Sound FX
  const toggleAudio = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    soundFx.setMuted(nextMute);
    if (!nextMute) {
      soundFx.playSuccess();
    }
  };

  // Scroll to section handler
  const handleNavigate = (sectionId: string) => {
    soundFx.playClick();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active section observer on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030707] text-[#e6f6ee] selection:bg-[#00FF87] selection:text-black overflow-x-hidden">
      {/* Interactive Loki Multiverse Cursor Reacting Canvas */}
      <TimelineCanvas />

      {/* Cyber Grid Subtle Background Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 cyber-grid opacity-40" />

      {/* Fixed Header */}
      <Header />

      {/* Right Floating Nav Dock (Matching Image 3) */}
      <FloatingNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMuted={isMuted}
        toggleAudio={toggleAudio}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
