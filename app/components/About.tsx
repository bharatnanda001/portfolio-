'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Photo display (inspired by reference) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            {/* Real photo — arched frame */}
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet-600 via-cyan-500 to-pink-500 opacity-50 blur-md group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-[2rem] overflow-hidden border border-white/10">
                <Image
                  src="/bharat.png"
                  alt="Bharat Nanda"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                {/* Name tag */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                  <p className="font-sora font-bold text-white text-lg leading-tight">Bharat Nanda</p>
                  <p className="font-mono text-xs text-violet-300">AI Engineer</p>
                </div>
              </div>
            </div>

            {/* Bitmoji / Avatar — floating card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 opacity-40 blur-sm" />
              <div className="relative glass rounded-2xl overflow-hidden border border-white/10 w-36 h-44">
                <Image
                  src="/avatar.png"
                  alt="Bharat Nanda Avatar"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Status badge */}
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-green-500/30">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs text-green-400 tracking-wider">OPEN_TO_OPPORTUNITIES</span>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="space-y-6"
          >
            <motion.div variants={fadeUp}>
              <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">// About Me</span>
              <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mt-2">
                Building the <span className="gradient-text">intelligent future</span>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed text-base">
              I&#39;m a <span className="text-white font-medium">pre-final year Computer Science student</span> deeply
              passionate about AI systems, backend engineering, and building scalable applications that push the
              boundaries of what&#39;s possible.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed text-base">
              Skilled in building <span className="text-violet-400">RAG pipelines</span>, AI-powered platforms,
              REST APIs, and full-stack systems. With a strong problem-solving mindset and{' '}
              <span className="text-cyan-400">400+ DSA problems</span> solved, I thrive at the intersection of
              machine learning and software engineering.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 pt-1">
              {['RAG Systems', 'AI Platforms', 'FastAPI', 'Vector Search', 'Full Stack', 'Backend Arch'].map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3 pt-4">
              {[
                { value: '400+', label: 'DSA Solved', icon: '💻' },
                { value: '1600+', label: 'LeetCode Rating', icon: '🏆' },
                { value: '3+', label: 'Projects Built', icon: '🚀' },
              ].map(s => (
                <div key={s.label} className="glass rounded-xl p-3 text-center border border-white/5">
                  <div className="text-xl mb-1">{s.icon}</div>
                  <div className="font-sora font-bold gradient-text text-lg">{s.value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="pt-2 flex gap-3">
              <a
                href="#projects"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white font-sora font-semibold text-sm hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:scale-105 transition-all duration-300"
              >
                View Projects →
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full glass border border-violet-500/40 text-violet-300 font-sora font-semibold text-sm hover:border-violet-500 hover:scale-105 transition-all duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
