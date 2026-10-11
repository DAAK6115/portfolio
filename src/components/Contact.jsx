import { useState } from "react";
import { profile } from "../data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Icon, GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  function copy() {
    navigator.clipboard
      ?.writeText(profile.email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => setCopied(false));
  }

  function submit(e) {
    e.preventDefault();
    const subject = form.subject || "Contact via le portfolio";
    const body = `${form.message}\n\n— ${form.name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const field =
    "w-full rounded-lg border border-ink-700 bg-ink-950/70 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400";

  return (
    <section id="contact" className="border-t border-ink-800 bg-ink-900/30 py-24">
      <div className="container-x">
        <SectionHeading index="06" kicker="Contact" title="Travaillons ensemble.">
          Un projet, un stage, une collaboration ? Écrivez-moi, je réponds rapidement.
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr]">
          <Reveal className="space-y-4">
            <div className="card p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">E-mail</p>
              <p className="mt-1 break-all font-mono text-sm text-cyan-200">{profile.email}</p>
              <button type="button" onClick={copy} className="mt-3 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
                <Icon name={copied ? "check" : "copy"} size={15} />
                {copied ? "Adresse copiée" : "Copier l'adresse"}
              </button>
            </div>
            <div className="card flex items-center gap-3 p-5 text-sm">
              <Icon name="phone" size={18} className="text-cyan-400" />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-slate-200 hover:text-cyan-300">
                {profile.phone}
              </a>
            </div>
            <div className="card flex items-center gap-3 p-5 text-sm text-slate-200">
              <Icon name="pin" size={18} className="text-cyan-400" />
              {profile.location}
            </div>
            <div className="flex gap-3">
              <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-ghost flex-1">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost flex-1">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="card space-y-4 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs text-slate-400">Nom</label>
                  <input id="name" name="name" required value={form.name} onChange={update} placeholder="Votre nom" className={field} />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-xs text-slate-400">Sujet</label>
                  <input id="subject" name="subject" value={form.subject} onChange={update} placeholder="Ex : Création de site web" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs text-slate-400">Message</label>
                <textarea id="message" name="message" required rows={6} value={form.message} onChange={update} placeholder="Décrivez votre projet…" className={`${field} resize-y`} />
              </div>
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Envoyer par e-mail <Icon name="arrow" size={16} />
              </button>
              <p className="text-xs text-slate-500">Ce formulaire ouvre votre application de messagerie avec le message pré-rempli.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
