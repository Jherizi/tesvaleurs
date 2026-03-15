"use client";

import { useState, FormEvent } from "react";

interface Props {
  id?: string;
}

export default function EmailCaptureForm({ id }: Props) {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!prenom.trim() || !nom.trim() || !email.trim()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), prenom: prenom.trim(), nom: nom.trim() }),
      });
      if (!res.ok) throw new Error("Erreur");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div
        id={id}
        className="bg-white rounded-3xl border border-sable/40 p-7 sm:p-10 shadow-lg shadow-brun/5 text-center"
      >
        <p className="text-2xl mb-2">✓</p>
        <p className="font-serif text-xl font-bold text-brun">
          C&apos;est envoyé.
        </p>
        <p className="text-brun/60 mt-2">
          Vérifie ta boîte mail et tes spams.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-sable/40 p-7 sm:p-10 shadow-lg shadow-brun/5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <input
          type="text"
          name="PRENOM"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Pr&eacute;nom"
          required
          className="px-4 py-3.5 rounded-xl border border-sable bg-creme text-brun placeholder:text-brun/30"
        />
        <input
          type="text"
          name="NOM"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
          required
          className="px-4 py-3.5 rounded-xl border border-sable bg-creme text-brun placeholder:text-brun/30"
        />
        <input
          type="email"
          name="EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Adresse mail"
          required
          className="px-4 py-3.5 rounded-xl border border-sable bg-creme text-brun placeholder:text-brun/30"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full btn-orange px-6 py-4 rounded-full font-semibold text-lg disabled:opacity-50"
      >
        {status === "sending" ? "Envoi en cours..." : "Recevoir l\u2019outil gratuitement"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-xs text-center mt-2">
          Une erreur est survenue. Réessaie.
        </p>
      )}
      <p className="text-xs text-brun/40 text-center mt-3">
        Gratuit. Tu reçois tout par mail.
      </p>
    </form>
  );
}
