"use client";

import { useState } from "react";
import { Partie3Responses } from "@/lib/types";
import { SECTIONS, CATEGORY_LABELS } from "@/lib/questionnaire-data";
import NavButtons from "./NavButtons";

interface Props {
  data?: Partie3Responses;
  onNext: (data: Partie3Responses) => void;
  onPrev: () => void;
}

const section = SECTIONS[2];

type P3Key = keyof Partie3Responses;

const emptyTriple: [string, string, string] = ["", "", ""];

function makeEmpty(): Partie3Responses {
  const obj: Record<string, [string, string, string]> = {};
  for (let i = 1; i <= 13; i++) {
    obj[`D${i}`] = [...emptyTriple];
  }
  return obj as unknown as Partie3Responses;
}

export default function StepPartie3({ data, onNext, onPrev }: Props) {
  const [form, setForm] = useState<Partie3Responses>(data || makeEmpty());
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (id: P3Key, index: number, value: string) => {
    setForm((prev) => {
      const arr = [...(prev[id] as [string, string, string])] as [string, string, string];
      arr[index] = value;
      return { ...prev, [id]: arr };
    });
  };

  const isQuestionEmpty = (id: P3Key) => {
    const answers = form[id] as [string, string, string];
    return !answers || !answers.some((a) => a && a.trim());
  };

  const allFilled = section.questions.every((q) => !isQuestionEmpty(q.id as P3Key));

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
          const qId = q.id as P3Key;
          const category = CATEGORY_LABELS[q.id] || "";
          const isEmpty = showErrors && isQuestionEmpty(qId);
          return (
            <div key={q.id}>
              <label className="block text-sm font-medium text-brun mb-2">
                <span className="text-terracotta mr-2">{i + 1}.</span>
                <span className="text-brun/40 mr-1">[{category}]</span>
                {q.text}
                <span className="text-terracotta ml-1">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[0, 1, 2].map((idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={(form[qId] as [string, string, string])?.[idx] || ""}
                    onChange={(e) => handleChange(qId, idx, e.target.value)}
                    placeholder={q.placeholders?.[idx] || `Réponse ${idx + 1}`}
                    className={`px-3 py-2.5 rounded-lg border bg-creme text-brun text-sm placeholder:text-brun/30 focus:border-terracotta ${
                      isEmpty ? "border-red-400" : "border-sable"
                    }`}
                  />
                ))}
              </div>
              {isEmpty && (
                <p className="text-red-500 text-xs mt-1">Au moins une réponse est requise</p>
              )}
            </div>
          );
        })}
      </div>

      {showErrors && !allFilled && (
        <p className="text-red-500 text-sm mt-4">
          Merci de remplir au moins une réponse par question avant de continuer.
        </p>
      )}

      <NavButtons onPrev={onPrev} onNext={handleNext} />
    </div>
  );
}
