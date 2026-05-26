'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-transparent text-white px-6 border-t border-white/10">
      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto backdrop-blur-sm p-6 rounded-2xl"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-rose-400 mb-16">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-medium mb-6">Let's work together.</h3>
            <p className="text-muted leading-relaxed mb-12">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4 font-mono text-sm">
              <a href="mailto:bharatnanda184@gmail.com" className="block text-muted hover:text-white transition-colors">
                bharatnanda184@gmail.com
              </a>
              <a href="https://github.com/bharatnanda001" target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-white transition-colors">
                github.com/bharatnanda001
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-muted hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="border-b border-border pb-2">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full bg-transparent text-white placeholder:text-muted focus:outline-none"
              />
            </div>
            <div className="border-b border-border pb-2">
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full bg-transparent text-white placeholder:text-muted focus:outline-none"
              />
            </div>
            <div className="border-b border-border pb-2">
              <textarea
                placeholder="Message"
                required
                rows={4}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full bg-transparent text-white placeholder:text-muted focus:outline-none resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {sent ? 'Message Sent' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
