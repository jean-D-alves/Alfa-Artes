import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../src/assets/Inter,Playfair/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
});

const playfair = localFont({
  src: [
    {
      path: "../src/assets/Inter,Playfair/Playfair/Playfair-VariableFont_opsz,wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../src/assets/Inter,Playfair/Playfair/Playfair-Italic-VariableFont_opsz,wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Alfa&Artes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}