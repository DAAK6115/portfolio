import { motion } from "framer-motion";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Merci pour ton message ! (À connecter plus tard à un backend ou un service d'email)");
  }

  return (
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
            required
            rows={4}
            className="w-full rounded-xl bg-slate-900/60 border border-slate-700 px-3 py-2 text-sm outline-none focus:border-sky-400 resize-none"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-medium transition"
        >
          Envoyer
        </button>
      </form>
    </motion.div>
  );
}
