import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('cursor-pointer') ||
          target.classList.contains('interactive-hover'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth trailing lerp
    let curX = -100;
    let curY = -100;

    const loop = () => {
      curX += (pos.x - curX) * 0.18;
      curY += (pos.y - curY) * 0.18;
      setTrailingPos({ x: curX, y: curY });
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [pos.x, pos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner precise dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full transition-opacity duration-300"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#00FF87',
          boxShadow: '0 0 10px #00FF87, 0 0 20px #00FF87',
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0)`,
        }}
      />

      {/* Outer trailing aura ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full border transition-all duration-150 ease-out ${
          isHovered
            ? 'border-[#00FF87] bg-[rgba(0,255,135,0.12)] scale-150 shadow-[0_0_20px_rgba(0,255,135,0.4)]'
            : 'border-[rgba(0,255,135,0.45)] bg-transparent scale-100'
        } ${isClicked ? 'scale-75' : ''}`}
        style={{
          width: '36px',
          height: '36px',
          transform: `translate3d(${trailingPos.x - 18}px, ${trailingPos.y - 18}px, 0)`,
        }}
      />
    </>
  );
};

