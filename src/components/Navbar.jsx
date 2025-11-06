import { Moon, Star } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/30 bg-slate-900/30 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-slate-100 hover:text-white transition-colors">
          <Star className="w-5 h-5 text-yellow-300" />
          <span className="font-semibold tracking-wide">MWZ</span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
          <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <Moon className="w-5 h-5 text-slate-200" />
        </div>
      </nav>
    </header>
  );
}
