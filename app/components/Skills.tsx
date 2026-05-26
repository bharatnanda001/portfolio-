'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = {
  'Core Languages': ['Python', 'Java', 'JavaScript', 'SQL', 'TypeScript'],
  'Backend Engineering': ['FastAPI', 'Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'API Design', 'Backend Architecture'],
  'AI / ML Skills': ['Retrieval-Augmented Generation (RAG)', 'NLP', 'FAISS', 'Hugging Face Transformers', 'Sentence Transformers', 'LLM Integration', 'Prompt Engineering', 'AI Automation'],
  'Frontend': ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Responsive UI Design', 'Tailwind CSS'],
  'Graphic Designing': ['Figma', 'Canva', 'GIMP'],
  'Databases': ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL', 'Redis'],
  'DevOps & Tools': ['Docker', 'Git', 'GitHub Actions', 'CI/CD', 'Linux', 'Postman'],
  'Software Engineering Concepts': ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Design', 'API Integration', 'System Design Basics', 'Authentication & Authorization']
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
          className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-emerald-400 mb-16"
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
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="px-3 py-1 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:border-blue-400 hover:text-white hover:bg-blue-500/10 transition-all cursor-default shadow-sm">
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
