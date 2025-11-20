import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center gap-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >

      {/* Texte */}
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.35em] text-sky-400 mb-3">
          Développeur web & mobile
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Je conçois des applications{" "}
          <span className="text-sky-400">web & mobiles</span> pour donner vie
          à vos idées.
        </h1>
        <p className="text-slate-300 mb-6 max-w-xl">
          Création d&apos;applications, maintenance informatique et récupération
          de données pour entrepreneurs, associations et organisations qui
          veulent des outils fiables, simples et efficaces.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium transition"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full border border-slate-600 hover:border-sky-400 text-sm font-medium transition"
          >
            Me contacter
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-400">
          <span className="px-3 py-1 rounded-full border border-slate-700">
            React & Vite
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700">
            Laravel / PHP
          </span>
          <span className="px-3 py-1 rounded-full border border-slate-700">
            APIs & bases de données
          </span>
        </div>
      </div>

      {/* Pseudo-avatar / visuel */}
      <div className="flex-1 flex justify-center md:justify-end">
  <motion.div
    className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl bg-gradient-to-br from-sky-500/30 via-violet-500/20 to-slate-900 border border-sky-500/40 flex items-center justify-center shadow-[0_0_80px_rgba(56,189,248,0.4)]"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    whileHover={{ scale: 1.03, y: -4 }}
  >
    {/* contenu inchangé */}
    <div className="text-center px-4">
      ...
    </div>
  </motion.div>
</div>

    </motion.div>
  );
}
