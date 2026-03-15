import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-creme pt-16">
        <div className="text-center px-4">
          <p className="text-6xl font-serif font-bold text-terracotta mb-4">404</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brun mb-4">
            Cette page n&apos;existe pas
          </h1>
          <p className="text-brun/60 text-lg mb-8">
            Mais tes valeurs, elles, sont bien réelles.
          </p>
          <Link
            href="/"
            className="btn-gradient px-8 py-3 rounded-full font-semibold inline-block"
          >
            Revenir à l&apos;accueil
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
