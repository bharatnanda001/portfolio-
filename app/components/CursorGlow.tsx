'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px';
        dotRef.current.style.top = mouseY + 'px';
      }
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      glowX += (mouseX - glowX) * 0.05;
      glowY += (mouseY - glowY) * 0.05;
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px';
        ringRef.current.style.top = ringY + 'px';
      }
      if (glowRef.current) {
        glowRef.current.style.left = glowX + 'px';
        glowRef.current.style.top = glowY + 'px';
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', move);
    raf = requestAnimationFrame(loop);

    const handleOver = () => {
      if (dotRef.current) { dotRef.current.style.width = '16px'; dotRef.current.style.height = '16px'; }
      if (ringRef.current) { ringRef.current.style.width = '60px'; ringRef.current.style.height = '60px'; ringRef.current.style.borderColor = '#22d3ee'; }
    };
    const handleOut = () => {
      if (dotRef.current) { dotRef.current.style.width = '8px'; dotRef.current.style.height = '8px'; }
      if (ringRef.current) { ringRef.current.style.width = '32px'; ringRef.current.style.height = '32px'; ringRef.current.style.borderColor = '#8b5cf6'; }
    };

    const btns = document.querySelectorAll('button, a, [data-magnetic]');
    btns.forEach(b => { b.addEventListener('mouseenter', handleOver); b.addEventListener('mouseleave', handleOut); });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      <div ref={glowRef} className="cursor-glow" />
    </>
  );
}
