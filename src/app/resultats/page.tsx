"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DonutChart, { COLORS } from "@/components/DonutChart";
import { loadFromStorage } from "@/lib/storage";
import { QuestionnaireData, AnalyseGratuite, ValeurClassee } from "@/lib/types";
import { MOCK_ANALYSE_GRATUITE } from "@/lib/mock-data";

export default function ResultatsPage() {
  const [data, setData] = useState<Partial<QuestionnaireData> | null>(null);
  const [analyse, setAnalyse] = useState<AnalyseGratuite | null>(null);
  const [hierarchie, setHierarchie] = useState<ValeurClassee[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const saved = loadFromStorage();
    setData(saved);

    const completed = !!(saved.completedAt && saved.hierarchie && saved.hierarchie.length > 0);
    setHasCompleted(completed);

    if (completed && saved.hierarchie) {
      // Trier par score décroissant et réassigner les rangs
      const sorted = [...saved.hierarchie]
        .sort((a, b) => b.score - a.score)
        .map((v, i) => ({ ...v, rang: i + 1 }));
      setHierarchie(sorted);
    }

    const timer = setTimeout(() => {
      if (completed) {
        setAnalyse(MOCK_ANALYSE_GRATUITE);
      }
      setLoading(false);
    }, completed ? 1500 : 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center pt-16 bg-creme">
          <div className="animate-spin w-10 h-10 border-3 border-terracotta border-t-transparent rounded-full mb-4" />
          <p className="text-brun/60 font-serif text-xl">
            {hasCompleted ? "Analyse en cours..." : "Chargement..."}
          </p>
          {hasCompleted && (
            <p className="text-brun/40 text-sm mt-2">
              L&apos;IA personnalise tes r&eacute;sultats
            </p>
          )}
        </div>
      </>
    );
  }

  if (!hasCompleted) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-20 pb-12 bg-creme flex items-center justify-center">
          <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
            <div className="bg-white rounded-3xl border border-sable/40 p-10 sm:p-14 shadow-xl shadow-brun/5">
              <div className="w-16 h-16 bg-sable rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h1 className="font-serif text-3xl font-bold text-brun mb-4">
                Tes r&eacute;sultats ne sont pas encore pr&ecirc;ts
              </h1>
              <p className="text-brun/50 mb-8 leading-relaxed">
                Compl&egrave;te le questionnaire pour obtenir ton analyse personnalis&eacute;e
                et ta hi&eacute;rarchie de valeurs.
              </p>
              <Link
                href="/questionnaire"
                className="inline-block btn-orange px-8 py-4 rounded-full text-lg font-semibold"
              >
                Commencer le questionnaire
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const prenom = data?.userInfo?.prenom || "Cher utilisateur";

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 pb-12 bg-creme relative">
        {/* Subtle background orbs */}
        <div className="absolute top-40 left-[5%] w-60 h-60 bg-terracotta/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-[5%] w-80 h-80 bg-sage/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-14 animate-fade-up">
            <p className="inline-block text-xs font-semibold tracking-widest uppercase text-terracotta bg-terracotta/10 px-4 py-1.5 rounded-full mb-6">
              Tes r&eacute;sultats
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-4">
              {prenom}, voici tes valeurs
            </h1>
            <p className="text-brun/50">
              Analyse g&eacute;n&eacute;r&eacute;e &agrave; partir de tes r&eacute;ponses
            </p>
          </div>

          {/* Hi&eacute;rarchie visuelle */}
          <section className="bg-white/80 backdrop-blur-sm rounded-3xl border border-sable/40 p-7 sm:p-9 mb-6 shadow-lg shadow-brun/5 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-2xl font-bold text-brun">
                Ta hi&eacute;rarchie de valeurs
              </h2>
              <span className="text-xs font-semibold tracking-wide uppercase bg-sage/10 text-sage px-3 py-1.5 rounded-full">
                4 / 7 valeurs
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <DonutChart valeurs={hierarchie} />
              </div>
              <div className="flex-1 w-full">
                <div className="space-y-4">
                  {hierarchie.map((v) => (
                      <div
                        key={v.valeur}
                        className="bg-creme/60 rounded-2xl p-4 sm:p-5"
                      >
                        <div className="flex items-start gap-4">
                          <span
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 border"
                            style={{ color: COLORS[(v.rang - 1) % COLORS.length], borderColor: COLORS[(v.rang - 1) % COLORS.length] + "30", backgroundColor: COLORS[(v.rang - 1) % COLORS.length] + "12" }}
                          >
                            {v.rang}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-3 mb-1">
                              <p className="font-semibold text-brun">
                                {v.valeur}
                              </p>
                              <span className="text-sm font-bold text-terracotta flex-shrink-0">
                                {v.score}%
                              </span>
                            </div>
                            <div className="w-full bg-sable rounded-full h-2 mb-2">
                              <div
                                className="h-2 rounded-full transition-all duration-700"
                                style={{
                                  width: `${v.score}%`,
                                  background: "linear-gradient(90deg, #F26522, #7C3AED)",
                                }}
                              />
                            </div>
                            {v.description && (
                              <p className="text-xs text-brun/45 leading-relaxed">
                                {v.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mini-analyse IA */}
          {analyse && (
            <>
              <section className="bg-white/80 backdrop-blur-sm rounded-3xl border border-sable/40 p-7 sm:p-9 mb-6 shadow-lg shadow-brun/5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
                <h2 className="font-serif text-2xl font-bold text-brun mb-5">
                  Ce que tes r&eacute;ponses r&eacute;v&egrave;lent
                </h2>
                <div className="space-y-4 text-brun/70 leading-relaxed">
                  {analyse.mini_analyse.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Conflit principal */}
              <section className="bg-white/80 backdrop-blur-sm rounded-3xl border border-sable/40 p-7 sm:p-9 mb-6 shadow-lg shadow-brun/5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <h2 className="font-serif text-2xl font-bold text-brun mb-5">
                  Ton conflit principal
                </h2>
                <div className="bg-creme/60 rounded-2xl p-6">
                  <div className="flex items-center justify-center gap-4 mb-5">
                    <span className="bg-brun-profond text-white px-5 py-2.5 rounded-full text-sm font-medium">
                      {analyse.conflit_principal.valeur_a}
                    </span>
                    <span className="text-brun/20 text-xl font-light">&harr;</span>
                    <span className="bg-sage text-white px-5 py-2.5 rounded-full text-sm font-medium">
                      {analyse.conflit_principal.valeur_b}
                    </span>
                  </div>
                  <div className="space-y-3 text-brun/60 text-sm text-center leading-relaxed max-w-lg mx-auto">
                    {analyse.conflit_principal.phrase.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* Lien vides valeurs */}
              <section className="bg-white/80 backdrop-blur-sm rounded-3xl border border-sable/40 p-7 sm:p-9 mb-6 shadow-lg shadow-brun/5 animate-fade-up" style={{ animationDelay: "0.25s" }}>
                <h2 className="font-serif text-2xl font-bold text-brun mb-5">
                  Tes vides ont fa&ccedil;onn&eacute; tes valeurs
                </h2>
                <div className="space-y-3 text-brun/60 leading-relaxed">
                  {analyse.lien_vides_valeurs.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Bridge to premium */}
              <section className="relative rounded-3xl p-7 sm:p-9 mb-6 overflow-hidden animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-sable-light to-white border border-terracotta/15 rounded-3xl" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-terracotta/8 rounded-full blur-2xl" />
                <div className="relative">
                  <h2 className="font-serif text-2xl font-bold text-brun mb-5 text-center">
                    Ce que cette analyse ne peut pas encore te dire
                  </h2>
                  <div className="space-y-4 text-brun/60 leading-relaxed max-w-2xl mx-auto">
                    <p>
                      Ce que tu vois ici n&apos;est qu&apos;une partie du tableau. Ton blocage
                      n&apos;est pas un manque de courage. C&apos;est un conflit entre deux
                      valeurs incompatibles dans l&apos;instant. Ton syst&egrave;me ne choisit pas : il freine.
                    </p>
                    <p>
                      La sortie n&apos;est pas de choisir A ou B. Le vrai d&eacute;placement est ailleurs.
                    </p>
                    <p className="font-medium text-brun text-center">
                      Dans le rapport premium, tu d&eacute;couvriras les 4 mani&egrave;res dont
                      le &laquo;&thinsp;ET&thinsp;&raquo; devient possible.
                    </p>
                  </div>
                </div>
              </section>

              {/* Teaser Premium */}
              <section className="relative bg-brun-profond rounded-3xl p-7 sm:p-10 mb-6 text-white overflow-hidden glow-terracotta animate-fade-up" style={{ animationDelay: "0.35s" }}>
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-terracotta/15 rounded-full blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sage/10 rounded-full blur-2xl" />

                <div className="relative text-center">
                  <h2 className="font-serif text-3xl font-bold mb-3">
                    Tes blocages ont une explication.
                  </h2>
                  <p className="text-sable/50 text-sm mb-8 max-w-md mx-auto">
                    Comprendre tes valeurs, c&apos;est bien. Comprendre pourquoi
                    elles te bloquent, c&apos;est ce qui change tout.
                  </p>
                  <p className="text-sable/60 mb-8 max-w-lg mx-auto">
                    Nous avons identifi&eacute;{" "}
                    <strong className="text-terracotta-light">
                      {analyse.nombre_conflits_supplementaires + 1} conflits de valeurs
                    </strong>{" "}
                    et d&eacute;crypt&eacute;{" "}
                    <strong className="text-terracotta-light">
                      {analyse.nombre_blocages_identifies} blocages concrets
                    </strong>{" "}
                    dans tes r&eacute;ponses.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-10 text-left">
                    {[
                      "7 valeurs hautes dans les 7 domaines de vie",
                      "TOUS tes conflits de valeurs d\u00e9taill\u00e9s",
                      "Les 4 mani\u00e8res dont le ET devient possible",
                      "Ce que tes blocages prot\u00e8gent",
                      "Strat\u00e9gies inconscientes de ton cerveau",
                      "Coh\u00e9rence mission / valeurs r\u00e9elles",
                      "\u00c9clairage par ton profil cognitif (MBTI)",
                      "Rapport PDF complet par email",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-sable/70">
                        <svg className="w-4 h-4 text-terracotta-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/rapport-premium"
                    className="inline-block btn-gradient-premium px-10 py-5 rounded-full text-lg font-semibold"
                  >
                    Obtenir mon rapport complet pour 29&thinsp;&euro;
                  </Link>
                </div>
              </section>

            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
