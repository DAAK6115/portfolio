import { useState } from "react";
import { motion } from "framer-motion";

const FORM_ENDPOINT =
  "https://formsubmit.co/ajax/diomandezazzizangekevin@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState(null); // "loading" | "success" | "error" | null

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="border-t border-slate-800 py-16">
      <motion.div
        className="max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Contact</h2>
        <p className="text-slate-400 mb-6">
          Un projet, une idée, une question ? Envoie-moi un message et je te
          répondrai rapidement.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="block text-sm mb-1 text-slate-200">
                Nom complet
              </label>
              <input
                type="text"
                name="name" // ← important pour l'email reçu
                required
                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-sky-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-slate-200">
                Adresse e-mail
              </label>
              <input
                type="email"
                name="email" // ← pour pouvoir te répondre
                required
                className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-sky-400"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 text-slate-200">
              Message
            </label>
            <textarea
              name="message" // ← le contenu du mail
              required
              rows={4}
              className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-sky-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-sm font-medium transition"
          >
            {status === "loading" ? "Envoi en cours..." : "Envoyer"}
          </button>

          {status === "success" && (
            <p className="text-sm text-emerald-400 pt-2">
              Merci pour ton message, il a bien été envoyé !
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-rose-400 pt-2">
              Oups, une erreur est survenue. Tu peux aussi m&apos;écrire à{" "}
              <a
                href="mailto:diomandezazzizangekevin@gmail.com"
                className="underline"
              >
                diomandezazzizangekevin@gmail.com
              </a>
              .
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
