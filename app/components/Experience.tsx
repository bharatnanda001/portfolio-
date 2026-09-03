'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experience = [
  {
    company: 'Kirat Communication',
    role: 'Software Development Intern',
    type: 'Hybrid Internship',
    duration: 'May 2026 – Present',
    description: 'Built Alfina ERP, a multi-company billing and invoicing platform using React.js (Vite), Node.js/Express, and MySQL.',
    responsibilities: [
      'Contributed to Alfina ERP billing & invoicing platform end-to-end',
      'Implemented quotation-to-invoice conversion workflows and automated recurring subscription billing using cron jobs',
      'Engineered JWT authentication and role-based access control (SUPERADMIN, ADMIN, SALES, VIEWER) for data isolation',
      'Collaborated closely across the engineering lifecycle using Git and RESTful API best practices',
    ],
    tech: ['React.js', 'Node.js', 'Express', 'MySQL', 'JWT', 'Git'],
    color: '#22d3ee',
    current: true,
  },
];

const education = [
  {
    school: 'Galgotias University',
    degree: 'B.Tech in Computer Science & Engineering (AI & ML) — CGPA: 8.05/10.0',
    duration: '2023 – 2027',
    color: '#8b5cf6',
  },
];

const achievements = [
  { icon: '🏆', title: '1700+ LeetCode Rating', desc: '500+ problems solved across LeetCode, GFG & Codeforces' },
  { icon: '🌐', title: 'Open Source Contributor', desc: 'Bug fixes to Android Camera module and RAG pipeline' },
  { icon: '🤖', title: 'Google AI Essentials', desc: 'Certified by Google in Generative AI systems' },
  { icon: '📜', title: 'GitHub Foundations', desc: 'Certified by GitHub Education & GUVI Java' },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/6 rounded-full blur-[130px] pointer-events-none" />

      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">// Journey</span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mt-3">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sora font-semibold text-lg text-cyan-400 mb-6 font-mono tracking-wider"
            >
              WORK EXPERIENCE
            </motion.h3>

            <div className="relative pl-6">
              <div className="timeline-line" />
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="relative mb-8"
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-8 top-2 w-3 h-3 rounded-full border-2 animate-pulse-glow"
                    style={{ borderColor: exp.color, background: `${exp.color}40` }}
                  />

                  <div className="glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-sora font-bold text-white text-base">{exp.role}</h4>
                        <p style={{ color: exp.color }} className="font-mono text-sm font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono text-green-400 bg-green-400/10 border border-green-400/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3 mb-4 text-xs text-slate-500 font-mono">
                      <span>🗓 {exp.duration}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((r, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-slate-400">
                          <span style={{ color: exp.color }} className="mt-0.5">▸</span>
                          {r}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education + Achievements */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="font-sora font-semibold text-lg text-violet-400 font-mono tracking-wider"
            >
              EDUCATION
            </motion.h3>

            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="glass rounded-2xl p-6 border border-white/5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-xl">
                    🎓
                  </div>
                  <div>
                    <h4 className="font-sora font-bold text-white text-sm">{edu.school}</h4>
                    <p className="text-violet-400 font-mono text-xs">{edu.degree}</p>
                  </div>
                </div>
                <div className="flex gap-4 text-xs text-slate-500 font-mono">
                  <span>📅 {edu.duration}</span>
                </div>

              </motion.div>
            ))}

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h3 className="font-mono font-semibold text-lg text-pink-400 tracking-wider mb-4">ACHIEVEMENTS</h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="glass rounded-xl p-4 border border-white/5 hover:border-pink-500/20 transition-all group"
                  >
                    <span className="text-2xl">{a.icon}</span>
                    <h4 className="font-sora font-semibold text-white text-xs mt-2 leading-tight">{a.title}</h4>
                    <p className="text-slate-500 text-xs mt-1">{a.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
