import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Identifie tes valeurs hautes — outil gratuit | tesvaleurs.fr",
  description:
    "55 questions pour découvrir ce qui organise vraiment ta vie. PDF + prompt IA. Gratuit.",
  keywords: ["valeurs", "valeurs hautes", "outil gratuit", "questionnaire valeurs", "Demartini", "développement personnel"],
  openGraph: {
    title: "Identifie tes valeurs hautes — outil gratuit | tesvaleurs.fr",
    description:
      "55 questions pour découvrir ce qui organise vraiment ta vie. PDF + prompt IA. Gratuit.",
    url: "https://tesvaleurs.fr",
    siteName: "Tes Valeurs",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
