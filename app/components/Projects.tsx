'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 'arogya',
    title: 'Arogya',
    subtitle: 'AI Healthcare Assistant',
    description:
      'A RAG-based AI healthcare assistant with FAISS vector search, patient memory system, and dual offline/cloud AI modes with Gemini API fallback.',
    tech: ['Python', 'Streamlit', 'Flan-T5', 'FAISS', 'SQLite', 'Gemini API', 'Docker'],
    highlights: [
      'RAG pipeline with FAISS vector search',
      'Patient memory system with SQLite',
      'Gemini API fallback integration',
      'Offline + cloud AI modes',
      'Optimized Docker deployment',
    ],
    color: '#8b5cf6',
    gradient: 'from-violet-900/40 to-purple-900/20',
    icon: '🏥',
    demo: '#',
    github: '#',
  },
  {
    id: 'quiz',
    title: 'AI Quiz Generator',
    subtitle: 'Adaptive Learning System',
    description:
      'AI-powered adaptive quiz generator using NLP pipelines for concept extraction and dynamic difficulty-based question generation via Gemini API.',
    tech: ['Python', 'FastAPI', 'ReactJS', 'Gemini API', 'spaCy', 'KeyBERT'],
    highlights: [
      'Adaptive quiz difficulty engine',
      'NLP concept extraction pipeline',
      'Dynamic question generation',
      'Modular FastAPI backend',
      'Automated educational content',
    ],
    color: '#22d3ee',
    gradient: 'from-cyan-900/40 to-teal-900/20',
    icon: '🧠',
    demo: '#',
    github: '#',
  },
  {
    id: 'alfina',
    title: 'Alfina ERP',
    subtitle: 'Quotation Management System',
    description:
      'Scalable ERP quotation management platform with JWT authentication, CI/CD pipelines, and optimized database workflows built with modern web technologies.',
    tech: ['ReactJS', 'Node.js', 'Express.js', 'MySQL', 'Docker'],
    highlights: [
      'Scalable ERP architecture',
      'JWT authentication + secure APIs',
      'CI/CD deployment pipelines',
      'Optimized DB workflows',
      'Production-ready system',
    ],
    color: '#f472b6',
    gradient: 'from-pink-900/40 to-rose-900/20',
    icon: '⚙️',
    demo: '#',
    github: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const rx = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const ry = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${ry}deg) rotateY(${rx}deg)`;
    setGlowPos({ x: `${x}%`, y: `${y}%` });
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) cardRef.current = null;
    if (cardRef.current) cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)' }}
        className={`relative rounded-2xl overflow-hidden glass border border-white/5 hover:border-opacity-30 h-full`}
      >
        {/* Mouse spotlight glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(circle 200px at ${glowPos.x} ${glowPos.y}, ${project.color}18, transparent)`,
          }}
        />

        {/* Top gradient band */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace('/40', '').replace('/20', '')}`}
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: `${project.color}18`, border: `1px solid ${project.color}30` }}
              >
                {project.icon}
              </div>
              <div>
                <h3 className="font-sora font-bold text-white text-lg">{project.title}</h3>
                <p className="font-mono text-xs" style={{ color: project.color }}>{project.subtitle}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <a href={project.github} className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all text-xs">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href={project.demo} className="w-8 h-8 rounded-lg glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 transition-all text-xs">
                ↗
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-5">
            {project.highlights.map(h => (
              <li key={h} className="flex items-center gap-2 text-xs text-slate-400">
                <span style={{ color: project.color }}>▸</span>
                {h}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="font-mono text-xs px-2 py-0.5 rounded-full"
                style={{ background: `${project.color}12`, border: `1px solid ${project.color}30`, color: project.color }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">// Featured Work</span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mt-3">
            Project <span className="gradient-text">Showcase</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            Production-ready AI and full-stack applications built with modern architecture and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
