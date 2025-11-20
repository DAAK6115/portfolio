import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />

      <main className="pt-20 space-y-16">
  <section id="hero">
    <Hero />
  </section>

  <section id="services" className="py-16 border-t border-slate-800 bg-slate-950">
    <Services />
  </section>

  <section id="projects" className="py-16 border-t border-slate-800 bg-slate-950">
    <Projects />
  </section>

  <section id="about" className="py-16 border-t border-slate-800 bg-slate-950">
    <About />
  </section>

  <section id="contact" className="py-16 border-t border-slate-800 bg-slate-950">
    <Contact />
  </section>
</main>

    </div>
  );
}
