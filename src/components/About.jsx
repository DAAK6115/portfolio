import { motion } from "framer-motion";

const infos = [
  { label: "Nom complet", value: "DIOMANDE AZZIZ ANGE KEVIN" },
  { label: "Statut", value: "Étudiant en Informatique Génie Logiciel" },
  { label: "Email", value: "diomandezazzizangekevin@gmail.com" },
  { label: "Téléphone", value: "+225 01 4093 7504" },
  { label: "Localisation", value: "Abidjan, Cocody Faya — Côte d'Ivoire" },
  { label: "Nationalité", value: "Ivoirienne" },
  { label: "Date de naissance", value: "16 juin 2005" },
  { label: "Situation", value: "Célibataire, sans enfant" },
  {
    label: "LinkedIn",
    value:
      <a href="https://www.linkedin.com/in/azziz-ange-kevin-diomande-a907792b7/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BzQzoxtdsQJCKaPoXXhs2zg%3D%3D">DIOMANDE AZZIZ ANGE KEVIN</a>
  },
  { label: "Langue", value: "Français" },
];

const SoftwareSkills = [
  "Django",
  "Flutter",
  "React JS",
  "Word",
  "Wordpress",
  "Dolibarr",
  "Arduino",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Canva",
  "Design UX",
  "Trello",
  "HTML",
  "CSS",
  "SQL Server",
];

const techSkills = [
  "Maintenance informatique (apprenti maintenancier)",
  "Récupération de données perdues",
  "Activer pack Office et Windows",
  "Installer ou Réinstaller un OS sur PC et MAC",
];

const Hobies = [
  "Jouer à des jeux vidéos",
  "Lire",
  "Apprendre",
  "Jouer au Basket-Ball"
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 border-b border-slate-800 bg-slate-950/40"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            À propos de moi
          </h2>
          <p className="text-slate-300 max-w-3xl text-sm md:text-base">
            Passionné par la technologie et le développement, je suis actuellement étudiant en Computer Science. Mon parcours m’a permis de combiner ma passion pour l’informatique avec mes compétences pratiques dans le développement web et mobile. 
            <br />Mon objectif est de continuer à évoluer dans ce domaine dynamique et de contribuer à des projets innovants, tout en poursuivant mon apprentissage
            . J&apos;aime apprendre, expérimenter et mettre mes compétences au
            service de projets concrets.
          </p>
        </div>

        <div className="grid md:grid-cols-[2fr,3fr] gap-8">
          {/* Infos perso */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
          >
            <h3 className="font-semibold mb-4 text-slate-100 text-sm md:text-base">
              Informations personnelles
            </h3>
            <dl className="space-y-2 text-xs md:text-sm text-slate-300">
              {infos.map((item) => (
                <div
                  key={item.label}
                  className="flex gap-2 items-start border-b border-slate-800/60 pb-2 last:border-b-0 last:pb-0"
                >
                  <dt className="w-32 text-slate-400">{item.label}</dt>
                  <dd className="flex-1">{item.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* Compétences */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="space-y-5"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="font-semibold mb-3 text-slate-100 text-sm md:text-base">
                Compétences créatives
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs md:text-sm text-slate-300">
                {SoftwareSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 border border-slate-800/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="font-semibold mb-3 text-slate-100 text-sm md:text-base">
                Compétences techniques
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                {techSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 border border-slate-800/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="font-semibold mb-3 text-slate-100 text-sm md:text-base">
                Hobies
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-slate-300">
                {Hobies.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1.5 border border-slate-800/80"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
