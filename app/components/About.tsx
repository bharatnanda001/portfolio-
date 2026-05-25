'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass border border-violet-500/20 p-8">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-500/5 to-transparent animate-shimmer" />
              </div>

              {/* Code card */}
              <div className="font-mono text-sm space-y-2">
                <div className="text-slate-500">{'//'} whoami</div>
                <div><span className="text-violet-400">const</span> <span className="text-cyan-400">engineer</span> <span className="text-white">= {'{'}</span></div>
                <div className="pl-4"><span className="text-pink-400">name</span><span className="text-white">:</span> <span className="text-green-400">&quot;Bharat Nanda&quot;</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-pink-400">role</span><span className="text-white">:</span> <span className="text-green-400">&quot;AI Engineer&quot;</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-pink-400">focus</span><span className="text-white">:</span> <span className="text-green-400">&quot;RAG · Backend · Full Stack&quot;</span><span className="text-white">,</span></div>
                <div className="pl-4"><span className="text-pink-400">dsa</span><span className="text-white">:</span> <span className="text-yellow-400">400</span><span className="text-white">+ problems,</span></div>
                <div className="pl-4"><span className="text-pink-400">leetcode</span><span className="text-white">:</span> <span className="text-yellow-400">1600</span><span className="text-white">+ rating,</span></div>
                <div className="pl-4"><span className="text-pink-400">status</span><span className="text-white">:</span> <span className="text-green-400">&quot;open to opportunities&quot;</span><span className="text-white">,</span></div>
                <div><span className="text-white">{'}'}</span></div>
              </div>

              {/* Status badge */}
              <div className="mt-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400 tracking-wider">OPEN_TO_OPPORTUNITIES = true</span>
              </div>
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
              I&#39;m a <span className="text-white">pre-final year Computer Science student</span> at Galgotias University, 
              deeply passionate about AI systems, backend engineering, and building scalable applications 
              that push the boundaries of what&#39;s possible.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed text-base">
              Skilled in building <span className="text-violet-400">RAG pipelines</span>, AI-powered platforms, 
              REST APIs, and full-stack systems. With a strong problem-solving mindset and 
              <span className="text-cyan-400"> 400+ DSA problems</span> solved, I thrive at the intersection of 
              machine learning and software engineering.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              {['RAG Systems', 'AI Platforms', 'FastAPI', 'Vector Search', 'Full Stack', 'Backend Arch'].map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </motion.div>

            {/* Achievements quick */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 pt-4">
              {[
                { icon: '🏆', text: '1600+ LeetCode Rating' },
                { icon: '💻', text: '400+ DSA Problems' },
                { icon: '🎓', text: 'Google Android Internship' },
                { icon: '🚀', text: 'AI & Backend Specialist' },
              ].map(a => (
                <div key={a.text} className="glass rounded-xl p-3 flex items-center gap-2 border border-white/5">
                  <span className="text-lg">{a.icon}</span>
                  <span className="text-slate-300 text-xs">{a.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
