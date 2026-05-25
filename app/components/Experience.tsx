'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experience = [
  {
    company: 'Virtu Origin',
    role: 'Data Analytics Intern',
    type: 'Internship',
    location: 'Gurugram, Haryana',
    duration: 'Jun 2025 – Aug 2025',
    description: 'Working on data engineering and analytics infrastructure at a growing startup.',
    responsibilities: [
      'Built ETL pipelines using Python and SQL for large-scale data processing',
      'Optimized SQL queries improving performance by significant margins',
      'Integrated REST APIs for real-time data ingestion workflows',
      'Developed scalable reporting workflows and dashboards',
    ],
    tech: ['Python', 'SQL', 'REST APIs', 'ETL', 'Data Engineering'],
    color: '#22d3ee',
    current: true,
  },
];

const education = [
  {
    school: 'Galgotias University',
    degree: 'B.Tech Computer Science Engineering',
    duration: '2023 – 2027',
    cgpa: '8.05 / 10',
    location: 'Greater Noida, Uttar Pradesh',
    color: '#8b5cf6',
  },
];

const achievements = [
  { icon: '🏆', title: '1600+ LeetCode Rating', desc: 'Competitive programming excellence' },
  { icon: '💻', title: '400+ DSA Problems', desc: 'Data structures & algorithms mastery' },
  { icon: '🤖', title: 'Google Android Internship', desc: 'Google-backed virtual development program' },
  { icon: '🚀', title: 'AI Engineer', desc: 'RAG systems & backend architecture specialist' },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">// Journey</span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mt-3">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

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
                      <span>📍 {exp.location}</span>
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
                  <span>📍 {edu.location}</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20">
                  <span className="text-violet-400 font-mono text-sm font-semibold">{edu.cgpa}</span>
                  <span className="text-slate-500 text-xs">CGPA</span>
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
      </div>
    </section>
  );
}
