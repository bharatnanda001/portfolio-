'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const OrbScene = dynamic(() => import('./OrbScene'), { ssr: false });

const roles = ['AI Engineer', 'Full Stack Developer', 'Backend Architect', 'RAG Systems Builder'];

function TypewriterText() {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: NodeJS.Timeout;

    const tick = () => {
      const current = roles[roleIdx];
      if (!elRef.current) return;

      if (deleting) {
        elRef.current.textContent = current.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          timeout = setTimeout(tick, 400);
          return;
        }
        timeout = setTimeout(tick, 60);
      } else {
        elRef.current.textContent = current.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 2000);
          return;
        }
        timeout = setTimeout(tick, 100);
      }
    };

    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="gradient-text">
      <span ref={elRef} />
      <span className="animate-blink text-violet-400">|</span>
    </span>
  );
}

// Star field
function Stars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.005 + 0.002,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${s.alpha * 0.6})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />;
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } } };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Stars */}
      <Stars />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fuchsia-600/5 blur-[150px] pointer-events-none" />

      {/* 3D Orb */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbScene />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div variants={item} className="flex justify-center mb-6">
            <span className="font-mono text-xs px-4 py-1.5 rounded-full glass border border-violet-500/30 text-violet-300 tracking-widest uppercase">
              🚀 Available for Opportunities
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={item}
            className="font-sora font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-white mb-6"
          >
            Building AI Systems<br />
            <span className="gradient-text">That Feel Like</span><br />
            The Future
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={item} className="font-sora font-semibold text-xl md:text-2xl text-slate-300 mb-4">
            <TypewriterText />
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={item} className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10">
            AI Engineer specializing in <span className="text-violet-400">RAG systems</span>, scalable backend architecture,
            and modern web experiences. Building tomorrow&#39;s intelligent platforms today.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="magnetic-btn group px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-sora font-semibold text-sm hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="magnetic-btn px-8 py-3.5 rounded-full glass border border-cyan-500/40 text-cyan-300 font-sora font-semibold text-sm hover:border-cyan-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-8 py-3.5 rounded-full glass border border-pink-500/30 text-pink-300 font-sora font-semibold text-sm hover:border-pink-500 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] hover:scale-105 transition-all duration-300"
            >
              Resume ↓
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div variants={item} className="mt-16 flex flex-wrap justify-center gap-8">
            {[
              { value: '400+', label: 'DSA Problems' },
              { value: '1600+', label: 'LeetCode Rating' },
              { value: '3+', label: 'Major Projects' },
              { value: '8.05', label: 'CGPA' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="font-sora font-bold text-2xl gradient-text">{s.value}</div>
                <div className="font-mono text-xs text-slate-500 mt-1 tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-xs text-slate-500 tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-violet-500/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
