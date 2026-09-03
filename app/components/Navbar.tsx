'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? isLight
              ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-4 text-slate-900'
              : 'bg-black/90 backdrop-blur-md border-b border-white/10 py-4 text-white'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className={`font-medium tracking-tight text-lg font-serif transition-colors ${
              isLight ? 'text-slate-950 hover:text-cyan-600' : 'text-white hover:text-cyan-400'
            }`}
          >
            BN.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 text-sm font-serif font-medium uppercase tracking-widest">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={`transition-colors duration-200 ${
                  isLight
                    ? 'text-slate-600 hover:text-slate-950'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            ))}

            <div
              className={`flex items-center gap-4 pl-4 border-l normal-case font-sans ${
                isLight ? 'border-slate-200' : 'border-white/10'
              }`}
            >
              <a
                href="https://github.com/bharatnanda001"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors text-base ${
                  isLight ? 'text-slate-600 hover:text-slate-950' : 'text-gray-400 hover:text-white'
                }`}
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bharat-nanda-01648028a/"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors text-base ${
                  isLight ? 'text-slate-600 hover:text-blue-600' : 'text-gray-400 hover:text-white'
                }`}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className={`p-2 rounded-full border transition-all duration-200 cursor-pointer ${
                  isLight
                    ? 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-amber-500 hover:text-amber-600 shadow-xs'
                    : 'bg-white/5 hover:bg-white/15 border-white/10 text-cyan-300 hover:text-cyan-200'
                }`}
                title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                aria-label="Toggle Theme"
              >
                {isLight ? <FaMoon className="text-sm" /> : <FaSun className="text-sm" />}
              </button>

              <a
                href="https://drive.google.com/drive/folders/11SBFpfS5OMElKp8RXitH2MGMO3mWVqoS"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase transition-all duration-200 ${
                  isLight
                    ? 'border-slate-300 text-slate-800 bg-slate-100 hover:bg-slate-200 hover:border-slate-400'
                    : 'border-white/20 text-white hover:border-white/50 hover:bg-white/10'
                }`}
              >
                Resume ↗
              </a>
            </div>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Hamburger */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-colors ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-amber-500'
                  : 'bg-white/5 border-white/10 text-cyan-300'
              }`}
              aria-label="Toggle Theme"
            >
              {isLight ? <FaMoon className="text-base" /> : <FaSun className="text-base" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors focus:outline-none ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-white/5 border-white/10 text-white'
              }`}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`md:hidden border-t px-6 py-6 overflow-hidden ${
                isLight
                  ? 'bg-white/95 backdrop-blur-xl border-slate-200 text-slate-900 shadow-lg'
                  : 'bg-black/95 backdrop-blur-xl border-white/10 text-white'
              }`}
            >
              <div className="flex flex-col gap-4">
                {links.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-serif font-medium uppercase tracking-wider py-2 border-b transition-colors ${
                      isLight
                        ? 'text-slate-700 hover:text-cyan-600 border-slate-100'
                        : 'text-gray-300 hover:text-cyan-400 border-white/5'
                    }`}
                  >
                    {l.label}
                  </a>
                ))}

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="https://drive.google.com/drive/folders/11SBFpfS5OMElKp8RXitH2MGMO3mWVqoS"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full text-center py-2.5 px-4 rounded-xl border text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                      isLight
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-700 hover:bg-cyan-500/20'
                        : 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20'
                    }`}
                  >
                    View Resume (Google Drive) ↗
                  </a>

                  <div className="flex items-center justify-around pt-2">
                    <a
                      href="https://github.com/bharatnanda001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-xs font-mono transition-colors ${
                        isLight ? 'text-slate-600 hover:text-slate-950' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <FaGithub className="text-base" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/bharat-nanda-01648028a/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-xs font-mono transition-colors ${
                        isLight ? 'text-slate-600 hover:text-blue-600' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      <FaLinkedin className="text-base" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
