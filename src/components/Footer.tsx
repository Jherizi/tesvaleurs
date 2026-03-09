"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [form, setForm] = useState({ prenom: "", nom: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ prenom: "", nom: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full px-3 py-2 rounded-lg bg-white/10 border border-sable/20 text-sm text-white placeholder:text-sable/40 focus:outline-none focus:border-terracotta transition-colors";

  return (
    <footer className="bg-brun-profond text-sable/80 border-t-2" style={{ borderImage: 'linear-gradient(to right, #F26522, #7C3AED) 1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">
              Tes Valeurs
            </h3>
            <p className="text-sm leading-relaxed text-sable/60">
              Identifie tes valeurs hautes avec un questionnaire interactif.
              Avance sans te trahir.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/questionnaire"
                  className="hover:text-terracotta-light transition-colors"
                >
                  D&eacute;couvre tes valeurs hautes
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="hover:text-terracotta-light transition-colors"
                >
                  Mentions l&eacute;gales
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold text-white mb-3">Contacter Jihane</h4>
            {status === "sent" ? (
              <p className="text-sm text-sage-light">Merci ! Ton message a bien &eacute;t&eacute; envoy&eacute;.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Pr&eacute;nom"
                    required
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    required
                    value={form.nom}
                    onChange={(e) => setForm({ ...form, nom: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <textarea
                  placeholder="Ton message..."
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gradient-premium px-6 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
                >
                  {status === "sending" ? "Envoi..." : "Envoyer"}
                </button>
                {status === "error" && (
                  <p className="text-xs text-red-400">Une erreur est survenue. R&eacute;essaie.</p>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-sable/10 text-center text-xs text-sable/40">
          D&eacute;couvre tesvaleurs.fr &ndash; Pour avancer sans te trahir. Un site par Jihane Herizi, Psychologue du travail, Clinicienne, Pr&eacute;paratrice mentale et Coach agile.
        </div>
      </div>
    </footer>
  );
}
