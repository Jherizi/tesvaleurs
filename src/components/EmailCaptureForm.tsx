"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface Props {
  id?: string;
}

export default function EmailCaptureForm({ id }: Props) {
  const router = useRouter();
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!prenom.trim() || !email.trim()) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), prenom: prenom.trim() }),
      });
      if (!res.ok) throw new Error("Erreur");
      setStatus("sent");
      router.push("/confirmation");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl border border-sable/40 p-7 sm:p-10 shadow-lg shadow-brun/5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          placeholder="Ton pr&eacute;nom"
          required
          className="px-4 py-3.5 rounded-xl border border-sable bg-creme text-brun placeholder:text-brun/30"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ton email"
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
          Une erreur est survenue. R&eacute;essaie.
        </p>
      )}
      <p className="text-xs text-brun/40 text-center mt-3">
        Gratuit. PDF + lien Google Doc envoy&eacute;s imm&eacute;diatement. Pas de spam.
      </p>
    </form>
  );
}
