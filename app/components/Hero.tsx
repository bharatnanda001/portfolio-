'use client';

import { motion, Variants } from 'framer-motion';

const stagger: Variants = { show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } };

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-transparent px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-4xl w-full text-left md:text-center mt-20"
      >
        <motion.p variants={item} className="text-xs md:text-sm font-mono uppercase tracking-widest text-gray-400 mb-6 flex items-center md:justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
          Available for new opportunities
        </motion.p>
        
        <motion.h1 variants={item} className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-rose-400 animate-gradient mb-6 leading-tight">
          Bharat Nanda
        </motion.h1>
        
        <motion.h2 variants={item} className="text-2xl md:text-3xl text-gray-300 font-light mb-8 max-w-2xl md:mx-auto">
          AI Engineer & Full Stack Developer building scalable, intelligent systems.
        </motion.h2>
        
        <motion.div variants={item} className="flex flex-col md:flex-row gap-4 md:justify-center mt-12">
          <a href="#projects" className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all inline-flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            View Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 text-white rounded-full text-sm font-medium hover:border-white/50 hover:bg-white/5 transition-all inline-flex items-center justify-center">
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
