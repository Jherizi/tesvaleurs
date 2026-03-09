"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MBTI_TYPES, MBTI_PEDAGOGIE } from "@/lib/mbti-data";
import { saveToStorage } from "@/lib/storage";
import { MBTIType } from "@/lib/types";

export default function ConfirmationPage() {
  const [phase, setPhase] = useState<"mbti" | "generating" | "done">("mbti");
  const [selectedType, setSelectedType] = useState<MBTIType | "">("");

  function handleGenerate(withMBTI: boolean) {
    if (withMBTI && selectedType) {
      saveToStorage({ mbtiType: selectedType as MBTIType });
    }
    setPhase("generating");
    // Simulate report generation
    setTimeout(() => setPhase("done"), 2500);
  }

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 pb-12 bg-creme flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 w-full">

          {/* Phase 1: MBTI Selection */}
          {phase === "mbti" && (
            <div className="animate-fade-up">
              <div className="bg-white rounded-3xl border border-sable/40 p-8 sm:p-12 shadow-lg shadow-brun/5">
                {/* Icon */}
                <div className="w-16 h-16 bg-sage/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brun mb-3 text-center">
                  Derni&egrave;re &eacute;tape avant ton rapport
                </h1>
                <p className="text-brun/50 text-center mb-8 max-w-md mx-auto">
                  Ton type MBTI permet de personnaliser l&apos;analyse de tes vides
                  et de tes valeurs.
                </p>

                {/* Pedagogie box */}
                <div className="bg-sable/40 rounded-2xl p-5 mb-8 border border-sage/10">
                  <div className="flex gap-3">
                    <span className="text-sage text-lg flex-shrink-0 mt-0.5">&#9432;</span>
                    <p className="text-sm text-brun/60 leading-relaxed">
                      {MBTI_PEDAGOGIE}
                    </p>
                  </div>
                </div>

                {/* Select dropdown */}
                <div className="mb-6">
                  <label htmlFor="mbti-select" className="block text-sm font-medium text-brun mb-2">
                    Ton type MBTI
                  </label>
                  <select
                    id="mbti-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as MBTIType)}
                    className="w-full px-4 py-3.5 rounded-xl border border-sable bg-white text-brun focus:outline-2 focus:outline-terracotta focus:outline-offset-2 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">S&eacute;lectionne ton type...</option>
                    {MBTI_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* External link */}
                <p className="text-center mb-8">
                  <a
                    href="https://www.16personalities.com/fr/types-de-personnalite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-sage hover:text-sage-light transition-colors inline-flex items-center gap-1"
                  >
                    Tu ne connais pas ton type ? Fais le test gratuit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </p>

                {/* Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleGenerate(true)}
                    disabled={!selectedType}
                    className="w-full btn-gradient px-6 py-4 rounded-full font-semibold text-lg disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                  >
                    G&eacute;n&eacute;rer mon rapport
                  </button>
                  <button
                    onClick={() => handleGenerate(false)}
                    className="w-full px-6 py-3.5 rounded-full font-medium text-brun/50 border border-sable hover:border-brun/20 hover:text-brun/70 transition-all text-sm"
                  >
                    Je pr&eacute;f&egrave;re ne pas r&eacute;pondre
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Phase 2: Generating */}
          {phase === "generating" && (
            <div className="text-center animate-fade-up">
              <div className="w-16 h-16 mx-auto mb-6">
                <div className="animate-spin w-16 h-16 border-3 border-terracotta border-t-transparent rounded-full" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-brun mb-3">
                Ton rapport est en cours de g&eacute;n&eacute;ration...
              </h2>
              <p className="text-brun/40 text-sm">
                L&apos;IA analyse tes r&eacute;ponses en profondeur
              </p>
            </div>
          )}

          {/* Phase 3: Done */}
          {phase === "done" && (
            <div className="animate-fade-up">
              <div className="bg-white rounded-3xl border border-sable/40 p-8 sm:p-12 shadow-lg shadow-brun/5 text-center">
                {/* Success icon */}
                <div className="w-16 h-16 bg-sage/15 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h1 className="font-serif text-3xl font-bold text-brun mb-3">
                  Merci pour ton achat !
                </h1>
                <p className="text-brun/50 mb-8">
                  Ton rapport complet est en cours de g&eacute;n&eacute;ration.
                  Tu le recevras par email dans quelques minutes.
                </p>

                {/* Next steps */}
                <div className="bg-sable/40 rounded-2xl p-6 border border-sable/30 mb-8 text-left">
                  <h3 className="font-semibold text-brun text-sm mb-3">
                    Prochaines &eacute;tapes :
                  </h3>
                  <ol className="space-y-2.5 text-sm text-brun/60">
                    <li className="flex gap-3">
                      <span className="text-terracotta font-bold">1.</span>
                      V&eacute;rifie ta bo&icirc;te mail (et les spams)
                    </li>
                    <li className="flex gap-3">
                      <span className="text-terracotta font-bold">2.</span>
                      Lis ton rapport tranquillement
                    </li>
                    <li className="flex gap-3">
                      <span className="text-terracotta font-bold">3.</span>
                      D&eacute;couvre comment aller encore plus loin
                    </li>
                  </ol>
                </div>

                {/* CTA Diagnostic LinkedIn */}
                <div className="rounded-2xl p-6 mb-6 text-left" style={{ background: 'linear-gradient(135deg, rgba(242,101,34,0.08), rgba(124,58,237,0.08))' }}>
                  <div className="flex gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sage" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-brun/70 leading-relaxed">
                        Maintenant que tu connais tes valeurs, transforme-les en manifeste,
                        personal branding et offre LinkedIn, que tu sois salari&eacute; ou
                        entrepreneur.
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="block btn-gradient px-5 py-3 rounded-full font-semibold text-sm text-center"
                  >
                    D&eacute;couvrir le Diagnostic LinkedIn &rarr;
                  </a>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <Link
                    href="/resultats"
                    className="block text-sm text-brun/40 hover:text-terracotta transition-colors text-center"
                  >
                    Revoir mes r&eacute;sultats gratuits
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
      <Footer />
    </>
  );
}
