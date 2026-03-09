"use client";

import { useState, useMemo } from "react";
import { ColorGroup, ValeurClassee } from "@/lib/types";
import NavButtons from "./NavButtons";

interface Props {
  colorGroups: ColorGroup[];
  existingHierarchie?: ValeurClassee[];
  onSubmit: (hierarchie: ValeurClassee[]) => void;
  onPrev: () => void;
}

export default function StepPartie5({
  colorGroups,
  existingHierarchie,
  onSubmit,
  onPrev,
}: Props) {
  const initialHierarchie = useMemo(() => {
    if (existingHierarchie && existingHierarchie.length > 0) {
      return existingHierarchie;
    }
    // Build from color groups, sorted by count of items
    const total = colorGroups.reduce((sum, g) => sum + g.items.length, 0);
    return colorGroups
      .sort((a, b) => b.items.length - a.items.length)
      .map((g, i) => ({
        rang: i + 1,
        valeur: g.label,
        score: total > 0 ? Math.round((g.items.length / total) * 100) : 0,
      }));
  }, [colorGroups, existingHierarchie]);

  const [hierarchie, setHierarchie] = useState<ValeurClassee[]>(initialHierarchie);

  const moveUp = (index: number) => {
    if (index === 0) return;
    setHierarchie((prev) => {
      const next = [...prev];
      [next[index - 1], next[index]] = [next[index], next[index - 1]];
      return next.map((v, i) => ({ ...v, rang: i + 1 }));
    });
  };

  const moveDown = (index: number) => {
    if (index === hierarchie.length - 1) return;
    setHierarchie((prev) => {
      const next = [...prev];
      [next[index], next[index + 1]] = [next[index + 1], next[index]];
      return next.map((v, i) => ({ ...v, rang: i + 1 }));
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-sable p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-terracotta mb-1">
          Partie 5 sur 5
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brun mb-3">
          Hiérarchie de tes valeurs
        </h2>
        <div className="bg-sable-light rounded-xl p-4 border border-sable">
          <p className="text-sm text-brun/70">
            Voici tes valeurs classées par fréquence. Tu peux
            réordonner manuellement si tu sens qu&apos;une valeur devrait
            être plus haute ou plus basse.
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {hierarchie.map((v, i) => (
          <div
            key={v.valeur}
            className="flex items-center gap-3 bg-creme rounded-xl p-4 border border-sable"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-terracotta rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">{v.rang}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-serif font-semibold text-brun text-lg truncate">
                {v.valeur}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-sable rounded-full h-2 max-w-[200px]">
                  <div
                    className="bg-terracotta h-2 rounded-full transition-all"
                    style={{ width: `${v.score}%` }}
                  />
                </div>
                <span className="text-xs text-brun/50">{v.score}%</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => moveUp(i)}
                disabled={i === 0}
                className="p-1 text-brun/40 hover:text-terracotta disabled:opacity-20 transition-colors"
                aria-label="Monter"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={() => moveDown(i)}
                disabled={i === hierarchie.length - 1}
                className="p-1 text-brun/40 hover:text-terracotta disabled:opacity-20 transition-colors"
                aria-label="Descendre"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Citation */}
      <div className="bg-sable-light rounded-xl p-5 border border-sable mb-6 text-center">
        <p className="font-serif text-lg text-brun italic">
          &laquo;&thinsp;Tes vides n&apos;ont jamais été des failles.
          Ils étaient les murmures de ton destin.&thinsp;&raquo;
        </p>
      </div>

      <NavButtons
        onPrev={onPrev}
        onNext={() => onSubmit(hierarchie)}
        nextLabel="Voir mes résultats"
      />
    </div>
  );
}
