import { motion } from "framer-motion";

const techSkills = [
  "Développement web (front & back)",
  "Applications mobiles",
  "Maintenance informatique",
  "Récupération de données perdues",
];

const softSkills = [
  "Travail en équipe",
  "Autonomie & curiosité",
  "Capacité d'adaptation",
  "Sens du service client",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 border-b border-slate-800 bg-slate-950/40"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold">Compétences</h2>
        <p className="text-slate-300 text-sm md:text-base max-w-3xl">
          Voici un aperçu des compétences que je mets au service des projets
          sur lesquels je travaille, autant techniques que humaines.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="font-semibold mb-3 text-slate-100 text-sm md:text-base">
              Compétences techniques
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              {techSkills.map(skill => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="font-semibold mb-3 text-slate-100 text-sm md:text-base">
              Compétences transversales
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-slate-300">
              {softSkills.map(skill => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/80 px-3 py-1.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
