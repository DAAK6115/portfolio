import { motion } from "framer-motion";
import { profile, projects, skillGroups } from "../data";
import useTypewriter from "../hooks/useTypewriter";
import CountUp from "./CountUp";
import { Icon, GithubIcon, LinkedinIcon } from "./Icons";

const years = Math.max(1, new Date().getFullYear() - profile.startYear);
const techCount = new Set(skillGroups.flatMap((g) => g.items)).size;

const stats = [
  { value: projects.length, suffix: "", label: "Projets en ligne" },
  { value: years, suffix: "+", label: "Ans de pratique" },
  { value: techCount, suffix: "", label: "Technologies" },
];

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr,1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-900/70 px-3 py-1.5 font-mono text-xs text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Ouvert aux stages & missions
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Je conçois des produits web & mobiles{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">fiables</span>.
          </h1>

          <p className="mt-5 h-8 font-mono text-lg text-amber-300 sm:text-xl">
            <span className="text-slate-500">&gt; </span>
            {role}
            <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 bg-amber-300 animate-blink" />
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400">
            Je suis <strong className="font-semibold text-slate-200">{profile.name}</strong>, étudiant en Master
            Informatique Génie Logiciel à Abidjan. Je construis des applications avec React, Django et Flutter, et je
            maintiens aussi les outils numériques de mon entourage.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              Voir mes projets <Icon name="arrow" size={16} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Me contacter
            </a>
            {profile.cv && (
              <a href={profile.cv} download className="btn btn-ghost">
                <Icon name="download" size={16} /> CV
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center gap-4 text-slate-400">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white">
              <GithubIcon size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <LinkedinIcon size={22} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="E-mail" className="transition hover:text-white">
              <Icon name="mail" size={22} />
            </a>
          </div>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="animate-float"
        >
          <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/80 shadow-2xl shadow-cyan-500/5">
            <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-800/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-3 font-mono text-xs text-slate-500">developer.js</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-slate-300">
              <code>
                <span className="text-purple-400">const</span> <span className="text-cyan-300">dev</span> = {"{"}
                {"\n"}  nom: <span className="text-emerald-300">"Azziz Ange Kevin"</span>,
                {"\n"}  rôle: <span className="text-emerald-300">"Full-stack & mobile"</span>,
                {"\n"}  stack: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Django"</span>, <span className="text-emerald-300">"Flutter"</span>],
                {"\n"}  base: <span className="text-emerald-300">"Abidjan, CI"</span>,
                {"\n"}  disponible: <span className="text-amber-300">true</span>,
                {"\n"}{"}"};
              </code>
            </pre>
          </div>
        </motion.div>
      </div>

      <div className="container-x relative mt-16">
        <dl className="grid grid-cols-3 gap-4 rounded-2xl border border-ink-700/70 bg-ink-900/50 p-5 backdrop-blur-sm sm:p-7">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="order-2 mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</dt>
              <dd className="font-mono text-3xl font-semibold text-white sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
