'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillCategory {
  title: string;
  badge: string;
  color: 'cyan' | 'emerald' | 'blue' | 'purple' | 'amber' | 'rose';
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    badge: 'Core',
    color: 'blue',
    skills: ['Java', 'Python', 'JavaScript', 'SQL', 'TypeScript']
  },
  {
    title: 'AI & Machine Learning',
    badge: 'Specialization',
    color: 'cyan',
    skills: [
      'Generative AI',
      'Natural Language Processing (NLP)',
      'RAG (Retrieval-Augmented Gen)',
      'KeyBERT',
      'Prompt Engineering',
      'FAISS Vector Search',
      'Gemini API'
    ]
  },
  {
    title: 'Backend Engineering',
    badge: 'Scalable Systems',
    color: 'emerald',
    skills: [
      'FastAPI',
      'Node.js',
      'Express.js',
      'REST APIs',
      'JWT Authentication',
      'Scheduled Cron Jobs',
      'API Architecture'
    ]
  },
  {
    title: 'Frontend Development',
    badge: 'Modern Web',
    color: 'purple',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3']
  },
  {
    title: 'Databases & Storage',
    badge: 'Data Layer',
    color: 'amber',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis']
  },
  {
    title: 'CS Fundamentals',
    badge: 'Foundations',
    color: 'rose',
    skills: [
      'Data Structures & Algorithms (DSA)',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems (OS)'
    ]
  },
  {
    title: 'Tools & DevOps',
    badge: 'Workflow',
    color: 'emerald',
    skills: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Docker',
      'Power BI',
      'Postman',
      'Linux CLI',
      'Vercel'
    ]
  },
  {
    title: 'Soft Skills',
    badge: 'Professional',
    color: 'cyan',
    skills: [
      'Analytical Thinking',
      'Problem Solving',
      'Adaptability',
      'System Design Thinking',
      'Team Collaboration'
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 bg-transparent text-slate-900 dark:text-white px-6 border-t border-slate-200/80 dark:border-white/10 transition-colors">
      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto backdrop-blur-sm p-6 rounded-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-emerald-400">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm font-mono mt-2">
              Core technologies, frameworks, and system foundations built through practical development.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => {
            const theme = {
              cyan: {
                border: 'hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]',
                badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 dark:text-cyan-300',
                dot: 'bg-cyan-500 dark:bg-cyan-400',
                tag: 'hover:border-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-200 hover:bg-cyan-500/10'
              },
              emerald: {
                border: 'hover:border-emerald-500/50 hover:shadow-[0_10px_30px_rgba(52,211,153,0.15)]',
                badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300',
                dot: 'bg-emerald-500 dark:bg-emerald-400',
                tag: 'hover:border-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-200 hover:bg-emerald-500/10'
              },
              blue: {
                border: 'hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]',
                badge: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
                dot: 'bg-blue-500 dark:bg-blue-400',
                tag: 'hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-200 hover:bg-blue-500/10'
              },
              purple: {
                border: 'hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]',
                badge: 'bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300',
                dot: 'bg-purple-500 dark:bg-purple-400',
                tag: 'hover:border-purple-400 hover:text-purple-700 dark:hover:text-purple-200 hover:bg-purple-500/10'
              },
              amber: {
                border: 'hover:border-amber-500/50 hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)]',
                badge: 'bg-amber-500/10 border-amber-500/30 text-amber-700 dark:text-amber-300',
                dot: 'bg-amber-500 dark:bg-amber-400',
                tag: 'hover:border-amber-400 hover:text-amber-700 dark:hover:text-amber-200 hover:bg-amber-500/10'
              },
              rose: {
                border: 'hover:border-rose-500/50 hover:shadow-[0_10px_30px_rgba(251,113,133,0.15)]',
                badge: 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-300',
                dot: 'bg-rose-500 dark:bg-rose-400',
                tag: 'hover:border-rose-400 hover:text-rose-700 dark:hover:text-rose-200 hover:bg-rose-500/10'
              }
            }[cat.color];

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-6 rounded-2xl hover:bg-white dark:hover:bg-white/[0.08] hover:-translate-y-1.5 shadow-xs hover:shadow-md dark:shadow-none transition-all duration-300 flex flex-col justify-between ${theme.border}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${theme.dot} animate-pulse`}></span>
                      {cat.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {cat.skills.map(skill => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 text-xs text-slate-700 dark:text-gray-300 bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg transition-all duration-200 cursor-default shadow-xs ${theme.tag}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-2 border-t border-slate-200/60 dark:border-white/5">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${theme.badge}`}>
                    {cat.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
