import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 pb-12 bg-creme">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h1 className="font-serif text-3xl font-bold text-brun mb-8">
            Mentions légales
          </h1>

          <div className="bg-white rounded-2xl border border-sable p-6 sm:p-8 space-y-8 text-sm text-brun/70 leading-relaxed">
            <section>
              <h2 className="font-serif text-xl font-bold text-brun mb-3">
                Éditeur du site
              </h2>
              <p>
                Le site tesvaleurs.fr est édité par la société SPC GROUP
                (nom commercial : SEPT POUR CENT), SASU au capital de 1 000 €.
              </p>
              <p className="mt-1">SIREN : 992 703 918</p>
              <p className="mt-1">SIRET : 992 703 918 00019</p>
              <p className="mt-1">
                Siège social : 8 Rue Pierre Curie, 93300 Aubervilliers
              </p>
              <p className="mt-1">N° TVA intracommunautaire : FR15992703918</p>
              <p className="mt-1">Présidente : Jihane Herizi</p>
              <p className="mt-1">
                Email :{" "}
                <a
                  href="mailto:jihane@herizi.com"
                  className="text-terracotta hover:underline"
                >
                  jihane@herizi.com
                </a>
              </p>
              <p className="mt-1">
                Directrice de la publication : Jihane Herizi
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brun mb-3">
                Hébergement
              </h2>
              <p>
                Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133,
                Walnut, CA 91789, USA.
              </p>
              <p className="mt-1">Site web : vercel.com</p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brun mb-3">
                Propriété intellectuelle
              </h2>
              <p>
                L&apos;ensemble du contenu de ce site (textes, questionnaire,
                analyses, design, code) est la propriété exclusive de
                SPC GROUP, sauf mention contraire. Toute reproduction, même
                partielle, est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brun mb-3">
                Données personnelles &amp; RGPD
              </h2>
              <p>
                Les données collectées (prénom, nom, email, réponses au
                questionnaire) sont utilisées uniquement pour générer votre
                analyse personnalisée et vous envoyer vos résultats.
              </p>
              <p className="mt-2">
                <strong className="text-brun">Responsable du traitement :</strong>{" "}
                SPC GROUP, représentée par Jihane Herizi (jihane@herizi.com)
              </p>
              <p className="mt-2">
                <strong className="text-brun">Finalités :</strong> génération
                de l&apos;analyse de valeurs, envoi des
                résultats par email, communication commerciale si consentement.
              </p>
              <p className="mt-2">
                <strong className="text-brun">Base légale :</strong> consentement
                de l&apos;utilisateur (art. 6.1.a du RGPD) et exécution du
                contrat pour le rapport premium (art. 6.1.b).
              </p>
              <p className="mt-2">
                <strong className="text-brun">Durée de conservation :</strong>{" "}
                vos données sont conservées 3 ans à compter de votre dernière
                interaction, sauf demande de suppression.
              </p>
              <p className="mt-2">
                <strong className="text-brun">Sous-traitants :</strong> Vercel
                (hébergement), Stripe (paiement), Brevo (emailing), OpenAI
                (génération IA des analyses). Vos données peuvent être
                transférées hors UE dans le cadre de ces services, avec les
                garanties appropriées (clauses contractuelles types).
              </p>
              <p className="mt-2">
                <strong className="text-brun">Vos droits :</strong> conformément
                au RGPD, vous disposez d&apos;un droit d&apos;accès, de
                rectification, de suppression, de portabilité et de limitation
                du traitement de vos données. Pour exercer ces droits,
                contactez{" "}
                <a
                  href="mailto:jihane@herizi.com"
                  className="text-terracotta hover:underline"
                >
                  jihane@herizi.com
                </a>
                . Réponse sous 30 jours. Vous pouvez également introduire une
                réclamation auprès de la CNIL (cnil.fr).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brun mb-3">
                Conditions générales de vente
              </h2>
              <p>
                Le rapport premium &laquo; Valeurs Hautes &raquo; est un produit
                numérique vendu par SPC GROUP, SASU au capital de 1 000 €,
                au prix de 29 € TTC, payable par carte bancaire via la
                plateforme sécurisée Stripe.
              </p>
              <p className="mt-2">
                Le paiement est débité immédiatement. Le rapport est généré et
                envoyé par email dans les minutes suivant le paiement.
              </p>
              <p className="mt-2">
                Conformément à l&apos;article L221-28 du Code de la
                consommation, le droit de rétractation ne peut être exercé pour
                les contenus numériques fournis sur un support immatériel dont
                l&apos;exécution a commencé avec l&apos;accord préalable du
                consommateur. En validant le paiement, vous acceptez que le
                rapport soit généré immédiatement et renoncez à votre droit de
                rétractation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brun mb-3">
                Cookies &amp; stockage local
              </h2>
              <p>
                Ce site utilise le localStorage du navigateur pour sauvegarder
                vos réponses au questionnaire en cours de session. Aucun cookie
                de tracking ou publicitaire n&apos;est utilisé.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-bold text-brun mb-3">
                Avertissement
              </h2>
              <p>
                Ce questionnaire et les analyses générées sont des outils de
                réflexion personnelle et ne constituent en aucun cas un
                diagnostic psychologique ou médical. Ils ne remplacent pas un
                accompagnement professionnel adapté.
              </p>
              <p className="mt-2">
                Les résultats sont produits à l&apos;aide d&apos;intelligence
                artificielle (OpenAI) et doivent être considérés comme des
                pistes de réflexion, non comme des vérités absolues.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
