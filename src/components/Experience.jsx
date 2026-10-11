import { timeline } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-y border-ink-800 bg-ink-900/30 py-24">
      <div className="container-x">
        <SectionHeading index="04" kicker="Parcours" title="Expérience & formation." />

        <ol className="relative ml-2 space-y-8 border-l border-ink-700 pl-8">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06} x={16} y={0}>
              <li className="relative">
                <span
                  className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-ink-950 ${
                    item.type === "Formation" ? "bg-amber-400" : "bg-cyan-400"
                  }`}
                />
                <div className="card p-5">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider ${
                        item.type === "Formation" ? "text-amber-300" : "text-cyan-300"
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="font-mono text-xs text-slate-500">{item.period}</span>
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
                        {item.place}
                      </a>
                    ) : (
                      item.place
                    )}
                  </p>
                  {item.desc && <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.desc}</p>}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
