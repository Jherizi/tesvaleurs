import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmailCaptureForm from "@/components/EmailCaptureForm";

export default function Home() {
  return (
    <>
      <Header />

      {/* BLOC 1 — Hero + Formulaire de capture */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-creme via-sable-light to-creme mesh-gradient" />
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-terracotta/8 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-sage/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <p className="animate-fade-up inline-block text-xs font-semibold tracking-widest uppercase text-terracotta bg-terracotta/10 px-4 py-1.5 rounded-full mb-8">
            55 questions &middot; Un prompt IA &middot; 30 minutes
          </p>

          <h1 className="animate-fade-up font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-brun leading-[1.1] mb-6" style={{ animationDelay: "0.1s" }}>
            Identifie tes valeurs{" "}
            <span className="text-gradient">hautes</span>
          </h1>

          <p className="animate-fade-up text-lg sm:text-xl text-brun/60 max-w-xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Pour voir ce qui organise vraiment ta vie &mdash;
            pas ce que tu aimerais, ce que tu fais d&eacute;j&agrave;.
          </p>

          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <EmailCaptureForm id="formulaire" />
          </div>
        </div>
      </section>

      {/* BLOC 2 — Tu te sens bloqué·e ? */}
      <section className="py-24 bg-creme relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-5">
              Tu te sens bloqu&eacute;&middot;e&thinsp;?
            </h2>
            <p className="text-brun/50 text-lg max-w-lg mx-auto">
              Ce n&apos;est pas un manque de motivation.
              C&apos;est un conflit de valeurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                emoji: "?",
                title: "Tu repousses une d\u00e9cision",
                text: "Tu sais ce que tu veux mais quelque chose te retient. Le blocage n\u2019est pas de la peur, c\u2019est un conflit entre deux choses qui comptent.",
                accent: "terracotta",
              },
              {
                emoji: "\u21BB",
                title: "Tu tournes en rond",
                text: "Tu avances, tu recules, tu h\u00e9sites. Chaque option semble te faire perdre quelque chose d\u2019important.",
                accent: "sage",
              },
              {
                emoji: "\u2734",
                title: "Tu veux de la clart\u00e9",
                text: "Pas des conseils g\u00e9n\u00e9riques. Une lecture pr\u00e9cise de ce qui te guide et de ce qui te freine.",
                accent: "brun",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-3xl p-7 border border-sable/60 hover-lift"
              >
                <div className={`text-3xl mb-4 w-14 h-14 rounded-2xl flex items-center justify-center ${
                  card.accent === "terracotta" ? "bg-terracotta/10" :
                  card.accent === "sage" ? "bg-sage/10" : "bg-sable"
                }`}>
                  <span>{card.emoji}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-brun mb-2">
                  {card.title}
                </h3>
                <p className="text-brun/50 text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC 3 — 3 étapes */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sable-light via-sable-light to-creme" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-5">
              3 &eacute;tapes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "T\u00e9l\u00e9charge",
                desc: "Laisse ton mail et re\u00e7ois le PDF : 55 questions, les consignes, et le prompt IA pr\u00eat \u00e0 coller.",
              },
              {
                step: "02",
                title: "R\u00e9ponds",
                desc: "Prends 30 minutes au calme. R\u00e9ponds spontan\u00e9ment \u2014 la premi\u00e8re chose qui vient, sans corriger.",
              },
              {
                step: "03",
                title: "D\u00e9couvre",
                desc: "Colle tes r\u00e9ponses + le prompt dans ChatGPT (ou Gemini). L\u2019IA te renvoie tes valeurs hautes, tes conflits, et un regard sur tes projets.",
              },
            ].map((item, i) => (
              <div key={i} className="relative text-center">
                <div className="inline-flex w-16 h-16 bg-brun-profond rounded-2xl items-center justify-center mb-5">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-brun mb-2">
                  {item.title}
                </h3>
                <p className="text-brun/50 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC 4 — Ce que tu vas obtenir */}
      <section className="py-24 bg-creme">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-5">
              Ce que tu vas obtenir
            </h2>
          </div>

          <ul className="space-y-4 text-brun/70 mb-12 max-w-xl mx-auto">
            {[
              "Tes 3 \u00e0 7 valeurs hautes class\u00e9es par ordre r\u00e9el d\u2019importance",
              "Les conflits entre tes valeurs \u2014 pourquoi tu bloques",
              "Ce que tes blocages prot\u00e8gent vraiment",
              "Un regard clair sur tes projets en cours : OUI / PAS MAINTENANT / NON",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          {/* Aperçu de 4 questions */}
          <div className="bg-sable/40 rounded-2xl p-6 sm:p-8 border border-sable/30">
            <p className="text-xs font-semibold tracking-widest uppercase text-terracotta mb-5">
              Aper&ccedil;u du questionnaire
            </p>
            <div className="space-y-4">
              {[
                "Quand tu es libre, \u00e0 quoi vas-tu spontan\u00e9ment sans te forcer ?",
                "Qu\u2019est-ce qui te met r\u00e9ellement en col\u00e8re, pas juste agac\u00e9\u00b7e ?",
                "Quelle valeur est prot\u00e9g\u00e9e par le fait de ne pas bouger ?",
                "Quel projet ou d\u00e9cision repousses-tu en ce moment ?",
              ].map((q, i) => (
                <p key={i} className="text-sm italic text-brun/60 leading-relaxed pl-4 border-l-2 border-terracotta/30">
                  &laquo;&thinsp;{q}&thinsp;&raquo;
                </p>
              ))}
            </div>
            <p className="text-center text-sm text-brun/40 mt-6">
              55 questions au total. Tu re&ccedil;ois tout par mail.
            </p>
          </div>
        </div>
      </section>

      {/* BLOC 5 — Verbatims */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sable-light via-sable-light to-creme" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-5">
              Ce que les gens disent apr&egrave;s l&apos;avoir fait
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Ton questionnaire est profond, tu touches le noyau dur de notre personne mais aussi les angles morts.",
              "Les questions sont puissantes, la v\u00e9rit\u00e9 m\u2019est apparue en mots sur le papier. \u00c7a pique, je sais o\u00f9 \u00e7a bloque maintenant.",
              "\u00c7a m\u2019a permis de voir 2 valeurs hautes en conflit.",
              "L\u2019exercice IA est bluffant.",
              "Dingo la partie sur le conflit de valeurs. Vraiment.",
              "L\u2019audio sur les valeurs m\u2019a boulevers\u00e9. Je me rends compte de leurs impacts et leurs importance dans ma vie.",
            ].map((quote, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-sable/40">
                <span className="text-3xl text-terracotta/30 font-serif leading-none">&ldquo;</span>
                <p className="text-sm italic text-brun/70 leading-relaxed mt-1">
                  {quote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOC 6 — 2ème formulaire */}
      <section className="py-24 bg-creme">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-4">
            Pr&ecirc;t&middot;e &agrave; d&eacute;couvrir tes valeurs&thinsp;?
          </h2>
          <p className="text-brun/50 text-lg mb-10">
            Re&ccedil;ois l&apos;outil gratuitement par mail.
          </p>
          <EmailCaptureForm />
        </div>
      </section>

      {/* BLOC 7 — Espace 7% */}
      <section className="py-20 bg-brun-profond text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-terracotta/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sage/10 rounded-full blur-2xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-6">
            Aller plus loin
          </h2>
          <p className="text-sable/60 leading-relaxed mb-4 max-w-xl mx-auto">
            Ce PDF est issu de la Travers&eacute;e IA &mdash; Espace 7%.
            Dans la plateforme, on travaille sur comment concilier tes valeurs quand elles entrent en conflit,
            desserrer tes blocages et agir sans te trahir.
          </p>
          <p className="text-sable/40 text-sm mb-10 max-w-xl mx-auto">
            C&apos;est un espace de r&eacute;gulation psychique guid&eacute;e.
            Pas du coaching. Pas du dev perso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://tally.so/r/Y5WyEB"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-orange px-8 py-4 rounded-full font-semibold"
            >
              Rejoindre la liste d&apos;attente
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-sable/40 text-sm mb-2">
              Je partage chaque semaine sur les valeurs, les blocages et la r&eacute;gulation.
            </p>
            <a
              href="https://jihaneherizi.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-terracotta-light hover:text-terracotta transition-colors"
            >
              Lire la newsletter &rarr;
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
