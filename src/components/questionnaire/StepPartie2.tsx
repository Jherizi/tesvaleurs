"use client";

import { useState } from "react";
import { Partie2Responses } from "@/lib/types";
import { SECTIONS } from "@/lib/questionnaire-data";
import NavButtons from "./NavButtons";

interface Props {
  data?: Partie2Responses;
  onNext: (data: Partie2Responses) => void;
  onPrev: () => void;
}

const section = SECTIONS[1];

const emptyData: Partie2Responses = {
  V1_spirituel: "", V1_mental: "", V1_professionnel: "", V1_financier: "",
  V1_familial: "", V1_social: "", V1_physique: "",
  V2: "", V3: "", V4: "", V5: "", V6: "", V7: "",
  "videsPerçus": "",
};

export default function StepPartie2({ data, onNext, onPrev }: Props) {
  const [form, setForm] = useState<Partie2Responses>(data || emptyData);
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const isFieldEmpty = (id: string) => {
    const val = form[id as keyof Partie2Responses] as string;
    return !val || !val.trim();
  };

  const allFilled = section.questions.every(
    (q) => !isFieldEmpty(q.id)
  ) && form.videsPerçus.trim().length > 0;

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
            <p className="text-sm text-brun/70 italic">&laquo;&thinsp;{section.consigne}&thinsp;&raquo;</p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* V1 domain questions with special header */}
        <div className="bg-sable-light/50 rounded-xl p-4 border border-sable/50 mb-2">
          <p className="text-sm font-medium text-brun mb-1">
            Qu&apos;est-ce qui te manquait le plus en grandissant ?
          </p>
          <p className="text-xs text-brun/50">
            Réponds pour chaque domaine de vie ci-dessous.
          </p>
        </div>

        {section.questions.map((q, i) => {
          const isEmpty = showErrors && isFieldEmpty(q.id);
          const isV1Domain = q.id.startsWith("V1_");
          return (
            <div key={q.id}>
              <label className="block text-sm font-medium text-brun mb-2">
                <span className="text-terracotta mr-2">{i + 1}.</span>
                {q.text}
                <span className="text-terracotta ml-1">*</span>
              </label>
              <textarea
                value={form[q.id as keyof Partie2Responses] as string || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                rows={isV1Domain ? 2 : 3}
                className={`w-full px-4 py-3 rounded-xl border bg-creme text-brun placeholder:text-brun/30 resize-y min-h-[60px] ${
                  isEmpty ? "border-red-400" : "border-sable"
                }`}
              />
              {isEmpty && (
                <p className="text-red-500 text-xs mt-1">Cette réponse est requise</p>
              )}
            </div>
          );
        })}

        {/* Champ libre fin de partie 2 */}
        <div className="bg-sable-light rounded-xl p-5 border border-sable">
          <label className="block text-sm font-semibold text-brun mb-2">
            {section.afterQuestions} <span className="text-terracotta">*</span>
          </label>
          <p className="text-xs text-brun/50 mb-3">
            En te basant sur tes réponses ci-dessus, note les 3 à 7 vides qui te semblent les plus importants.
          </p>
          <textarea
            value={form.videsPerçus}
            onChange={(e) => handleChange("videsPerçus", e.target.value)}
            placeholder="Ex: Manque de reconnaissance, manque de liberté, manque de sécurité financière..."
            rows={3}
            className={`w-full px-4 py-3 rounded-xl border bg-white text-brun placeholder:text-brun/30 resize-y ${
              showErrors && !form.videsPerçus.trim() ? "border-red-400" : "border-sable"
            }`}
          />
          {showErrors && !form.videsPerçus.trim() && (
            <p className="text-red-500 text-xs mt-1">Cette réponse est requise</p>
          )}
        </div>
      </div>

      {showErrors && !allFilled && (
        <p className="text-red-500 text-sm mt-4">
          Merci de remplir toutes les questions avant de continuer.
        </p>
      )}

      <NavButtons onPrev={onPrev} onNext={handleNext} />
    </div>
  );
}
