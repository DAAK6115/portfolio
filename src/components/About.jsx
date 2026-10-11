import { profile } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

const facts = [
  { icon: "pin", label: "Localisation", value: profile.location },
  { icon: "layout", label: "Statut", value: "Master 1 — Informatique Génie Logiciel (IIT)" },
  { icon: "mail", label: "E-mail", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
];

const principles = [
  { title: "Code propre", text: "Des bases maintenables, lisibles et faciles à faire évoluer." },
  { title: "Utile avant tout", text: "Chaque fonctionnalité répond à un besoin réel de l'utilisateur." },
  { title: "Apprentissage continu", text: "Je teste, j'expérimente et je documente ce que j'apprends." },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-x">
        <SectionHeading index="01" kicker="À propos" title="Développeur, étudiant, dépanneur.">
          Je combine un parcours en génie logiciel avec une pratique concrète du développement web et mobile et de la
          maintenance informatique.
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-400">
            <p>
              Passionné par la technologie, je suis actuellement étudiant en Master Informatique Génie Logiciel. Mon
              parcours m&apos;a permis d&apos;allier théorie et pratique : applications web avec{" "}
              <span className="text-slate-200">React et Django</span>, applications mobiles avec{" "}
              <span className="text-slate-200">Flutter</span>, sites WordPress pour des entreprises locales.
            </p>
            <p>
              En parallèle, je suis apprenti maintenancier informatique et je récupère des données perdues. Cette
              double casquette me donne une vision complète : concevoir un produit, mais aussi comprendre comment il
              vit, tombe en panne et se sécurise.
            </p>

            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              {principles.map((p) => (
                <div key={p.title} className="card p-4">
                  <h3 className="mb-1 text-sm font-semibold text-white">{p.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-400">{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} x={20} y={0}>
            <div className="card divide-y divide-ink-700/60">
              {facts.map((f) => (
                <div key={f.label} className="flex items-start gap-4 p-4">
                  <span className="mt-0.5 text-cyan-400">
                    <Icon name={f.icon} size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">{f.label}</p>
                    {f.href ? (
                      <a href={f.href} className="break-words text-sm text-slate-200 hover:text-cyan-300">
                        {f.value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-200">{f.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="p-4 text-sm text-slate-400">
                Langue : <span className="text-slate-200">Français</span>. Centres d&apos;intérêt : jeux vidéo, lecture,
                basket-ball.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
