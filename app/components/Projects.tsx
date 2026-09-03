'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string | null;
  color: 'emerald' | 'cyan' | 'rose' | 'purple' | 'amber' | 'blue';
}

const projects: Project[] = [
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    subtitle: 'ATS Optimization & Career Insights',
    description: 'Semantic resume analysis platform offering real-time weighted ATS scoring, compound skill gap detection, and personalized AI cover letter generation.',
    tech: ['Python', 'FastAPI', 'Vercel', 'Tailwind CSS', 'NLP'],
    github: 'https://github.com/bharatnanda001/AI-Resume-Analyzer',
    live: 'https://ai-resume-analyzer-delta-orpin.vercel.app/',
    color: 'cyan'
  },
  {
    id: 'logroute-ai',
    title: 'LogRoute AI',
    subtitle: 'Commercial ELD & Trip Planner',
    description: 'Enterprise FMCSA-compliant HOS & ELD trip planner with 49 CFR Part 395 compliance engine, interactive 24-hour timeline editor, and driver log dispatch.',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel', 'Algorithms'],
    github: 'https://github.com/bharatnanda001/LogRoute-AI-ELD-Trip-Planner',
    live: 'https://log-route-ai-eld-trip-planner-mhyv-1pooax26z.vercel.app/',
    color: 'emerald'
  },
  {
    id: 'movie-mint',
    title: 'Movie Mint',
    subtitle: 'AI Recommendation & Streaming Guide',
    description: 'Full-stack movie recommendation system utilizing TF-IDF and Cosine Similarity ML filtering, TMDB live API integration, and Gemini conversational assistant.',
    tech: ['Python', 'Flask', 'scikit-learn', 'Gemini API', 'TMDB API', 'Render'],
    github: 'https://github.com/bharatnanda001/Movie-mint-',
    live: 'https://movie-mint.onrender.com/login',
    color: 'rose'
  },
  {
    id: 'ai-quiz-generator',
    title: 'AI Quiz Generator',
    subtitle: 'Adaptive Learning System',
    description: 'Full-stack application transforming PPTX and PDF lecture slides into interactive quizzes dynamically using NLP pipelines, spaCy, KeyBERT, and Gemini AI.',
    tech: ['Python', 'FastAPI', 'React', 'spaCy', 'KeyBERT', 'Gemini API'],
    github: 'https://github.com/bharatnanda001/AI-Quiz-Generator-',
    live: 'https://ai-quiz-generator-henna.vercel.app/',
    color: 'purple'
  },
  {
    id: 'arogya',
    title: 'Arogya',
    subtitle: 'Privacy-First AI Health OS',
    description: 'Evidence-grounded RAG clinical wellness assistant with offline Flan-T5 models, FAISS vector search, longitudinal patient memory (SQLite), and cloud Gemini fallback.',
    tech: ['Python', 'Streamlit', 'Flan-T5', 'FAISS', 'SQLite', 'Docker'],
    github: 'https://github.com/bharatnanda001/Arogya-health-care-chatbot',
    live: null,
    color: 'blue'
  },
  {
    id: 'alfina',
    title: 'Alfina ERP',
    subtitle: 'Quotation Management System',
    description: 'Scalable ERP quotation management platform with JWT authentication, CI/CD automated deployment, and optimized database workflows.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Docker'],
    github: 'https://github.com/bharatnanda001',
    live: null,
    color: 'amber'
  }
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 bg-transparent text-slate-900 dark:text-white px-6 border-t border-slate-200/80 dark:border-white/10 transition-colors">
      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto backdrop-blur-sm p-6 rounded-2xl"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-rose-400">
              Featured Projects
            </h2>
            <p className="text-slate-600 dark:text-gray-400 text-sm font-mono mt-2">
              Production-ready applications, AI systems, and scalable full-stack software.
            </p>
          </div>
          <a
            href="https://github.com/bharatnanda001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-slate-950 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <span>View all on GitHub</span>
            <FaExternalLinkAlt className="text-[10px]" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const theme = {
              emerald: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(52,211,153,0.15)] hover:border-emerald-500/40',
                sub: 'text-emerald-600 dark:text-emerald-400',
                tag: 'group-hover:border-emerald-500/40 group-hover:text-emerald-700 dark:group-hover:text-emerald-300',
                btn: 'bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 hover:border-emerald-400'
              },
              cyan: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] hover:border-cyan-500/40',
                sub: 'text-cyan-600 dark:text-cyan-400',
                tag: 'group-hover:border-cyan-500/40 group-hover:text-cyan-700 dark:group-hover:text-cyan-300',
                btn: 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-500/30 hover:border-cyan-400'
              },
              rose: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(251,113,133,0.15)] hover:border-rose-500/40',
                sub: 'text-rose-600 dark:text-rose-400',
                tag: 'group-hover:border-rose-500/40 group-hover:text-rose-700 dark:group-hover:text-rose-300',
                btn: 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 border-rose-500/30 hover:border-rose-400'
              },
              purple: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] hover:border-purple-500/40',
                sub: 'text-purple-600 dark:text-purple-400',
                tag: 'group-hover:border-purple-500/40 group-hover:text-purple-700 dark:group-hover:text-purple-300',
                btn: 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-500/30 hover:border-purple-400'
              },
              amber: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(245,158,11,0.15)] hover:border-amber-500/40',
                sub: 'text-amber-600 dark:text-amber-400',
                tag: 'group-hover:border-amber-500/40 group-hover:text-amber-700 dark:group-hover:text-amber-300',
                btn: 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-500/30 hover:border-amber-400'
              },
              blue: {
                shadow: 'hover:shadow-[0_10px_40px_rgba(59,130,246,0.15)] hover:border-blue-500/40',
                sub: 'text-blue-600 dark:text-blue-400',
                tag: 'group-hover:border-blue-500/40 group-hover:text-blue-700 dark:group-hover:text-blue-300',
                btn: 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-500/30 hover:border-blue-400'
              }
            }[project.color];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`group bg-white/80 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-7 rounded-2xl hover:bg-white dark:hover:bg-white/[0.08] hover:-translate-y-2 shadow-xs hover:shadow-lg dark:shadow-none transition-all duration-300 flex flex-col h-full ${theme.shadow}`}
              >
                <div className="mb-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">{project.title}</h3>
                    {project.live && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono tracking-wider uppercase bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
                        Live
                      </span>
                    )}
                  </div>
                  <span className={`text-xs font-mono uppercase tracking-wider block ${theme.sub}`}>
                    {project.subtitle}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6 grow">
                  {project.description}
                </p>
                
                <div className="mt-auto flex flex-col gap-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className={`text-[10px] text-slate-700 dark:text-gray-300 bg-slate-100/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2.5 py-1 rounded-md font-mono uppercase tracking-wider transition-colors ${theme.tag}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-slate-200/80 dark:border-white/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/30 text-slate-700 hover:text-slate-950 dark:text-gray-200 dark:hover:text-white transition-all duration-200 shadow-2xs"
                      >
                        <FaGithub className="text-sm" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono uppercase tracking-wider rounded-xl border transition-all duration-200 shadow-2xs ${theme.btn}`}
                      >
                        <span>Demo</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
