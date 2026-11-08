import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  radius: number;
  alpha: number;
  color: string;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  length: number;
  color: string;
}

interface MouseTrail {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

export const TimelineCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (default to center)
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isMoving: false,
      speed: 0,
      lastX: width / 2,
      lastY: height / 2,
      lastTime: Date.now(),
    };

    // Color palette for green timeline strands
    const greenColors = [
      '#00FF87', // Neon Timeline Green
      '#10B981', // Emerald
      '#34D399', // Mint glow
      '#059669', // Deep jade
      '#6EE7B7', // Radiant light
    ];

    // Initialize particles (constellation nodes)
    const particleCount = Math.min(Math.floor((width * height) / 11000), 95);
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const color = greenColors[Math.floor(Math.random() * greenColors.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        baseRadius: Math.random() * 2 + 1.2,
        radius: Math.random() * 2 + 1.2,
        alpha: Math.random() * 0.6 + 0.3,
        color,
      });
    }

    // Sparks from clicks or fast movement
    let sparks: Spark[] = [];
    // Mouse trailing nodes
    let trails: MouseTrail[] = [];

    // Multiverse strands (radiating timeline curves)
    const strandsCount = 18;
    const strands = Array.from({ length: strandsCount }, (_, i) => ({
      angleOffset: (Math.PI * 2 * i) / strandsCount,
      waveSpeed: 0.002 + Math.random() * 0.002,
      frequency: 2 + Math.random() * 3,
      amplitude: 25 + Math.random() * 35,
      color: greenColors[i % greenColors.length],
    }));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    let idleTimer: any = null;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      const dt = Math.max(now - mouse.lastTime, 1);
      const dx = e.clientX - mouse.lastX;
      const dy = e.clientY - mouse.lastY;
      mouse.speed = Math.sqrt(dx * dx + dy * dy) / dt;

      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.lastX = e.clientX;
      mouse.lastY = e.clientY;
      mouse.lastTime = now;
      mouse.isMoving = true;

      // Add trail point
      trails.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 0.85,
        size: Math.min(6 + mouse.speed * 4, 18),
      });
      if (trails.length > 25) trails.shift();

      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        mouse.isMoving = false;
      }, 150);
    };

    const handleClick = (e: MouseEvent) => {
      // Spawn burst of green timeline sparks
      for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 5 + 2;
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          alpha: 1,
          length: Math.random() * 12 + 6,
          color: greenColors[Math.floor(Math.random() * greenColors.length)],
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse easing (GSAP style lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.12;
      mouse.y += (mouse.targetY - mouse.y) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing ambient mouse nexus aura (radial green gradient)
      const auraRadius = 240 + Math.sin(time * 3) * 20;
      const auraGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        auraRadius
      );
      auraGradient.addColorStop(0, 'rgba(0, 255, 135, 0.14)');
      auraGradient.addColorStop(0.4, 'rgba(16, 185, 129, 0.06)');
      auraGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = auraGradient;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, auraRadius, 0, Math.PI * 2);
      ctx.fill();

      // 2. Draw curving Loki Timeline Strands weaving towards the cursor
      strands.forEach((strand) => {
        ctx.beginPath();
        const startX = width / 2 + Math.cos(strand.angleOffset + time * strand.waveSpeed * 10) * (width * 0.55);
        const startY = height / 2 + Math.sin(strand.angleOffset + time * strand.waveSpeed * 10) * (height * 0.55);

        ctx.moveTo(startX, startY);

        // Control point influenced by mouse
        const cpX = (startX + mouse.x) / 2 + Math.sin(time * strand.waveSpeed * 8) * strand.amplitude;
        const cpY = (startY + mouse.y) / 2 + Math.cos(time * strand.waveSpeed * 8) * strand.amplitude;

        ctx.quadraticCurveTo(cpX, cpY, mouse.x, mouse.y);
        ctx.strokeStyle = strand.color;
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.18 + Math.sin(time + strand.angleOffset) * 0.08;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // 4. Update and render particles (Constellation mesh)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction: gravitate towards cursor if within proximity
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 200;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 1.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
          p.radius = p.baseRadius * (1 + force * 0.8);

          // Draw neon ray from cursor to particle
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          const rayAlpha = (1 - dist / maxDist) * 0.45;
          ctx.strokeStyle = `rgba(0, 255, 135, ${rayAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        } else {
          p.radius = p.baseRadius;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;

        // Connect nearby particles with constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cDist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cDist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - cDist / 120) * 0.22;
            ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 5. Update and render sparks
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vx *= 0.94;
        s.vy *= 0.94;
        s.alpha *= 0.93;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 2, s.y - s.vy * 2);
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 2;
        ctx.globalAlpha = s.alpha;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }
      sparks = sparks.filter((s) => s.alpha > 0.05);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearTimeout(idleTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  );
};

