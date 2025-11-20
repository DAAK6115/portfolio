import { useState, useEffect } from "react";

const links = [
  { href: "#hero", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projets" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
  className={`fixed inset-x-0 top-0 z-50 transition 
      ${scrolled ? "bg-slate-950/95 backdrop-blur border-b border-slate-800" : "bg-slate-950/80 border-b border-slate-900"}`}
>

      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Nom */}
        <a href="#hero" className="font-semibold tracking-tight text-lg">
          <span className="text-sky-400">{"<"}</span>
          DAAK6115
          <span className="text-sky-400">{"/>"}</span>
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map(link => (
  <a
    key={link.href}
    href={link.href}
    className="text-slate-300 hover:text-sky-400 transition px-2 py-1"
  >
    {link.label}
  </a>
))}

          <a
            href="#contact"
            className="px-3 py-1.5 rounded-full bg-sky-500 hover:bg-sky-400 text-xs font-medium transition"
          >
            Me contacter
          </a>
        </div>

        {/* Bouton mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-700 px-3 py-1 text-xs"
          onClick={() => setOpen(o => !o)}
        >
          {open ? "Fermer" : "Menu"}
        </button>

        {/* Menu mobile */}
        {open && (
          <div className="absolute top-full left-0 right-0 bg-slate-950 border-b border-slate-800 md:hidden">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-200 py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
