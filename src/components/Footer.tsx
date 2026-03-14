import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brun-profond text-sable/80 border-t-2" style={{ borderImage: 'linear-gradient(to right, #F26522, #7C3AED) 1' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center space-y-3">
          <p className="text-sm text-sable/60">
            Jihane Herizi &mdash; Psychologue du travail, Clinicienne, Pr&eacute;paratrice mentale
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-sable/40">
            <Link
              href="/mentions-legales"
              className="hover:text-terracotta-light transition-colors"
            >
              Mentions l&eacute;gales
            </Link>
            <span>&middot;</span>
            <span>Espace 7% &mdash; tesvaleurs.fr</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
