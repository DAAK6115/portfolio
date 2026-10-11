import { services } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon } from "./Icons";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container-x">
        <SectionHeading index="05" kicker="Services" title="Comment je peux vous aider.">
          J&apos;accompagne entreprises, associations et indépendants pour transformer un besoin en solution concrète.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="card group flex h-full gap-5 p-6 transition-colors hover:border-cyan-400/40">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-ink-950">
                  <Icon name={s.icon} />
                </span>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
