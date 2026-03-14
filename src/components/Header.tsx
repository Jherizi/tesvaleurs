import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-creme/90 backdrop-blur-sm border-b border-sable">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl sm:text-2xl font-bold text-gradient">
              Tes Valeurs
            </span>
          </Link>

          <a
            href="#formulaire"
            className="btn-gradient px-5 py-2 rounded-full text-sm font-semibold"
          >
            Recevoir l&apos;outil
          </a>
        </div>
      </div>
    </header>
  );
}
