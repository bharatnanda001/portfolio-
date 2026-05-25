'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  Languages: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript'],
  'AI & ML': ['RAG Systems', 'FAISS', 'Hugging Face', 'NLP', 'PyTorch', 'spaCy'],
  Backend: ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT Auth'],
  Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
  Databases: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL'],
  DevOps: ['Docker', 'GitHub Actions', 'CI/CD', 'Git']
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 bg-transparent text-white px-6 border-t border-white/10">
      <div ref={ref} className="max-w-4xl mx-auto backdrop-blur-sm p-6 rounded-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-muted uppercase tracking-widest mb-16"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-medium text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="px-3 py-1 text-sm text-muted border border-border hover:border-gray-500 hover:text-white transition-colors cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
