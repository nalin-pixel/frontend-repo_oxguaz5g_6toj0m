import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800">
      {/* Stars background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_60%)] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* Moon glow */}
      <div className="absolute -top-24 right-0 w-[40rem] h-[40rem] rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-slate-50 to-slate-300 bg-clip-text text-transparent"
        >
          Muhammad Wildan Zulfahmi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto"
        >
          Front-end Developer • Born July 15, 2009. I craft sleek, responsive web experiences with delightful details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-5 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white font-medium shadow-lg shadow-indigo-900/30 transition-colors">
            Lihat Proyek
          </a>
          <a href="#contact" className="px-5 py-3 rounded-lg border border-white/20 text-slate-100 hover:bg-white/5 font-medium transition-colors">
            Hubungi Saya
          </a>
        </motion.div>
      </div>

      {/* Horizon gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-800 to-transparent" />
    </section>
  );
}
