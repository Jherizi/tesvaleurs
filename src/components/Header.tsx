"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-creme/90 backdrop-blur-sm border-b border-sable">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl sm:text-2xl font-bold text-gradient">
              Tes Valeurs
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#comment-ca-marche"
              className="text-brun/70 hover:text-terracotta transition-colors text-sm font-medium"
            >
              Comment ça marche
            </Link>
            <Link
              href="/#gratuit-vs-premium"
              className="text-brun/70 hover:text-terracotta transition-colors text-sm font-medium"
            >
              Rapport Premium
            </Link>
            <Link
              href="/questionnaire"
              className="btn-gradient px-5 py-2 rounded-full text-sm font-semibold"
            >
              Découvre tes valeurs
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-brun"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-sable pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/#comment-ca-marche"
                className="text-brun/70 hover:text-terracotta text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link
                href="/#gratuit-vs-premium"
                className="text-brun/70 hover:text-terracotta text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Rapport Premium
              </Link>
              <Link
                href="/questionnaire"
                className="btn-gradient px-5 py-2 rounded-full text-sm font-semibold text-center"
                onClick={() => setMenuOpen(false)}
              >
                Découvre tes valeurs
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
