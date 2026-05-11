import type { Metadata } from "next";
import { Geist_Mono, Manrope } from "next/font/google";
import { Suspense } from "react";
import { Footer } from "@/components/layout/footer";
import { FloatingDonate } from "@/components/layout/floating-donate";
import { Navbar } from "@/components/layout/navbar";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://handofgod.org"),
  title: {
    default: "Hand of God | ONG humanitaire",
    template: "%s | Hand of God",
  },
  description:
    "Hand of God est une ONG humanitaire qui soutient les orphelins, les veuves et les personnes vulnerables par des actions concretes.",
  openGraph: {
    title: "Hand of God",
    description: "ONG humanitaire pour les orphelins, les veuves et les personnes vulnerables.",
    type: "website",
    locale: "fr_FR",
    siteName: "Hand of God",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingDonate />
      </body>
    </html>
  );
}
