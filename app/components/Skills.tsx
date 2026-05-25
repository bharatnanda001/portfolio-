'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    label: 'Languages',
    color: '#a78bfa',
    border: 'rgba(167,139,250,0.25)',
    bg: 'rgba(167,139,250,0.08)',
    icon: '{ }',
    skills: ['Python', 'Java', 'SQL', 'JavaScript'],
  },
  {
    label: 'AI & Machine Learning',
    color: '#22d3ee',
    border: 'rgba(34,211,238,0.25)',
    bg: 'rgba(34,211,238,0.08)',
    icon: '🧠',
    skills: ['RAG Systems', 'FAISS', 'Hugging Face', 'NLP', 'Sentence Transformers', 'PyTorch', 'spaCy', 'KeyBERT', 'Gemini API'],
  },
  {
    label: 'Backend',
    color: '#f472b6',
    border: 'rgba(244,114,182,0.25)',
    bg: 'rgba(244,114,182,0.08)',
    icon: '⚙️',
    skills: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  },
  {
    label: 'Frontend',
    color: '#34d399',
    border: 'rgba(52,211,153,0.25)',
    bg: 'rgba(52,211,153,0.08)',
    icon: '◈',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    label: 'Databases',
    color: '#fb923c',
    border: 'rgba(251,146,60,0.25)',
    bg: 'rgba(251,146,60,0.08)',
    icon: '🗄',
    skills: ['MySQL', 'MongoDB', 'SQLite'],
  },
  {
    label: 'DevOps & Tools',
    color: '#a3e635',
    border: 'rgba(163,230,53,0.25)',
    bg: 'rgba(163,230,53,0.08)',
    icon: '🐳',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Git'],
  },
];

function SkillCard({ cat, index }: { cat: typeof skillCategories[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    cardRef.current.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateZ(8px)`;
  };
  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.25s cubic-bezier(0.23,1,0.32,1)', border: `1px solid ${cat.border}` }}
        className="rounded-2xl p-5 h-full"
        data-magnetic
      >
        {/* Category header */}
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
            style={{ background: cat.bg, color: cat.color }}
          >
            {cat.icon}
          </div>
          <h3 className="font-sora font-semibold text-sm text-white">{cat.label}</h3>
        </div>

        {/* Skill pill tags — no meters */}
        <div className="flex flex-wrap gap-2">
          {cat.skills.map(s => (
            <span
              key={s}
              style={{
                background: cat.bg,
                border: `1px solid ${cat.border}`,
                color: cat.color,
              }}
              className="font-mono text-xs px-3 py-1.5 rounded-full leading-none hover:brightness-125 transition-all duration-200 cursor-default"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-violet-500/15 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">// Technical Arsenal</span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mt-3">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            Technologies I use to build intelligent systems and high-performance applications.
          </p>
        </motion.div>

        {/* Grid — 2 cols on md, 3 on lg */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
