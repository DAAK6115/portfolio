import { motion } from "framer-motion";

const services = [
  {
    title: "Applications web sur mesure",
    desc: "Sites et tableaux de bord modernes, optimisés pour la performance et l'expérience utilisateur.",
  },
  {
    title: "Applications mobiles",
    desc: "Apps mobiles pour accompagner vos utilisateurs partout, avec une interface simple et claire.",
  },
  {
    title: "Maintenance & support",
    desc: "Surveillance, corrections et améliorations continues de vos applications et serveurs.",
  },
  {
    title: "Récupération de données",
    desc: "Accompagnement pour retrouver, nettoyer et structurer vos données importantes.",
  },
];

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Ce que je fais</h2>
      <p className="text-slate-400 mb-8">
        J&apos;accompagne les entreprises, associations et indépendants à
        transformer leurs besoins en solutions concrètes.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:border-sky-400/60 transition-transform"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <h3 className="font-semibold mb-2 text-sky-100">
              {service.title}
            </h3>
            <p className="text-sm text-slate-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
