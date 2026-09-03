'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-transparent border-t border-slate-200/80 dark:border-white/10 transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono backdrop-blur-sm rounded-2xl p-6">
        <div className="text-center md:text-left">
          <p className="text-slate-800 dark:text-gray-300 font-medium tracking-wide">
            Built with code, creativity &amp; curiosity — Bharat Nanda | Software Engineering • Backend • AI
          </p>
          <p className="text-[11px] text-slate-500 dark:text-gray-500 mt-1">
            &copy; {new Date().getFullYear()} Bharat Nanda. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 items-center justify-center md:justify-end">
          <a
            href="https://github.com/bharatnanda001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-950 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/bharat-nanda-01648028a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/drive/folders/11SBFpfS5OMElKp8RXitH2MGMO3mWVqoS"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 hover:opacity-80 transition-colors font-semibold"
          >
            Resume
          </a>
          <a
            href="mailto:bharatnanda184@gmail.com"
            className="text-slate-600 hover:text-slate-950 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
