import { motion } from 'framer-motion';
import { Code2, Globe, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Landing Page Tea Night',
    desc: 'Tema malam dengan nuansa teh hangat dan langit berbintang. Fokus pada tipografi dan animasi halus.',
    icon: <Globe className="w-5 h-5" />,
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'UI Components Library',
    desc: 'Koleksi komponen UI reusable yang estetis dan konsisten.',
    icon: <Code2 className="w-5 h-5" />,
    tags: ['Radix', 'shadcn/ui', 'Accessibility'],
  },
  {
    title: 'Micro Interactions',
    desc: 'Eksperimen micro-interaction untuk meningkatkan UX tanpa mengganggu.',
    icon: <Sparkles className="w-5 h-5" />,
    tags: ['Animation', 'UX', 'Details'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15)_0%,transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-slate-100 mb-10"
        >
          Pilihan Proyek
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/40 hover:bg-slate-800/60 p-5 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-indigo-300">
                  <div className="p-2 rounded-md bg-indigo-500/10 border border-indigo-300/20">
                    {it.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">{it.title}</h3>
                </div>
              </div>
              <p className="mt-3 text-slate-300 leading-relaxed">{it.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
