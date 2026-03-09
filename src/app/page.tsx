import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MOCK_HIERARCHIE } from "@/lib/mock-data";
import { COLORS } from "@/components/DonutChart";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero — full bleed with decorative orbs */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-creme via-sable-light to-creme mesh-gradient" />
        {/* Decorative orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-terracotta/8 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-sage/8 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="animate-fade-up">
            <p className="inline-block text-xs font-semibold tracking-widest uppercase text-terracotta bg-terracotta/10 px-4 py-1.5 rounded-full mb-8">
              Questionnaire gratuit &middot; 20 min &middot; R&eacute;sultats imm&eacute;diats
            </p>
          </div>

          <h1 className="animate-fade-up font-serif text-6xl sm:text-7xl md:text-8xl font-bold text-brun leading-[1.1] mb-8" style={{ animationDelay: "0.1s" }}>
            D&eacute;couvre tes valeurs<br />
            <span className="text-gradient">r&eacute;elles</span>
          </h1>

          <p className="animate-fade-up text-lg sm:text-xl text-brun/60 max-w-xl mx-auto mb-12 leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Pas celles que tu crois. Celles qui guident vraiment tes choix,
            tes blocages et tes d&eacute;cisions.
          </p>

          <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              href="/questionnaire"
              className="inline-block btn-orange px-10 py-5 rounded-full text-lg font-semibold"
            >
              Commencer le questionnaire
            </Link>
          </div>

          {/* Trust row */}
          <div className="animate-fade-up mt-16 flex flex-wrap justify-center gap-6 sm:gap-10" style={{ animationDelay: "0.4s" }}>
            {[
              { label: "57 questions", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Donn\u00e9es s\u00e9curis\u00e9es", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              { label: "Analyse IA", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-brun/40">
                <svg className="w-4 h-4 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={t.icon} />
                </svg>
                <span>{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le probl&egrave;me — bold asymmetric */}
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

      {/* Comprendre tes valeurs — modern accordion-style */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sable-light via-sable-light to-creme" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-5">
              Comprendre tes valeurs
            </h2>
            <p className="text-brun/50 text-lg max-w-lg mx-auto">
              Tes valeurs ne sont pas ce que tu devrais valoriser.
              Elles sont ce que tu vis d&eacute;j&agrave;.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                tag: "Concept cl\u00e9",
                tagColor: "terracotta",
                title: "Valeurs morales vs factuelles",
                text: "Les valeurs morales viennent de l\u2019ext\u00e9rieur. Tes valeurs hautes factuelles se mesurent dans tes actions : o\u00f9 tu investis ton temps, ce que tu accumules, sur quoi tu d\u00e9penses ton argent.",
              },
              {
                tag: "Le m\u00e9canisme",
                tagColor: "sage",
                title: "Qu\u2019est-ce qu\u2019un \u00ab\u2009vide\u2009\u00bb\u2009?",
                text: "Ce qui te manquait le plus en grandissant s\u2019imprime dans ton syst\u00e8me de valeurs. Ce que tu n\u2019as pas eu, tu passes ta vie \u00e0 le poursuivre avec la plus grande intensit\u00e9.",
              },
              {
                tag: "Important",
                tagColor: "brun",
                title: "Tes valeurs basses ne sont pas mauvaises",
                text: "Quand tu te fixes un objectif align\u00e9 sur une valeur basse, tu procrastines. Quand tu alignes tes objectifs sur tes valeurs hautes, tu avances naturellement.",
              },
              {
                tag: "Le d\u00e9clic",
                tagColor: "terracotta",
                title: "Pourquoi identifier tes valeurs\u2009?",
                text: "La plupart des blocages viennent d\u2019un conflit entre deux valeurs hautes. Identifier ta hi\u00e9rarchie te permet de comprendre pourquoi tu fais ce que tu fais.",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-3xl p-7 border border-sable/40 hover-lift">
                <span className={`inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4 ${
                  card.tagColor === "terracotta" ? "bg-terracotta/10 text-terracotta" :
                  card.tagColor === "sage" ? "bg-sage/10 text-sage" :
                  "bg-sable text-brun/60"
                }`}>
                  {card.tag}
                </span>
                <h3 className="font-serif text-xl font-bold text-brun mb-3">
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

      {/* Comment &ccedil;a marche — horizontal timeline */}
      <section id="comment-ca-marche" className="py-24 bg-creme">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-5">
              3 &eacute;tapes
            </h2>
            <p className="text-brun/50 text-lg">
              Un parcours guid&eacute; pour d&eacute;couvrir tes valeurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "R\u00e9ponds",
                desc: "57 questions pour explorer tes comportements r\u00e9els. Pas de bonnes ou mauvaises r\u00e9ponses.",
              },
              {
                step: "02",
                title: "Regroupe",
                desc: "Identifie les th\u00e8mes r\u00e9currents dans tes r\u00e9ponses. Nomme tes valeurs hautes.",
              },
              {
                step: "03",
                title: "D\u00e9couvre",
                desc: "L\u2019IA g\u00e9n\u00e8re ton profil personnalis\u00e9 : hi\u00e9rarchie, conflits identifi\u00e9s, liens avec tes vides.",
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

          <div className="text-center mt-14">
            <Link
              href="/questionnaire"
              className="inline-block btn-gradient px-10 py-5 rounded-full text-lg font-semibold"
            >
              Commencer le questionnaire
            </Link>
          </div>
        </div>
      </section>

      {/* Aper&ccedil;u rapport — glass card with gradient */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sable-light to-creme" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-terracotta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-5">
              Aper&ccedil;u de ton rapport
            </h2>
            <p className="text-brun/50 text-lg">
              Voici ce que tu recevras
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-sable/40 overflow-hidden shadow-xl shadow-brun/5">
            {/* Gratuit — 4/7 valeurs */}
            <div className="p-7 sm:p-9 border-b border-sable/30">
              <span className="inline-block text-xs font-semibold tracking-wide uppercase bg-sage/10 text-sage px-3 py-1.5 rounded-full mb-4">
                4 / 7 valeurs hautes
              </span>
              <h3 className="font-serif text-2xl font-bold text-brun mb-2">
                Ta hi&eacute;rarchie de valeurs
              </h3>
              <p className="text-sm text-brun/40 mb-6">
                D&eacute;couvre tes 4 premi&egrave;res valeurs. Les 3 restantes dans le rapport complet.
              </p>
              <div className="space-y-4">
                {MOCK_HIERARCHIE.map((v) => (
                    <div key={v.rang} className="bg-creme/60 rounded-2xl p-4 sm:p-5 hover:bg-creme/90 transition-colors">
                      <div className="flex items-start gap-4">
                        <span
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 border"
                          style={{ color: COLORS[(v.rang - 1) % COLORS.length], borderColor: COLORS[(v.rang - 1) % COLORS.length] + "30", backgroundColor: COLORS[(v.rang - 1) % COLORS.length] + "12" }}
                        >
                          {v.rang}
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-3 mb-1">
                            <p className="font-semibold text-brun">{v.valeur}</p>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-[10px] font-medium text-brun/30 uppercase tracking-wider hidden sm:inline">{v.domaine}</span>
                              <span className="text-sm font-bold text-terracotta">{v.score}%</span>
                            </div>
                          </div>
                          <div className="w-full bg-sable rounded-full h-2 mb-2">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${v.score}%`,
                                background: "linear-gradient(90deg, #F26522, #7C3AED)",
                              }}
                            />
                          </div>
                          {v.description && (
                            <p className="text-xs text-brun/45 leading-relaxed">{v.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
              {/* Hint for remaining values */}
              <div className="mt-5 flex items-center justify-center gap-2 text-brun/25">
                <div className="flex -space-x-1">
                  {[5, 6, 7].map((n) => (
                    <span key={n} className="w-7 h-7 bg-sable border-2 border-white rounded-lg flex items-center justify-center text-[10px] font-bold text-brun/30">
                      {n}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium">+3 valeurs dans le rapport premium</span>
              </div>
            </div>

            {/* Premium teaser */}
            <div className="p-7 sm:p-9 bg-brun-profond/[0.03]">
              <span className="inline-block text-xs font-semibold tracking-wide uppercase bg-terracotta/10 text-terracotta px-3 py-1 rounded-full mb-4">
                Rapport Premium &middot; 7 valeurs &middot; 7 domaines de vie
              </span>
              <h3 className="font-serif text-2xl font-bold text-brun mb-4">
                Conflit de valeurs identifi&eacute;
              </h3>
              <div className="bg-white rounded-2xl p-6 border border-sable/30 shadow-sm">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="bg-brun-profond text-white px-5 py-2 rounded-full text-sm font-medium">
                    Souverainet&eacute;
                  </span>
                  <span className="text-brun/20 text-lg font-light">&harr;</span>
                  <span className="bg-sage text-white px-5 py-2 rounded-full text-sm font-medium">
                    S&eacute;curit&eacute; relationnelle
                  </span>
                </div>
                <p className="text-brun/40 text-sm text-center">
                  &laquo;&thinsp;Ce n&apos;est pas un manque de courage.
                  C&apos;est un conflit entre deux fid&eacute;lit&eacute;s.&thinsp;&raquo;
                </p>
                <p className="text-xs text-terracotta font-medium text-center mt-3">
                  + 3 autres conflits identifi&eacute;s dans le rapport premium
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gratuit vs Premium — modern pricing */}
      <section id="gratuit-vs-premium" className="py-24 bg-creme">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brun mb-5">
              Deux niveaux de profondeur
            </h2>
            <p className="text-brun/50 text-lg">
              Commence gratuitement. Va plus loin si tu veux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gratuit */}
            <div className="bg-white rounded-3xl border border-sable/40 p-8 sm:p-10 hover-lift">
              <span className="inline-block text-xs font-semibold tracking-wide uppercase bg-sage/10 text-sage px-3 py-1 rounded-full mb-5">
                Gratuit
              </span>
              <h3 className="font-serif text-3xl font-bold text-brun">
                R&eacute;sultats essentiels
              </h3>
              <p className="text-4xl font-bold text-brun mt-3 mb-8">
                0&euro;
              </p>
              <ul className="space-y-3.5 text-sm text-brun/60">
                {[
                  "4 valeurs hautes identifi\u00e9es",
                  "Mini-analyse IA personnalis\u00e9e",
                  "Conflit principal de valeurs identifi\u00e9",
                  "Lien vides et valeurs (version courte)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/questionnaire"
                className="mt-10 block text-center btn-orange px-6 py-4 rounded-full font-medium"
              >
                Commencer gratuitement
              </Link>
            </div>

            {/* Premium */}
            <div className="relative bg-brun-profond rounded-3xl p-8 sm:p-10 text-white overflow-hidden glow-terracotta">
              {/* Decorative */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-terracotta/15 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sage/10 rounded-full blur-2xl" />

              <div className="relative">
                <span className="inline-block text-xs font-semibold tracking-wide uppercase bg-terracotta/20 text-terracotta-light px-3 py-1 rounded-full mb-5">
                  Premium
                </span>
                <h3 className="font-serif text-3xl font-bold">
                  Rapport complet IA
                </h3>
                <p className="text-4xl font-bold mt-3 mb-8">
                  29&thinsp;&euro;
                </p>
                <ul className="space-y-3.5 text-sm text-sable/70">
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
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-terracotta-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/questionnaire"
                  className="mt-10 block text-center btn-gradient-premium px-6 py-4 rounded-full font-semibold"
                >
                  Commencer le questionnaire
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation de fermeture — dramatic */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-creme via-sable-light to-creme" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-terracotta/5 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-3xl sm:text-4xl text-brun leading-snug mb-12">
            &laquo;&thinsp;Quand tu alignes tes choix avec tes valeurs,
            tu n&apos;as plus besoin de motivation.
            Tu avances depuis l&apos;int&eacute;rieur.&thinsp;&raquo;
          </blockquote>
          <Link
            href="/questionnaire"
            className="inline-block btn-orange px-10 py-5 rounded-full text-lg font-semibold"
          >
            D&eacute;couvre tes valeurs
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
