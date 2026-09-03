'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCopy,
  FaCheck
} from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hello Bharat,\n\n${form.message}\n\n---\nSender Name: ${form.name}\nSender Email: ${form.email}`
    );
    const mailtoUrl = `mailto:bharatnanda184@gmail.com?subject=${subject}&body=${body}`;

    // Open user's email client with pre-filled message
    window.location.href = mailtoUrl;

    setStatus('success');
  };

  return (
    <section id="contact" className="py-32 bg-transparent text-slate-900 dark:text-white px-6 border-t border-slate-200/80 dark:border-white/10 transition-colors">
      <motion.div 
        ref={ref} 
        initial={{ opacity: 0, scale: 0.85, y: 50 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto backdrop-blur-sm p-6 rounded-2xl"
      >
        <div className="mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-rose-400">
            Contact
          </h2>
          <p className="text-slate-600 dark:text-gray-400 text-sm font-mono mt-2">
            Let's discuss new opportunities, engineering collaborations, or AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Socials */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-slate-900 dark:text-white">
                Let's work together.
              </h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed mb-8 text-sm">
                I'm actively looking for Software Engineering and AI Engineer opportunities. Reach out directly or drop a message through the form.
              </p>

              <div className="space-y-3 font-mono text-xs">
                {/* Email Item with 1-click Copy */}
                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 hover:border-cyan-500/50 shadow-2xs transition-all">
                  <a
                    href="mailto:bharatnanda184@gmail.com"
                    className="flex items-center gap-3 text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white transition-colors truncate"
                  >
                    <FaEnvelope className="text-cyan-600 dark:text-cyan-400 text-sm shrink-0" />
                    <span className="truncate">bharatnanda184@gmail.com</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('bharatnanda184@gmail.com', 'email')}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        <FaCheck /> Copied
                      </span>
                    ) : (
                      <FaCopy className="text-xs" />
                    )}
                  </button>
                </div>

                {/* Phone Item with 1-click Copy */}
                <div className="p-3.5 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 hover:border-emerald-500/50 shadow-2xs transition-all">
                  <a
                    href="tel:+918607728601"
                    className="flex items-center gap-3 text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white transition-colors"
                  >
                    <FaPhoneAlt className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0" />
                    <span>+91 86077 28601</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('+918607728601', 'phone')}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/15 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                    title="Copy Phone"
                  >
                    {copiedType === 'phone' ? (
                      <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                        <FaCheck /> Copied
                      </span>
                    ) : (
                      <FaCopy className="text-xs" />
                    )}
                  </button>
                </div>

                {/* GitHub */}
                <a
                  href="https://github.com/bharatnanda001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-3 text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:border-purple-500/50 shadow-2xs transition-all"
                >
                  <FaGithub className="text-purple-600 dark:text-purple-400 text-sm shrink-0" />
                  <span>github.com/bharatnanda001</span>
                  <FaExternalLinkAlt className="text-[10px] ml-auto text-slate-400 dark:text-gray-500" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bharat-nanda-01648028a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-3 text-slate-700 dark:text-gray-300 hover:text-slate-950 dark:hover:text-white hover:border-blue-500/50 shadow-2xs transition-all"
                >
                  <FaLinkedin className="text-blue-600 dark:text-blue-400 text-sm shrink-0" />
                  <span>linkedin.com/in/bharat-nanda</span>
                  <FaExternalLinkAlt className="text-[10px] ml-auto text-slate-400 dark:text-gray-500" />
                </a>

                {/* Resume Folder */}
                <a
                  href="https://drive.google.com/drive/folders/11SBFpfS5OMElKp8RXitH2MGMO3mWVqoS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-3 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 shadow-2xs transition-all"
                >
                  <FaExternalLinkAlt className="text-cyan-600 dark:text-cyan-400 text-xs shrink-0" />
                  <span className="font-semibold">View Resume (Google Drive)</span>
                  <span className="text-[10px] uppercase font-mono ml-auto bg-cyan-500/20 px-2 py-0.5 rounded-full">
                    PDF
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Interactive Form */}
          <div className="md:col-span-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-white/85 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-2xl p-8 space-y-6 shadow-sm dark:shadow-none transition-colors"
            >
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse"></span>
                Send a Direct Message
              </h4>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-mono space-y-2">
                  <div className="flex items-center gap-2 font-bold">
                    <FaCheck /> Message generated successfully!
                  </div>
                  <p className="text-slate-600 dark:text-gray-300">
                    Your email client should have opened with your draft pre-filled. If not, click below to email directly:
                  </p>
                  <a
                    href={`mailto:bharatnanda184@gmail.com?subject=${encodeURIComponent(
                      `Portfolio Inquiry from ${form.name}`
                    )}&body=${encodeURIComponent(form.message)}`}
                    className="inline-block underline font-semibold text-emerald-700 dark:text-emerald-400 hover:opacity-80"
                  >
                    Click to Open Email Draft ↗
                  </a>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2">
                  Your Name <span className="text-cyan-600 dark:text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alex Smith"
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2">
                  Your Email Address <span className="text-cyan-600 dark:text-cyan-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="alex@company.com"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-gray-400 mb-2">
                  Message <span className="text-cyan-600 dark:text-cyan-400">*</span>
                </label>
                <textarea
                  placeholder="Hi Bharat, I'd love to connect regarding an opportunity or project..."
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 dark:focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-medium text-sm tracking-wider uppercase hover:opacity-95 shadow-md hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Send Message</span>
                <FaEnvelope className="text-xs" />
              </button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
