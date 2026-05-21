import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dra. Ana Luz | Nutrição Funcional para Crianças Atípicas",
  description:
    "Especialista em crianças com TEA, TDAH e Seletividade Alimentar. Nutrição funcional materno-infantil com ciência e acolhimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
