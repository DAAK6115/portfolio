import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-8">
      <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Tous droits réservés.</p>
        <p className="font-mono">Conçu avec React, Tailwind & Framer Motion</p>
      </div>
    </footer>
  );
}
