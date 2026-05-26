'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-white font-medium tracking-tight">
          BN.
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-serif font-medium uppercase tracking-widest">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-gray-400 hover:text-white transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
