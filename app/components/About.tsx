'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 bg-black text-white px-6 border-t border-border">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-mono text-muted uppercase tracking-widest mb-12"
        >
          About
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted font-light leading-relaxed"
          >
            I am a Computer Science student and software engineer focusing on artificial intelligence and backend architecture. I build production-grade platforms with a strong emphasis on clean code and scalability.
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted leading-relaxed">
              My expertise spans RAG pipelines, RESTful APIs, and full-stack development. I enjoy tackling complex architectural problems and optimizing systems for performance.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-6 border-t border-border">
              <div>
                <div className="text-3xl font-medium text-white mb-1">400+</div>
                <div className="text-xs text-muted font-mono uppercase tracking-wider">DSA Problems</div>
              </div>
              <div>
                <div className="text-3xl font-medium text-white mb-1">1600+</div>
                <div className="text-xs text-muted font-mono uppercase tracking-wider">LeetCode Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
