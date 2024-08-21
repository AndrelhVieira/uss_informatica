import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://ussinformatica.com.br"),
  title: {
    default: "USS - Informática",
    template: "%s | USS - Informática",
  },
  description: "Página institucional de USS Informática",
  openGraph: {
    title: "USS Informática",
    description: "Esta é a página institucional de USS Informática",
    url: "https://ussinformatica.com.br",
    siteName: "USS Informática",
    locale: "pt",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-secondary bg-background",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <link rel="icon" href="/uss-icon.png" />
      </head>
      <body className="antialiased mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
