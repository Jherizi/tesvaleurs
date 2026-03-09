"use client";

import { useState } from "react";
import { Partie1Responses } from "@/lib/types";
import { SECTIONS } from "@/lib/questionnaire-data";
import NavButtons from "./NavButtons";

interface Props {
  data?: Partie1Responses;
  onNext: (data: Partie1Responses) => void;
  onPrev: () => void;
}

const section = SECTIONS[0];

const emptyData: Partie1Responses = {
  B1: "", B2: "", B3: "", B4: "", B5: "", B6: "", B7: "",
};

export default function StepPartie1({ data, onNext, onPrev }: Props) {
  const [form, setForm] = useState<Partie1Responses>(data || emptyData);
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (id: string, value: string) => {
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const isFieldEmpty = (id: string) => {
    const val = form[id as keyof Partie1Responses];
    return !val || !val.trim();
  };

  const allFilled = section.questions.every((q) => !isFieldEmpty(q.id));

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
            <p className="text-sm text-brun/70 italic">{section.consigne}</p>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {section.questions.map((q, i) => {
          const isEmpty = showErrors && isFieldEmpty(q.id);
          return (
            <div key={q.id}>
              <label className="block text-sm font-medium text-brun mb-2">
                <span className="text-terracotta mr-2">{i + 1}.</span>
                {q.text}
                <span className="text-terracotta ml-1">*</span>
              </label>
              <textarea
                value={form[q.id as keyof Partie1Responses] || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                rows={3}
                className={`w-full px-4 py-3 rounded-xl border bg-creme text-brun placeholder:text-brun/30 resize-y min-h-[80px] ${
                  isEmpty ? "border-red-400" : "border-sable"
                }`}
              />
              {isEmpty && (
                <p className="text-red-500 text-xs mt-1">Cette réponse est requise</p>
              )}
            </div>
          );
        })}
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
