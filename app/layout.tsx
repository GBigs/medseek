import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medseek.com.br"),
  title: "MedSeek | Respostas clínicas exatas",
  description:
    "IA médica para decisões clínicas rápidas com referências verificáveis e contexto de plantão.",
  openGraph: {
    title: "MedSeek",
    description:
      "IA médica para decisões clínicas rápidas com referências verificáveis e contexto de plantão.",
    siteName: "MedSeek",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={dmSans.variable} lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

