'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skillCategories = [
  {
    label: 'Languages',
    color: '#8b5cf6',
    icon: '{ }',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 80 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    label: 'AI & ML',
    color: '#22d3ee',
    icon: '🧠',
    skills: [
      { name: 'RAG Systems', level: 88 },
      { name: 'FAISS', level: 82 },
      { name: 'Hugging Face', level: 80 },
      { name: 'PyTorch', level: 72 },
      { name: 'spaCy', level: 78 },
      { name: 'Gemini API', level: 85 },
      { name: 'KeyBERT', level: 76 },
      { name: 'Sentence Transformers', level: 84 },
    ],
  },
  {
    label: 'Backend',
    color: '#f472b6',
    icon: '⚙️',
    skills: [
      { name: 'FastAPI', level: 88 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'REST APIs', level: 90 },
      { name: 'JWT Auth', level: 82 },
    ],
  },
  {
    label: 'Frontend',
    color: '#34d399',
    icon: '◈',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'Next.js', level: 78 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    label: 'Databases',
    color: '#fb923c',
    icon: '🗄',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQLite', level: 80 },
    ],
  },
  {
    label: 'DevOps',
    color: '#a3e635',
    icon: '🐳',
    skills: [
      { name: 'Docker', level: 78 },
      { name: 'GitHub Actions', level: 72 },
      { name: 'CI/CD', level: 70 },
      { name: 'Git', level: 88 },
    ],
  },
];

function SkillCard({ cat, index }: { cat: typeof skillCategories[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    cardRef.current.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`;
  };
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHovered(true)}
        style={{ transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)' }}
        className="glass rounded-2xl p-6 border border-white/5 hover:border-opacity-40 cursor-default"
        data-magnetic
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-base font-mono"
            style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40`, color: cat.color }}
          >
            {cat.icon}
          </div>
          <h3 className="font-sora font-semibold text-white text-sm">{cat.label}</h3>
        </div>

        {/* Skills */}
        <div className="space-y-3">
          {cat.skills.map(s => (
            <div key={s.name}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-xs text-slate-400">{s.name}</span>
                <span className="font-mono text-xs" style={{ color: cat.color }}>{s.level}%</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  style={{ background: `linear-gradient(90deg, ${cat.color}88, ${cat.color})` }}
                  className="h-full rounded-full relative"
                >
                  {hovered && (
                    <div className="absolute inset-0 bg-white/20 animate-shimmer rounded-full" />
                  )}
                </motion.div>
              </div>
            </div>
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-violet-500/20 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">// Technical Arsenal</span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mt-3">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm">
            A curated set of technologies I use to build intelligent systems and high-performance applications.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
