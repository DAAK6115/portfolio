import { skillGroups, softSkills } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-x">
        <SectionHeading index="03" kicker="Stack" title="Technologies & outils.">
          Les technologies que j&apos;utilise au quotidien, regroupées par domaine.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="card h-full p-5 transition-colors hover:border-cyan-400/40">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <Icon name={g.icon} size={18} />
                  </span>
                  <h3 className="font-semibold text-white">{g.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <div className="card flex flex-wrap items-center gap-x-6 gap-y-3 p-5">
            <h3 className="font-mono text-xs uppercase tracking-wider text-amber-400">Savoir-être</h3>
            {softSkills.map((s) => (
              <span key={s} className="flex items-center gap-2 text-sm text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
