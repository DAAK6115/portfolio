import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >

      <h2 className="text-2xl md:text-3xl font-semibold mb-2">À propos</h2>
      <p className="text-slate-300 mb-4">
        Je suis un développeur passionné par la création de solutions simples
        pour des problèmes complexes. J&apos;aime particulièrement concevoir des
        applications web et mobiles qui apportent une vraie valeur aux
        utilisateurs.
      </p>
      <p className="text-slate-300 mb-4">
        J&apos;ai l&apos;habitude de travailler avec des technologies comme
        React, Laravel, Django, Tailwind, ainsi que des bases de données
        relationnelles. J&apos;apprécie les projets concrets : gestion,
        suivi, automatisation, tableaux de bord.
      </p>
      <p className="text-slate-400 text-sm">
        Au-delà du code, j&apos;aime comprendre le contexte, discuter des
        besoins et construire des solutions qui restent maintenables sur le
        long terme.
      </p>
    </motion.div>
  );
}
