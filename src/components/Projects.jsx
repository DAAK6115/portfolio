import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "../data";
import SectionHeading from "./SectionHeading";
import { Icon, GithubIcon } from "./Icons";

const categories = ["Tous", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const visible = useMemo(
    () => (filter === "Tous" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="border-y border-ink-800 bg-ink-900/30 py-24">
      <div className="container-x">
        <SectionHeading index="02" kicker="Projets" title="Ce que j'ai construit.">
          Applications, plateformes et sites réalisés pour des clients ou en projets personnels. Chaque carte renvoie vers
          la démo en ligne et, quand il est public, le code source.
        </SectionHeading>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer les projets">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-lg border px-4 py-1.5 font-mono text-xs transition ${
                filter === c
                  ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                  : "border-ink-700 text-slate-400 hover:border-ink-600 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="card group flex flex-col overflow-hidden transition-colors hover:border-cyan-400/50"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-800">
                  <img
                    src={p.image}
                    alt={`Aperçu du projet ${p.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-md bg-ink-950/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-300 backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{p.desc}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center gap-4 text-sm">
                    <a
                      href={p.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      Voir la démo <Icon name="external" size={14} />
                    </a>
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white"
                      >
                        <GithubIcon size={15} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
