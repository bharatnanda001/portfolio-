'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 bg-transparent text-slate-900 dark:text-white px-6 border-t border-slate-200/80 dark:border-white/10 transition-colors">
      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto backdrop-blur-sm p-8 rounded-2xl bg-white/60 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 shadow-xs dark:shadow-none transition-colors"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-10">
          About
        </h2>

        <div className="w-full">
          <div className="text-base md:text-lg text-slate-700 dark:text-gray-300 font-light leading-relaxed space-y-6">
            <p>
              I’m Bharat Nanda, a pre-final-year Computer Science student with a strong interest in software engineering, backend development, artificial intelligence, and building scalable digital products. I enjoy transforming ideas into practical, reliable applications while continuously learning and adapting to modern technologies and development practices.
            </p>
            <p>
              I have hands-on experience building REST APIs, ERP systems, and AI-powered web applications using Java, Python, FastAPI, React.js, Node.js, and SQL databases. I focus on developing clean and maintainable architectures, secure authentication systems, scalable backend services, and intuitive user experiences.
            </p>
            <p>
              Beyond software development, I have a keen interest in graphic design and UI aesthetics, allowing me to combine technical problem-solving with creativity. I’m continuously working to strengthen my data structures and problem-solving skills, deepen my understanding of software engineering, and contribute to meaningful technology projects that create real-world impact.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
