import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(15,23,42,0.6)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-slate-100"
        >
          Mari Berkolaborasi
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-slate-300"
        >
          Terbuka untuk freelance, kolaborasi, dan proyek menarik seputar front-end.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="mailto:wildan@example.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white transition-colors"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition-colors"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition-colors"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
