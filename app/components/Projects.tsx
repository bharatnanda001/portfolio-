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
    link: '#',
    color: 'emerald'
  },
  {
    id: 'quiz',
    title: 'AI Quiz Generator',
    subtitle: 'Adaptive Learning System',
    description: 'AI-powered adaptive quiz generator using NLP pipelines for concept extraction and dynamic difficulty-based question generation.',
    tech: ['Python', 'FastAPI', 'React', 'Gemini API', 'spaCy'],
    link: '#',
    color: 'cyan'
  },
  {
    id: 'alfina',
    title: 'Alfina ERP',
    subtitle: 'Quotation Management System',
    description: 'Scalable ERP quotation management platform with JWT authentication, CI/CD pipelines, and optimized database workflows.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Docker'],
    link: '#',
    color: 'rose'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 bg-transparent text-white px-6 border-t border-white/10">
      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto backdrop-blur-sm p-6 rounded-2xl"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-rose-400 mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const theme = {
              emerald: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(52,211,153,0.15)] hover:border-emerald-500/30',
                sub: 'text-emerald-400',
                tag: 'group-hover:border-emerald-500/30 group-hover:text-emerald-300',
                link: 'hover:text-emerald-400'
              },
              cyan: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] hover:border-cyan-500/30',
                sub: 'text-cyan-400',
                tag: 'group-hover:border-cyan-500/30 group-hover:text-cyan-300',
                link: 'hover:text-cyan-400'
              },
              rose: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(251,113,133,0.15)] hover:border-rose-500/30',
                sub: 'text-rose-400',
                tag: 'group-hover:border-rose-500/30 group-hover:text-rose-300',
                link: 'hover:text-rose-400'
              }
            }[project.color as 'emerald' | 'cyan' | 'rose'];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full ${theme.shadow}`}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-medium text-white mb-2">{project.title}</h3>
                  <span className={`text-xs font-mono uppercase tracking-wider ${theme.sub}`}>{project.subtitle}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 grow">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-col gap-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className={`text-[10px] text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md font-mono uppercase tracking-wider transition-colors ${theme.tag}`}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className={`text-sm font-medium text-white transition-colors inline-flex items-center gap-2 group/link ${theme.link}`}>
                    View Project <span className="group-hover/link:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
