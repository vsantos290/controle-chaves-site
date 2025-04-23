import React from "react";
import "./globals.css"; // Para importar o Tailwind (caso você precise)
import { Inter } from "next/font/google"; // Um exemplo de fonte (opcional)

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Controle de Chaves",
  description: "Gerencie chaves de forma eficiente e prática.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
