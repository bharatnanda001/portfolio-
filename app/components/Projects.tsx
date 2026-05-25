'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    id: 'arogya',
    title: 'Arogya',
    subtitle: 'AI Healthcare Assistant',
    description: 'A RAG-based AI healthcare assistant with FAISS vector search, patient memory system, and dual offline/cloud AI modes with Gemini API fallback.',
    tech: ['Python', 'Streamlit', 'Flan-T5', 'FAISS', 'SQLite', 'Docker'],
    link: '#'
  },
  {
    id: 'quiz',
    title: 'AI Quiz Generator',
    subtitle: 'Adaptive Learning System',
    description: 'AI-powered adaptive quiz generator using NLP pipelines for concept extraction and dynamic difficulty-based question generation.',
    tech: ['Python', 'FastAPI', 'React', 'Gemini API', 'spaCy'],
    link: '#'
  },
  {
    id: 'alfina',
    title: 'Alfina ERP',
    subtitle: 'Quotation Management System',
    description: 'Scalable ERP quotation management platform with JWT authentication, CI/CD pipelines, and optimized database workflows.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Docker'],
    link: '#'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 bg-transparent text-white px-6 border-t border-white/10">
      <div ref={ref} className="max-w-4xl mx-auto backdrop-blur-sm p-6 rounded-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-muted uppercase tracking-widest mb-16"
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-border p-8 hover:border-gray-500 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-medium text-white mb-2 md:mb-0">{project.title}</h3>
                <span className="text-sm font-mono text-muted">{project.subtitle}</span>
              </div>
              
              <p className="text-muted leading-relaxed mb-8 max-w-2xl">
                {project.description}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-muted font-mono uppercase tracking-wider">{t}</span>
                  ))}
                </div>
                <a href={project.link} className="text-sm text-white hover:text-gray-400 transition-colors inline-flex items-center gap-2">
                  View Project <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
