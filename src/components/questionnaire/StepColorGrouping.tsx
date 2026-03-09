"use client";

import { useState, useMemo } from "react";
import { Partie3Responses, ColorGroup } from "@/lib/types";
import {
  AVAILABLE_COLORS,
  CATEGORY_LABELS,
  VALUE_NAME_SUGGESTIONS,
  KEYWORD_VALUE_MAP,
} from "@/lib/questionnaire-data";
import NavButtons from "./NavButtons";

interface Props {
  partie3?: Partie3Responses;
  existingGroups?: ColorGroup[];
  onNext: (groups: ColorGroup[]) => void;
  onPrev: () => void;
}

interface ItemWithColor {
  text: string;
  source: string;
  colorId: string | null;
}

export default function StepColorGrouping({
  partie3,
  existingGroups,
  onNext,
  onPrev,
}: Props) {
  // Flatten all 39 responses
  const allItems = useMemo(() => {
    if (!partie3) return [];
    const items: { text: string; source: string }[] = [];
    for (let i = 1; i <= 13; i++) {
      const key = `D${i}` as keyof Partie3Responses;
      const answers = partie3[key] as [string, string, string];
      if (answers) {
        answers.forEach((a) => {
          if (a && a.trim()) {
            items.push({ text: a.trim(), source: CATEGORY_LABELS[key] || key });
          }
        });
      }
    }
    return items;
  }, [partie3]);

  // Initialize from existing groups or fresh
  const [items, setItems] = useState<ItemWithColor[]>(() => {
    if (existingGroups && existingGroups.length > 0) {
      return allItems.map((item) => {
        const group = existingGroups.find((g) => g.items.includes(item.text));
        return { ...item, colorId: group?.color || null };
      });
    }
    return allItems.map((item) => ({ ...item, colorId: null }));
  });

  const [groupLabels, setGroupLabels] = useState<Record<string, string>>(() => {
    if (existingGroups) {
      const labels: Record<string, string> = {};
      existingGroups.forEach((g) => {
        labels[g.color] = g.label;
      });
      return labels;
    }
    return {};
  });

  const [selectedColor, setSelectedColor] = useState<string | null>(
    AVAILABLE_COLORS[0].id
  );

  const [showSuggestions, setShowSuggestions] = useState<string | null>(null);
  const [showExamples, setShowExamples] = useState(false);

  const toggleColor = (index: number) => {
    setItems((prev) => {
      const next = [...prev];
      if (next[index].colorId === selectedColor) {
        next[index] = { ...next[index], colorId: null };
      } else {
        next[index] = { ...next[index], colorId: selectedColor };
      }
      return next;
    });
  };

  const usedColors = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => {
      if (item.colorId) set.add(item.colorId);
    });
    return Array.from(set);
  }, [items]);

  const buildGroups = (): ColorGroup[] => {
    return usedColors.map((colorId) => ({
      color: colorId,
      label: groupLabels[colorId] || "",
      items: items.filter((i) => i.colorId === colorId).map((i) => i.text),
    }));
  };

  const hasDuplicateLabels = useMemo(() => {
    const labels = usedColors
      .map((c) => groupLabels[c]?.trim().toLowerCase())
      .filter(Boolean);
    return labels.length !== new Set(labels).size;
  }, [usedColors, groupLabels]);

  const canContinue = usedColors.length >= 2 && usedColors.every((c) => groupLabels[c]?.trim()) && !hasDuplicateLabels;

  const selectSuggestion = (colorId: string, suggestion: string) => {
    setGroupLabels((prev) => ({ ...prev, [colorId]: suggestion }));
    setShowSuggestions(null);
  };

  // Smart suggestions based on grouped answer content
  const getSmartSuggestions = useMemo(() => {
    return (colorId: string): string[] => {
      const groupItems = items.filter((i) => i.colorId === colorId);
      if (groupItems.length === 0) return [];

      const combinedText = groupItems
        .map((i) => i.text)
        .join(" ")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const scores: Record<string, number> = {};

      for (const [pattern, values] of Object.entries(KEYWORD_VALUE_MAP)) {
        const regex = new RegExp(pattern, "i");
        if (regex.test(combinedText)) {
          values.forEach((v) => {
            scores[v] = (scores[v] || 0) + 1;
          });
        }
      }

      // Also boost by source categories
      const sources = groupItems.map((i) => i.source.toLowerCase());
      const sourceBoosts: Record<string, string[]> = {
        "espace": ["Ordre", "Beauté", "Confort"],
        "temps": ["Discipline", "Croissance", "Passion"],
        "énergie": ["Vitalité", "Santé", "Passion"],
        "argent": ["Abondance", "Sécurité financière", "Indépendance financière"],
        "ordre": ["Ordre", "Discipline", "Maîtrise"],
        "discipline": ["Discipline", "Excellence", "Maîtrise"],
        "pensées": ["Apprentissage", "Créativité", "Croissance"],
        "visualisations": ["Créativité", "Ambition", "Vision"],
        "dialogue interne": ["Authenticité", "Croissance", "Sens"],
        "dialogue externe": ["Connexion sociale", "Influence", "Transmission"],
        "inspiration": ["Spiritualité", "Créativité", "Sens"],
        "objectifs": ["Accomplissement", "Excellence", "Leadership"],
        "apprentissage": ["Apprentissage", "Croissance", "Connaissance"],
      };

      sources.forEach((src) => {
        for (const [key, values] of Object.entries(sourceBoosts)) {
          if (src.includes(key)) {
            values.forEach((v) => {
              scores[v] = (scores[v] || 0) + 0.5;
            });
          }
        }
      });

      // Filter out already used labels
      const usedLabels = Object.values(groupLabels).map((l) => l.toLowerCase());

      return Object.entries(scores)
        .filter(([name]) => !usedLabels.includes(name.toLowerCase()))
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([name]) => name);
    };
  }, [items, groupLabels]);

  const EXAMPLES = [
    {
      keywords: "livres, podcasts, formations, comprendre",
      values: "Apprentissage, Croissance, Connaissance",
    },
    {
      keywords: "famille, enfants, moments ensemble, maison",
      values: "Famille, Connexion, Amour",
    },
    {
      keywords: "créer, écrire, dessiner, imaginer",
      values: "Créativité, Expression, Beauté",
    },
    {
      keywords: "argent, investir, épargner, indépendance",
      values: "Abondance, Sécurité financière, Indépendance",
    },
    {
      keywords: "aider, contribuer, transmettre, partager",
      values: "Contribution, Impact, Transmission",
    },
    {
      keywords: "voyager, découvrir, liberté, choix",
      values: "Liberté, Aventure, Autonomie",
    },
    {
      keywords: "sport, santé, énergie, corps",
      values: "Santé, Vitalité, Bien-être",
    },
    {
      keywords: "diriger, entreprendre, décider, influencer",
      values: "Leadership, Pouvoir, Influence",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-sable p-6 sm:p-8">
      <div className="mb-8">
        <p className="text-sm font-medium text-terracotta mb-1">
          Partie 3 (suite) · Regroupement
        </p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brun mb-3">
          Regroupe tes réponses par thème
        </h2>
        <div className="bg-sable-light rounded-xl p-4 border border-sable mb-3">
          <p className="text-sm text-brun/70">
            <strong>Mode d&apos;emploi :</strong> Sélectionne une couleur
            ci-dessous, puis clique sur les réponses qui se ressemblent pour
            les regrouper. Nomme ensuite chaque groupe par ce que tu penses
            être la valeur qui les réunit.
          </p>
        </div>

        {/* Section éducative dépliable */}
        <button
          onClick={() => setShowExamples(!showExamples)}
          className="flex items-center gap-2 text-sm text-terracotta hover:text-terracotta-dark transition-colors font-medium"
        >
          <svg
            className={`w-4 h-4 transition-transform ${showExamples ? "rotate-90" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Comment identifier et nommer tes valeurs ?
        </button>

        {showExamples && (
          <div className="mt-3 bg-creme rounded-xl p-4 border border-sable/50">
            <p className="text-sm text-brun/70 mb-3">
              Regarde les réponses que tu as regroupées sous une même couleur.
              Qu&apos;est-ce qu&apos;elles ont en commun ? Quel thème revient ?
              Ce thème, c&apos;est probablement ta valeur. Voici des exemples :
            </p>
            <div className="space-y-2">
              {EXAMPLES.map((ex, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm"
                >
                  <span className="text-brun/50 italic">
                    {ex.keywords}
                  </span>
                  <span className="text-brun/30 hidden sm:inline">&rarr;</span>
                  <span className="text-terracotta font-medium">
                    {ex.values}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-brun/40 mt-3">
              Ce ne sont que des exemples. Tu peux nommer ta valeur avec tes propres mots.
            </p>
          </div>
        )}
      </div>

      {/* Color palette */}
      <div className="mb-6">
        <p className="text-sm font-medium text-brun mb-2">
          Couleur active :
        </p>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_COLORS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedColor(c.id)}
              className={`w-8 h-8 rounded-full border-2 transition-transform ${
                selectedColor === c.id
                  ? "border-brun scale-110 shadow-md"
                  : "border-transparent hover:scale-105"
              }`}
              style={{ backgroundColor: c.hex }}
              title={c.label}
            />
          ))}
        </div>
      </div>

      {/* Items grid */}
      <div className="mb-8">
        <p className="text-xs text-brun/40 mb-3">
          {items.length} réponses &middot; Clique pour attribuer la couleur
          sélectionnée
        </p>
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => {
            const color = AVAILABLE_COLORS.find((c) => c.id === item.colorId);
            return (
              <button
                key={i}
                onClick={() => toggleColor(i)}
                className="px-3 py-1.5 rounded-lg text-sm border transition-all hover:shadow-sm"
                style={{
                  backgroundColor: color ? `${color.hex}20` : undefined,
                  borderColor: color ? color.hex : "#F5E6D3",
                  color: color ? color.hex : "#3D2B1F",
                }}
                title={`Source : ${item.source}`}
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>

      {/* Group labels */}
      {usedColors.length > 0 && (
        <div className="mb-6">
          <h3 className="font-serif text-lg font-semibold text-brun mb-3">
            Nomme tes valeurs hautes
          </h3>
          <div className="space-y-4">
            {usedColors.map((colorId) => {
              const color = AVAILABLE_COLORS.find((c) => c.id === colorId);
              const count = items.filter((i) => i.colorId === colorId).length;
              const smartSuggs = getSmartSuggestions(colorId);
              return (
                <div key={colorId}>
                  {/* Smart suggestions */}
                  {smartSuggs.length > 0 && (
                    <div className="flex items-center gap-2 mb-1.5 ml-8">
                      <span className="text-xs text-brun/40">Suggestions :</span>
                      <div className="flex flex-wrap gap-1.5">
                        {smartSuggs.map((s) => {
                          const isSelected = groupLabels[colorId]?.trim().toLowerCase() === s.toLowerCase();
                          return (
                            <button
                              key={s}
                              onClick={() => selectSuggestion(colorId, s)}
                              className={`px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors ${
                                isSelected
                                  ? "bg-terracotta text-white"
                                  : "bg-terracotta/10 text-terracotta hover:bg-terracotta/20"
                              }`}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: color?.hex }}
                    />
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={groupLabels[colorId] || ""}
                        onChange={(e) =>
                          setGroupLabels((prev) => ({
                            ...prev,
                            [colorId]: e.target.value,
                          }))
                        }
                        onFocus={() => setShowSuggestions(colorId)}
                        onBlur={() => setTimeout(() => setShowSuggestions(null), 200)}
                        placeholder="Nomme cette valeur haute..."
                        className="w-full px-3 py-2 rounded-lg border border-sable bg-creme text-brun text-sm placeholder:text-brun/30"
                      />
                      {showSuggestions === colorId && (
                        <div className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-sable rounded-lg shadow-lg max-h-40 overflow-y-auto">
                          <p className="text-xs text-brun/40 px-3 py-1.5 border-b border-sable/50">
                            Toutes les suggestions :
                          </p>
                          {VALUE_NAME_SUGGESTIONS.filter(
                            (s) => {
                              const usedByOthers = usedColors
                                .filter((c) => c !== colorId)
                                .some((c) => groupLabels[c]?.trim().toLowerCase() === s.toLowerCase());
                              if (usedByOthers) return false;
                              return !groupLabels[colorId] ||
                                s.toLowerCase().includes(groupLabels[colorId].toLowerCase());
                            }
                          )
                            .slice(0, 10)
                            .map((suggestion) => (
                              <button
                                key={suggestion}
                                onMouseDown={() => selectSuggestion(colorId, suggestion)}
                                className="block w-full text-left px-3 py-1.5 text-sm text-brun hover:bg-sable-light transition-colors"
                              >
                                {suggestion}
                              </button>
                            ))}
                        </div>
                      )}
                    </div>
                    <span className="text-xs text-brun/40 flex-shrink-0">
                      {count} réponse{count > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {!canContinue && usedColors.length > 0 && (
        <div className="mb-4 space-y-1">
          {hasDuplicateLabels && (
            <p className="text-xs text-red-500">
              Deux groupes ne peuvent pas porter le même nom. Renomme l&apos;un des doublons.
            </p>
          )}
          {!hasDuplicateLabels && (
            <p className="text-xs text-terracotta">
              Nomme chaque groupe pour continuer (minimum 2 groupes).
            </p>
          )}
        </div>
      )}

      <NavButtons
        onPrev={onPrev}
        onNext={() => onNext(buildGroups())}
        disableNext={!canContinue}
      />
    </div>
  );
}
