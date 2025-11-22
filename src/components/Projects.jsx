import { motion } from "framer-motion";

const path = window.location.pathname;
const PUBLIC_BASE = path.startsWith("/portfolio") ? "/portfolio/" : "/";

const projects = [
  {
    name: "ARTISAN_CI",
    stack: "React • Django • Tailwind",
    desc: "Plateforme pour connecter les artisans et leurs clients en Côte d'Ivoire.",
    image: `${PUBLIC_BASE}projects/artisan_ci.jpg`,
    demoUrl: "https://artisan-ci-mauve.vercel.app",
    repoUrl: "https://github.com/DAAK6115/ARTISAN_CI",
  },
  {
    name: "Pêche & Sensibilisation",
    stack: "Flutter • Dart • Web",
    desc: "Application Mobile de sensibilisation à la pêche responsable, accessible directement dans le navigateur.",
    image: `${PUBLIC_BASE}projects/peche_sensibilisation.jpg`,
    demoUrl: "https://daak6115.github.io/peche_sensibilisation/",
    repoUrl: "https://github.com/DAAK6115/peche_sensibilisation",
  },
  {
    name: "Dashboard de suivi de livres",
    stack: "Django • React • API REST",
    desc: "Visualisation des stocks, ventes et distributions par centre sur une interface web.",
    image: `${PUBLIC_BASE}projects/gestion_livre.jpg`,
    demoUrl: "https://gestion-livre.onrender.com",
    repoUrl: "https://github.com/DAAK6115/gestion_livre",
  },
  {
  name: "Formulaire de Récupération de données pour DocteurPc",
  stack: "WordPress",
  desc: "Création de formulaire pour avoir des informations sur le client et le type de support endommagé",
  image: `${PUBLIC_BASE}projects/recup_docteurpc.jpg`, // ou .png selon ton fichier
  demoUrl: "https://docteurpc.ci/formulaire-de-recuperation-de-donnees/",
},
{
  name: "NexaFinance",
  stack: "WordPress",
  desc: "Site Web pour une société de conseil financier et de gestion à forte valeur ajoutée pour les petites et moyennes entreprises (PME) ",
  image: `${PUBLIC_BASE}projects/nexafinance.jpg`, // ou .png selon ton fichier
  demoUrl: "https://nexafinance.net/",
},
{
  name: "DAAK_TECH",
  stack: "WordPress",
  desc: "Site Web pour une start-up qui conçoit des solutions numériques innovantes et sur mesure, fais de la maintenance informatique, de la récupération de données et la personnalisation d'ordinateur.",
  image: `${PUBLIC_BASE}projects/daaktech.jpg`, // ou .png selon ton fichier
  demoUrl: "https://daaktech.com/",
},
];


export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-slate-800 py-16"
    >
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Projets</h2>
      <p className="text-slate-400 mb-8">
        Quelques exemples de projets sur lesquels j&apos;ai travaillé ou que je
        peux réaliser pour vous.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 flex flex-col justify-between"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            {/* Image du projet */}
            {project.image && (
  <div className="mb-4 rounded-3xl border border-slate-800/60 bg-slate-900/60 overflow-hidden">
    <img
      src={project.image}
      alt={project.name}
      className="w-full h-40 md:h-48 object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
)}


            {/* Texte */}
            <div className="flex-1 flex flex-col">
              <h3 className="font-semibold mb-1 text-sky-100">
                {project.name}
              </h3>
              <p className="text-xs text-sky-300 mb-3">{project.stack}</p>
              <p className="text-sm text-slate-300 mb-4">{project.desc}</p>

              <div className="mt-auto flex flex-wrap gap-3 text-xs">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full bg-sky-500 hover:bg-sky-400 font-medium transition"
                  >
                    Demo
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full border border-slate-600 hover:border-sky-400 transition"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </section>
  );
}
