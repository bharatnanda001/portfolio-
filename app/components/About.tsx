'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 bg-transparent text-white px-6 border-t border-white/10">
      <div ref={ref} className="max-w-4xl mx-auto backdrop-blur-sm p-6 rounded-2xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 mb-12"
        >
          About
        </motion.h2>

        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 font-light leading-relaxed space-y-6"
          >
            <p>
              I’m Bharat Nanda, a pre-final year Computer Science student passionate about software engineering, backend development, artificial intelligence, and building scalable digital products. I enjoy turning ideas into practical applications while continuously learning modern technologies and development practices.
            </p>
            <p>
              I have hands-on experience developing REST APIs, ERP systems, and AI-powered web applications using Java, Python, FastAPI, ReactJS, Node.js, and SQL databases. My work focuses on clean architecture, secure authentication, scalable backend systems, and efficient user experiences.
            </p>
            <p>
              Along with development, I also have a strong interest in graphic design and UI aesthetics, combining creativity with technology to build visually engaging and user-friendly solutions. I’m currently focused on improving my problem-solving skills, exploring advanced software engineering concepts, and contributing to impactful tech projects.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
