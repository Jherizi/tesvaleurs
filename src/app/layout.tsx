import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Identifie tes valeurs hautes — outil gratuit | tesvaleurs.fr",
  description:
    "55 questions pour découvrir ce qui organise vraiment ta vie. PDF + prompt IA. Gratuit.",
  keywords: ["valeurs", "valeurs hautes", "outil gratuit", "questionnaire valeurs", "Demartini", "développement personnel"],
  alternates: {
    canonical: "https://tesvaleurs.fr/",
  },
  openGraph: {
    title: "Identifie tes valeurs hautes — outil gratuit | tesvaleurs.fr",
    description:
      "55 questions pour découvrir ce qui organise vraiment ta vie. PDF + prompt IA. Gratuit.",
    url: "https://tesvaleurs.fr",
    siteName: "Tes Valeurs",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://tesvaleurs.fr/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://tesvaleurs.fr/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2HZ10JYLFS" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-2HZ10JYLFS');`}
        </Script>
      </body>
    </html>
  );
}
