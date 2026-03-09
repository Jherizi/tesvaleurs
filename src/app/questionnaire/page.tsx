"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import StepUserInfo from "@/components/questionnaire/StepUserInfo";
import StepPartie1 from "@/components/questionnaire/StepPartie1";
import StepPartie2 from "@/components/questionnaire/StepPartie2";
import StepPartie3 from "@/components/questionnaire/StepPartie3";
import StepColorGrouping from "@/components/questionnaire/StepColorGrouping";
import StepPartie4 from "@/components/questionnaire/StepPartie4";
import { loadFromStorage, saveToStorage } from "@/lib/storage";
import { QuestionnaireData } from "@/lib/types";

const TOTAL_STEPS = 6;

const STEP_LABELS = [
  "Informations",
  "Blocages",
  "Vides",
  "Valeurs démontrées",
  "Regroupement",
  "Mission",
];

export default function QuestionnairePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<Partial<QuestionnaireData>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = loadFromStorage();
    if (saved && Object.keys(saved).length > 0) {
      setData(saved);
    }
    setIsLoaded(true);
  }, []);

  const updateData = useCallback(
    (partial: Partial<QuestionnaireData>) => {
      setData((prev) => {
        const next = { ...prev, ...partial };
        saveToStorage(next);
        return next;
      });
    },
    []
  );

  const goNext = useCallback(() => {
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goPrev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubmit = useCallback(() => {
    // Auto-génération de la hiérarchie à partir des colorGroups
    const groups = data.colorGroups || [];
    const total = groups.reduce((sum, g) => sum + g.items.length, 0);
    const autoHierarchie = [...groups]
      .sort((a, b) => b.items.length - a.items.length)
      .map((g, i) => ({
        rang: i + 1,
        valeur: g.label,
        score: total > 0 ? Math.round((g.items.length / total) * 100) : 0,
      }));

    const finalData = {
      ...data,
      hierarchie: autoHierarchie,
      completedAt: new Date().toISOString(),
    };
    saveToStorage(finalData);
    router.push("/resultats");
  }, [data, router]);

  if (!isLoaded) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16 bg-creme">
          <div className="animate-pulse text-brun/40 font-serif text-xl">
            Chargement...
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 pb-12 bg-creme">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-brun/50">
                {STEP_LABELS[currentStep]}
              </span>
              <span className="text-sm text-brun/40">
                {currentStep + 1} / {TOTAL_STEPS}
              </span>
            </div>
            <div className="w-full bg-sable rounded-full h-2">
              <div
                className="bg-terracotta h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${((currentStep + 1) / TOTAL_STEPS) * 100}%`,
                }}
              />
            </div>
            {/* Step dots */}
            <div className="flex justify-between mt-3">
              {STEP_LABELS.map((label, i) => (
                <button
                  key={label}
                  onClick={() => {
                    if (i <= currentStep) setCurrentStep(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentStep
                      ? "bg-terracotta scale-125"
                      : i < currentStep
                      ? "bg-terracotta/50 cursor-pointer"
                      : "bg-sable"
                  }`}
                  aria-label={label}
                  disabled={i > currentStep}
                />
              ))}
            </div>
          </div>

          {/* Steps */}
          {currentStep === 0 && (
            <StepUserInfo
              data={data.userInfo}
              onNext={(info) => {
                updateData({ userInfo: info });
                goNext();
              }}
            />
          )}

          {currentStep === 1 && (
            <StepPartie1
              data={data.partie1}
              onNext={(p1) => {
                updateData({ partie1: p1 });
                goNext();
              }}
              onPrev={goPrev}
            />
          )}

          {currentStep === 2 && (
            <StepPartie2
              data={data.partie2}
              onNext={(p2) => {
                updateData({ partie2: p2 });
                goNext();
              }}
              onPrev={goPrev}
            />
          )}

          {currentStep === 3 && (
            <StepPartie3
              data={data.partie3}
              onNext={(p3) => {
                updateData({ partie3: p3 });
                goNext();
              }}
              onPrev={goPrev}
            />
          )}

          {currentStep === 4 && (
            <StepColorGrouping
              partie3={data.partie3}
              existingGroups={data.colorGroups}
              onNext={(groups) => {
                updateData({ colorGroups: groups });
                goNext();
              }}
              onPrev={goPrev}
            />
          )}

          {currentStep === 5 && (
            <StepPartie4
              data={data.partie4}
              prenom={data.userInfo?.prenom || ""}
              valeurNames={data.colorGroups?.map((g) => g.label).filter(Boolean) || []}
              onNext={(p4) => {
                updateData({ partie4: p4 });
                handleSubmit();
              }}
              onPrev={goPrev}
            />
          )}

        </div>
      </div>
    </>
  );
}
