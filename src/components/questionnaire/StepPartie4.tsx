"use client";

import { useState } from "react";
import { Partie4Responses } from "@/lib/types";
import { SECTIONS } from "@/lib/questionnaire-data";
import NavButtons from "./NavButtons";

interface Props {
  data?: Partie4Responses;
  prenom: string;
  valeurNames?: string[];
  onNext: (data: Partie4Responses) => void;
  onPrev: () => void;
}

const section = SECTIONS[3];

const emptyTriple: [string, string, string] = ["", "", ""];

const emptyData: Partie4Responses = {
  T1: "", T2: "", T3: "", T4: "", T5: "", T6: "",
  missionEtre: "", missionFaire: "", missionAvoir: "",
  pourquoi1: [...emptyTriple],
  pourquoi2: [...emptyTriple],
  pourquoi3: [...emptyTriple],
  pourquoi4: [...emptyTriple],
};

export default function StepPartie4({ data, prenom, valeurNames = [], onNext, onPrev }: Props) {
  const [form, setForm] = useState<Partie4Responses>(data || emptyData);
  const [showErrors, setShowErrors] = useState(false);
  const [showT1Dropdown, setShowT1Dropdown] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePourquoi = (
    field: "pourquoi1" | "pourquoi2" | "pourquoi3" | "pourquoi4",
    index: number,
    value: string
  ) => {
    setForm((prev) => {
      const arr = [...prev[field]] as [string, string, string];
      arr[index] = value;
      return { ...prev, [field]: arr };
    });
  };

  const isFieldEmpty = (field: string) => {
    const val = form[field as keyof Partie4Responses];
    if (typeof val === "string") return !val.trim();
    return false;
  };

  const pourquoiLabels = [
    "Pourquoi ressens-tu que cet objectif est si significatif ?",
    "Et pourquoi aimerais-tu le réaliser ?",
    "Et pourquoi aimerais-tu faire cela ?",
    "Et pourquoi est-ce si important pour toi ?",
  ];
  const pourquoiFields = ["pourquoi1", "pourquoi2", "pourquoi3", "pourquoi4"] as const;

  const requiredFields = ["T1", "T2", "T3", "T4", "T5", "T6", "missionEtre", "missionFaire", "missionAvoir"];
  const pourquoiFilled = pourquoiFields.every((f) => form[f][0].trim() !== "");
  const allFilled = requiredFields.every((f) => !isFieldEmpty(f)) && pourquoiFilled;

  const handleNext = () => {
    if (!allFilled) {
      setShowErrors(true);
      return;
    }
    onNext(form);
  };

  return (
    <div className="bg-white rounded-2xl border border-sable p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-terracotta mb-1">{section.subtitle}</p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brun mb-3">
          {section.title}
        </h2>
        {section.consigne && (
          <div className="bg-sable-light rounded-xl p-4 border border-sable">
            <p className="text-sm text-brun/70 italic">
              &laquo;&thinsp;{section.consigne}&thinsp;&raquo;
            </p>
          </div>
        )}
      </div>

      {/* Valeurs identifiées */}
      {valeurNames.length > 0 && (
        <div className="bg-sable-light rounded-xl p-4 border border-sable mb-8">
          <p className="text-sm font-medium text-brun mb-2">
            Voici les valeurs que tu as identifiées :
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {valeurNames.map((name) => (
              <span
                key={name}
                className="bg-terracotta/10 text-terracotta px-3 py-1 rounded-full text-sm font-medium"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="text-sm text-brun/70 italic">
            Laquelle est ta valeur la plus haute ?
          </p>
        </div>
      )}

      {/* 6 questions principales */}
      <div className="space-y-6 mb-10">
        {section.questions.map((q, i) => {
          const isEmpty = showErrors && isFieldEmpty(q.id);
          const isT1 = q.id === "T1";
          return (
            <div key={q.id}>
              <label className="block text-sm font-medium text-brun mb-2">
                <span className="text-terracotta mr-2">{i + 1}.</span>
                {q.text}
                <span className="text-terracotta ml-1">*</span>
              </label>

              {isT1 && valeurNames.length > 0 ? (
                <div className="relative">
                  <textarea
                    value={form.T1}
                    onChange={(e) => handleChange("T1", e.target.value)}
                    onFocus={() => setShowT1Dropdown(true)}
                    onBlur={() => setTimeout(() => setShowT1Dropdown(false), 200)}
                    placeholder="Choisis parmi tes valeurs hautes identifiées ou écris librement..."
                    rows={2}
                    className={`w-full px-4 py-3 rounded-xl border bg-creme text-brun placeholder:text-brun/30 resize-y ${
                      isEmpty ? "border-red-400" : "border-sable"
                    }`}
                  />
                  {showT1Dropdown && (
                    <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-sable rounded-xl shadow-lg overflow-hidden">
                      <p className="text-xs text-brun/40 px-4 py-2 border-b border-sable/50 bg-sable-light/50">
                        Tes valeurs hautes identifiées :
                      </p>
                      {valeurNames.map((name) => (
                        <button
                          key={name}
                          onMouseDown={() => {
                            handleChange("T1", name);
                            setShowT1Dropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2.5 text-sm text-brun hover:bg-sable-light transition-colors border-b border-sable/20 last:border-b-0"
                        >
                          {name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <textarea
                  value={form[q.id as keyof Partie4Responses] as string || ""}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                  placeholder={q.placeholder}
                  rows={2}
                  className={`w-full px-4 py-3 rounded-xl border bg-creme text-brun placeholder:text-brun/30 resize-y ${
                    isEmpty ? "border-red-400" : "border-sable"
                  }`}
                />
              )}
              {isEmpty && (
                <p className="text-red-500 text-xs mt-1">Cette réponse est requise</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Déclaration de mission */}
      <div className="bg-sable-light rounded-xl p-5 border border-sable mb-8">
        <h3 className="font-serif text-xl font-semibold text-brun mb-2">
          Déclaration de mission
        </h3>
        <p className="text-sm text-brun/60 mb-4 italic">
          &laquo;&thinsp;Si tu ne pouvais faire qu&apos;une seule chose dans ta vie,
          sans possibilité d&apos;échec, ce serait quoi ?&thinsp;&raquo;
        </p>
        <p className="text-sm text-brun font-medium mb-3">
          Je, {prenom || "______"}, déclare que mon objectif principal dans la vie est de :
        </p>
        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-brun/60 mb-1 block">
              Être : <span className="text-terracotta">*</span>
            </label>
            <input
              type="text"
              value={form.missionEtre}
              onChange={(e) => handleChange("missionEtre", e.target.value)}
              placeholder="Ce que tu veux être..."
              className={`w-full px-3 py-2 rounded-lg border bg-white text-brun text-sm placeholder:text-brun/30 ${
                showErrors && !form.missionEtre.trim() ? "border-red-400" : "border-sable"
              }`}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-brun/60 mb-1 block">
              Faire : <span className="text-terracotta">*</span>
            </label>
            <input
              type="text"
              value={form.missionFaire}
              onChange={(e) => handleChange("missionFaire", e.target.value)}
              placeholder="Ce que tu veux faire..."
              className={`w-full px-3 py-2 rounded-lg border bg-white text-brun text-sm placeholder:text-brun/30 ${
                showErrors && !form.missionFaire.trim() ? "border-red-400" : "border-sable"
              }`}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-brun/60 mb-1 block">
              Avoir : <span className="text-terracotta">*</span>
            </label>
            <input
              type="text"
              value={form.missionAvoir}
              onChange={(e) => handleChange("missionAvoir", e.target.value)}
              placeholder="Ce que tu veux avoir..."
              className={`w-full px-3 py-2 rounded-lg border bg-white text-brun text-sm placeholder:text-brun/30 ${
                showErrors && !form.missionAvoir.trim() ? "border-red-400" : "border-sable"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Échelle du Pourquoi */}
      <div className="mb-6">
        <h3 className="font-serif text-xl font-semibold text-brun mb-4">
          Échelle du Pourquoi
        </h3>
        <div className="space-y-6">
          {pourquoiLabels.map((label, i) => (
            <div key={i}>
              <label className="block text-sm font-medium text-brun mb-2">
                {label}
                <span className="text-terracotta ml-1">*</span>
              </label>
              <div className="space-y-2">
                {[0, 1, 2].map((j) => (
                  <input
                    key={j}
                    type="text"
                    value={form[pourquoiFields[i]][j]}
                    onChange={(e) =>
                      handlePourquoi(pourquoiFields[i], j, e.target.value)
                    }
                    placeholder={`Réponse ${j + 1}`}
                    className={`w-full px-3 py-2 rounded-lg border bg-creme text-brun text-sm placeholder:text-brun/30 ${
                      j === 0 && showErrors && !form[pourquoiFields[i]][0].trim()
                        ? "border-red-400"
                        : "border-sable"
                    }`}
                  />
                ))}
              </div>
              {showErrors && !form[pourquoiFields[i]][0].trim() && (
                <p className="text-red-500 text-xs mt-1">Au moins une réponse est requise</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {showErrors && !allFilled && (
        <p className="text-red-500 text-sm mt-4">
          Merci de remplir toutes les questions obligatoires avant de continuer.
        </p>
      )}

      <NavButtons onPrev={onPrev} onNext={handleNext} />
    </div>
  );
}
