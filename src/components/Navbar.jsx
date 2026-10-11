import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navLinks, profile } from "../data";
import useActiveSection from "../hooks/useActiveSection";
import { Icon } from "./Icons";

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink-700/60 bg-ink-950/75 backdrop-blur-md">
      <motion.div
        style={{ scaleX }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-cyan-400 to-amber-400"
      />
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Navigation principale">
        <a href="#home" className="font-mono text-sm font-semibold text-white">
          <span className="text-cyan-400">&lt;</span>
          {profile.handle}
          <span className="text-cyan-400"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`rounded-md px-3 py-2 text-[13px] font-medium transition-colors ${
                  active === link.id ? "text-cyan-300" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary !py-2 hidden lg:inline-flex">
          Me contacter
        </a>

        <button
          className="rounded-md p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-ink-700/60 bg-ink-950 lg:hidden"
        >
          <ul className="container-x space-y-1 py-4">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm ${
                    active === link.id ? "bg-ink-800 text-cyan-300" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
