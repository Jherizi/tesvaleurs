"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RapportPremiumPage() {
  const handleCheckout = async () => {
    // TODO: Appel POST /api/create-checkout → redirect Stripe
    alert(
      "Intégration Stripe à venir. En mode test, cliquez sur le lien ci-dessous."
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 pb-12 bg-creme">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-terracotta font-medium text-sm mb-2">
              Rapport Premium
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brun mb-3">
              Ton analyse complète par l&apos;IA
            </h1>
            <p className="text-brun/60 max-w-lg mx-auto">
              Découvre tous tes conflits de valeurs, comprends tes
              blocages, et reçois un rapport PDF personnalisé.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-sable p-6 sm:p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-brun mb-6">
              Ce que contient le rapport
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "7 valeurs hautes dans les 7 domaines de vie",
                  desc: "Travail, couple, famille, finances, santé, social, spiritualité. Scores et analyse de chaque valeur.",
                },
                {
                  title: "Tous tes conflits de valeurs",
                  desc: "Chaque tension identifiée, son impact, et comment elle se manifeste dans ta vie.",
                },
                {
                  title: "Tes blocages décryptés",
                  desc: "Chaque projet ou décision bloquée relié aux valeurs en tension. La clé pour comprendre pourquoi tu n'avances pas.",
                },
                {
                  title: "Mécanismes de protection",
                  desc: "Comment l'immobilité protège certaines valeurs au détriment d'autres.",
                },
                {
                  title: "Cohérence mission / valeurs",
                  desc: "Analyse des écarts entre ce que tu déclares et ce que tu vis réellement.",
                },
                {
                  title: "Origine de tes valeurs",
                  desc: "Le lien entre tes vides d'enfance et ta hiérarchie de valeurs actuelle.",
                },
                {
                  title: "\u00c9clairage par ton profil cognitif (MBTI)",
                  desc: "Ton type MBTI influence la fa\u00e7on dont tu vis tes vides et construis tes valeurs. On croise ton profil avec tes r\u00e9ponses pour r\u00e9v\u00e9ler ce qui est attendu, ce qui surprend, et ce que \u00e7a dit de toi.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-terracotta/10 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-terracotta"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brun text-sm">
                      {item.title}
                    </h3>
                    <p className="text-brun/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brun-profond rounded-2xl p-8 text-center text-white">
            <p className="text-3xl font-bold mb-1">29&thinsp;&euro;</p>
            <p className="text-sable/60 text-sm mb-6">
              Paiement unique &middot; PDF envoyé par email
            </p>
            <button
              onClick={handleCheckout}
              className="btn-gradient-premium px-10 py-4 rounded-full text-lg font-semibold inline-block"
            >
              Obtenir mon rapport complet
            </button>
            <p className="text-xs text-sable/40 mt-4">
              Paiement s&eacute;curis&eacute; par Stripe
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/resultats"
              className="text-sm text-brun/40 hover:text-terracotta transition-colors"
            >
              &larr; Retour aux résultats gratuits
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
