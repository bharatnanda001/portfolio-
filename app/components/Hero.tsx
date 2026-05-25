'use client';

import { motion } from 'framer-motion';

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-transparent px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full text-left md:text-center mt-20"
      >
        <motion.p variants={item} className="text-muted font-mono text-xs uppercase tracking-widest mb-6">
          Available for new opportunities
        </motion.p>
        
        <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-tight">
          Bharat Nanda
        </motion.h1>
        
        <motion.h2 variants={item} className="text-2xl md:text-3xl text-muted font-light mb-8 max-w-2xl md:mx-auto">
          AI Engineer & Full Stack Developer building scalable, intelligent systems.
        </motion.h2>
        
        <motion.div variants={item} className="flex flex-col md:flex-row gap-4 md:justify-center mt-12">
          <a href="#projects" className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors inline-flex items-center justify-center">
            View Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-border text-white text-sm font-medium hover:border-gray-500 transition-colors inline-flex items-center justify-center">
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
