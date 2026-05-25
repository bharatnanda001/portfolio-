'use client';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5 overflow-hidden">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs animate-pulse-glow">
              BN
            </div>
            <span className="font-sora font-semibold text-white">
              Bharat<span className="gradient-text">Nanda</span>
            </span>
          </div>

          <p className="font-mono text-xs text-slate-500 text-center">
            Built with <span className="text-violet-400">Next.js 15</span> ·{' '}
            <span className="text-cyan-400">Three.js</span> ·{' '}
            <span className="text-pink-400">Framer Motion</span>
          </p>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-xs text-slate-500">Bharat Nanda © 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
