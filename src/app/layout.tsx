import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tes Valeurs | Avancer Sans Se Trahir",
  description:
    "Identifie tes valeurs hautes avec un questionnaire interactif inspiré de la méthode Demartini. Rapport IA personnalisé.",
  keywords: ["valeurs", "Demartini", "coaching", "développement personnel", "valeurs hautes"],
  openGraph: {
    title: "Tes Valeurs | Avancer Sans Se Trahir",
    description:
      "Découvre tes valeurs hautes et comprends ce qui te guide vraiment.",
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
