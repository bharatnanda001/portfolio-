'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-transparent border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted backdrop-blur-sm rounded-2xl p-6">
        <div>
          &copy; {new Date().getFullYear()} Bharat Nanda. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
