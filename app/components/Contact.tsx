'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder — wire to EmailJS / Formspree in production
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      color: '#8b5cf6',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: '#22d3ee',
    },
    {
      label: 'Email',
      href: 'mailto:bharat@example.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: '#f472b6',
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-pink-400 tracking-widest uppercase">// Get In Touch</span>
          <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mt-3">
            Let&#39;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-md mx-auto text-sm">
            Open to internships, full-time roles, and exciting projects. Let&#39;s build something extraordinary.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 border border-white/5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">📍</div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">LOCATION</div>
                  <div className="text-white text-sm font-sora">Gurugram, Haryana, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">📅</div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">AVAILABILITY</div>
                  <div className="text-white text-sm font-sora flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    Open to Opportunities
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/30 flex items-center justify-center">🎯</div>
                <div>
                  <div className="text-xs text-slate-500 font-mono">INTERESTS</div>
                  <div className="text-white text-sm font-sora">AI Engineering · Full Stack · Backend</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 glass rounded-xl p-4 border border-white/5 hover:border-opacity-30 group transition-all"
                  style={{ '--hover-color': s.color } as React.CSSProperties}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                    style={{ background: `${s.color}18`, border: `1px solid ${s.color}30`, color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <span className="font-sora text-slate-300 group-hover:text-white transition-colors">{s.label}</span>
                  <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors">↗</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 border border-white/5 space-y-5">
              {['name', 'email'].map(field => (
                <div key={field}>
                  <label className="font-mono text-xs text-slate-500 tracking-wider uppercase block mb-1.5">
                    {field}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    required
                    value={form[field as 'name' | 'email']}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all font-mono"
                  />
                </div>
              ))}
              <div>
                <label className="font-mono text-xs text-slate-500 tracking-wider uppercase block mb-1.5">MESSAGE</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all font-mono resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 text-white font-sora font-semibold text-sm hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] hover:scale-[1.02] active:scale-100 transition-all duration-300"
              >
                {sent ? '✓ Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
