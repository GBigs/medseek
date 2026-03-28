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
  title: {
    default: "MedSeek | IA Médica com Fontes Confiáveis para Plantão e Residência",
    template: "%s | MedSeek",
  },
  description:
    "Tire dúvidas médicas em segundos com IA treinada em livros de medicina e respostas com fonte e página citadas. Mais segurança clínica para plantão, estudos e residência.",
  keywords: [
    "IA médica",
    "assistente médico com fonte",
    "conduta clínica",
    "plantão médico",
    "residência médica",
    "estudantes de medicina",
    "medicina baseada em evidências",
    "Harrison",
    "Nelson",
    "MedSeek",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "MedSeek | IA Médica com Fontes Confiáveis para Plantão e Residência",
    description:
      "Assistente de IA médica treinado em fontes confiáveis. Receba respostas clínicas rastreáveis com referência e página em segundos.",
    url: "https://medseek.com.br",
    siteName: "MedSeek",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MedSeek - IA médica com fontes confiáveis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MedSeek | IA Médica com Fontes Confiáveis",
    description:
      "Respostas clínicas em segundos com fontes médicas citadas para plantão, estudo e residência.",
    images: ["/og-image.png"],
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
