import Reveal from "./Reveal";

export default function SectionHeading({ index, kicker, title, children }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
        <span className="text-amber-400">{index}</span> / {kicker}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-relaxed text-slate-400">{children}</p>}
    </Reveal>
  );
}
