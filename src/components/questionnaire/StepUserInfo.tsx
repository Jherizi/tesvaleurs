"use client";

import { useState } from "react";
import { UserInfo } from "@/lib/types";

interface Props {
  data?: UserInfo;
  onNext: (info: UserInfo) => void;
}

export default function StepUserInfo({ data, onNext }: Props) {
  const [form, setForm] = useState<UserInfo>(
    data || { prenom: "", nom: "", email: "" }
  );
  const [errors, setErrors] = useState<Partial<Record<keyof UserInfo, string>>>({});

  const validate = (): boolean => {
    const errs: Partial<Record<keyof UserInfo, string>> = {};
    if (!form.prenom.trim()) errs.prenom = "Prénom requis";
    if (!form.nom.trim()) errs.nom = "Nom requis";
    if (!form.email.trim()) errs.email = "Email requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Email invalide";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) onNext(form);
  };

  return (
    <div className="bg-white rounded-2xl border border-sable p-6 sm:p-8">
      <div className="mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brun mb-2">
          Avant de commencer
        </h2>
        <p className="text-brun/60">
          Ces informations nous permettent de personnaliser ton rapport.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-brun mb-1">
              Prénom <span className="text-terracotta">*</span>
            </label>
            <input
              type="text"
              value={form.prenom}
              onChange={(e) => setForm({ ...form, prenom: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-sable bg-creme text-brun placeholder:text-brun/30 focus:border-terracotta"
              placeholder="Ton prénom"
            />
            {errors.prenom && (
              <p className="text-red-500 text-xs mt-1">{errors.prenom}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-brun mb-1">
              Nom <span className="text-terracotta">*</span>
            </label>
            <input
              type="text"
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-sable bg-creme text-brun placeholder:text-brun/30 focus:border-terracotta"
              placeholder="Ton nom"
            />
            {errors.nom && (
              <p className="text-red-500 text-xs mt-1">{errors.nom}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-brun mb-1">
            Email <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-sable bg-creme text-brun placeholder:text-brun/30 focus:border-terracotta"
            placeholder="ton@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <p className="text-xs text-brun/40">
          En continuant, tu acceptes de recevoir tes résultats par email.
          Tu peux te désinscrire à tout moment.
        </p>

        <button
          type="submit"
          className="w-full btn-orange py-3 rounded-full font-medium"
        >
          Commencer le questionnaire
        </button>
      </form>
    </div>
  );
}
