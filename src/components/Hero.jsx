import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex items-center border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-[3fr,2fr] gap-10">
        {/* Texte principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
            Portfolio
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-50">
            DIOMANDE AZZIZ ANGE KEVIN
          </h1>

          <p className="text-lg md:text-xl text-sky-200">
            Étudiant en{" "}
            <span className="font-semibold">
              Informatique Génie-Logiciel
            </span>{" "}
            passionné par la créations de nouvelles solutions numériques.
          </p>

          <p className="text-sm md:text-base text-slate-300 max-w-xl">
            En plus de cela, je suis aussi{" "}
            <span className="font-semibold">
              apprenti maintenancier informatique
            </span>{" "}
            et{" "}
            <span className="font-semibold">
              récupérateur de données perdues
            </span>
            . J&apos;aime autant concevoir des produit digitaux que
            dépanner et sécuriser les outils numériques de mon entourage.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium transition"
            >
              Me contacter
            </a>
            <a
              href="#about"
              className="px-4 py-2 rounded-full border border-slate-600 hover:border-sky-400 text-sm font-medium transition"
            >
              Voir mon profil complet
            </a>
          </div>
        </motion.div>

        {/* Carte résumé */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="self-center"
        >
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 space-y-4">
            <h2 className="text-sm font-semibold text-slate-200">
              Infos rapides
            </h2>
            <ul className="text-xs md:text-sm text-slate-300 space-y-1.5">
              <li>
                🎓 Master 1, Informatique Génie-Logiciel — IIT
                (Grand-Bassam, VITIB)
              </li>
              <li>📍 Abidjan, Cocody Faya — Côte d&apos;Ivoire</li>
              <li>📧 diomandezazzizangekevin@gmail.com</li>
              <li>📱 +225 01 4093 7504</li>
              <li>🌍 Ivoirienne — né le 16 juin 2005</li>
              <li>💼 Ouvert aux stages & opportunités</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
