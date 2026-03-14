import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ConfirmationPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 pb-12 bg-creme flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 w-full">
          <div className="animate-fade-up">
            <div className="bg-white rounded-3xl border border-sable/40 p-8 sm:p-12 shadow-lg shadow-brun/5 text-center">
              {/* Success icon */}
              <div className="w-16 h-16 bg-sage/15 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brun mb-3">
                Merci&thinsp;!
              </h1>
              <p className="text-brun/50 mb-8 max-w-md mx-auto">
                V&eacute;rifie ta bo&icirc;te mail (et tes spams).
                Tu vas recevoir le PDF + le lien Google Doc dans quelques instants.
              </p>

              <div className="bg-sable/40 rounded-2xl p-6 border border-sable/30 mb-8 text-left">
                <h3 className="font-semibold text-brun text-sm mb-3">
                  Prochaines &eacute;tapes :
                </h3>
                <ol className="space-y-2.5 text-sm text-brun/60">
                  <li className="flex gap-3">
                    <span className="text-terracotta font-bold">1.</span>
                    Ouvre le PDF et lis les consignes
                  </li>
                  <li className="flex gap-3">
                    <span className="text-terracotta font-bold">2.</span>
                    R&eacute;ponds aux 55 questions (30 min)
                  </li>
                  <li className="flex gap-3">
                    <span className="text-terracotta font-bold">3.</span>
                    Colle tes r&eacute;ponses + le prompt dans ChatGPT
                  </li>
                </ol>
              </div>

              <Link
                href="/"
                className="inline-block btn-gradient px-8 py-4 rounded-full font-semibold"
              >
                Retour &agrave; l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
