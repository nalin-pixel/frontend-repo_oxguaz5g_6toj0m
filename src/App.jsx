import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Night sky with subtle stars */}
      <div className="fixed inset-0 -z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.15),transparent_45%)]" />
      </div>

      {/* Warm tea glow accents */}
      <div className="pointer-events-none fixed bottom-10 right-10 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
