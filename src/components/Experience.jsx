import { motion } from "framer-motion";

const experiences = [
  {
    title: "Développeur web & mobile (projets personnels / freelance)",
    period: "2023 — Aujourd'hui",
    desc: "Conception d'applications web et mobiles, API, tableaux de bord et outils pour entrepreneurs et associations.",
  },
  {
    title: "Maintenance informatique & récupération de données",
    period: "2024 - Aujourd'hui",
    desc: "Dépannage, installation, optimisation et récupération de données pour particuliers et petites structures.",
  },
];

const education = [
  {
    title: "Licence / formation en informatique Génie-Logiciel",
    period: "2022 - 2025",
    desc: (<><a href="https://www.iit.ci/" target="_blank" rel="noreferrer" className="text-sky-400 underline hover:text-sky-300">
          Institut Ivoirien de Technologie
        </a>{" "}
        | Filière Informatique, Génie Logiciel
      </>
    ),

  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Expérience & parcours
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="font-semibold text-slate-100 mb-3 text-sm md:text-base">
              Expériences
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-slate-300">
              {experiences.map(item => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
                >
                  <p className="font-semibold text-slate-100">
                    {item.title}
                  </p>
                  <p className="text-sky-300 text-xs mb-1">{item.period}</p>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-100 mb-3 text-sm md:text-base">
              Formation
            </h3>
            <ul className="space-y-4 text-xs md:text-sm text-slate-300">
              {education.map(item => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
                >
                  <p className="font-semibold text-slate-100">
                    {item.title}
                  </p>
                  <p className="text-sky-300 text-xs mb-1">{item.period}</p>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <p className="text-xs md:text-sm text-slate-400">
          Pour plus de détails, tu peux ajouter un bouton{" "}
          <span className="italic">“Télécharger mon CV”</span> ici avec un PDF.
        </p>
      </div>
    </section>
  );
}
