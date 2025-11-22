import { useState } from "react";

const links = [
  { href: "#home", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#projects", label: "Projets" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#home" className="font-semibold text-sm text-slate-100">
          {/* Ton “logo texte” */}
          DAAK6115 • Portfolio
        </a>

        <button
          className="md:hidden text-slate-200"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <ul className="hidden md:flex items-center gap-5 text-xs text-slate-300">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-sky-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* menu mobile */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <ul className="max-w-6xl mx-auto px-4 py-3 space-y-2 text-sm text-slate-200">
            {links.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
