import { useState } from "react";
import { motion } from "framer-motion";

const DEST_EMAIL = "diomandezazzizangekevin@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard
      ?.writeText(DEST_EMAIL)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        setCopied(false);
      });
  }

  return (
    <section id="contact" className="border-t border-slate-800 py-16">
      <motion.div
        className="max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
          Me contacter
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Parlons de ton projet
        </h2>
        <p className="text-slate-400 max-w-2xl">
          Tu cherches quelqu’un pour t’aider sur un projet créatif, technique
          ou tu veux simplement en savoir plus sur mon profil ?
          <br className="hidden sm:block" /> Contacte-moi directement par e-mail.
        </p>

        {/* Carte de contact */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
          <div className="flex-1 space-y-2">
            <h3 className="text-lg md:text-xl font-semibold text-slate-50">
              Disponibilité & collaborations
            </h3>
            <p className="text-sm text-slate-400">
              Je suis ouvert aux{" "}
              <span className="font-medium text-sky-300">
                collaborations, stages, missions
              </span>{" "}
              et projets sérieux autour de la création de site web, du développement d'applications web et mobile, de la récupération de données
              et de la maintenance.
            </p>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">
                Adresse e-mail
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/60 border border-slate-700 px-4 py-2">
                <span className="text-xs md:text-sm text-sky-100 font-mono">
                  {DEST_EMAIL}
                </span>
              </div>
            </div>
          </div>

          {/* Boutons d’action */}
          <div className="md:w-[220px] flex flex-col gap-3">
            <a
              href={`mailto:${DEST_EMAIL}?subject=${encodeURIComponent(
                "Contact via le portfolio"
              )}`}
              className="inline-flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium text-slate-950 px-4 py-2.5 transition"
            >
              ✉️ M&apos;écrire un e-mail
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center rounded-full border border-slate-600 hover:border-sky-400 text-sm font-medium text-slate-100 px-4 py-2.5 transition"
            >
              {copied ? "Adresse copiée ✔" : "Copier l’adresse e-mail"}
            </button>

            <p className="text-[11px] text-slate-500 text-center">
              Tu peux aussi m&apos;ajouter à tes contacts pour me retrouver plus
              facilement plus tard.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
