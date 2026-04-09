import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://planetarf.ru";
const siteName = "Planeta ERP";
const seoTitle = "Planeta ERP — Единая цифровая экосистема для управления крупным бизнесом";
const seoDescription =
  "Контроль процессов, денег и сроков в одной системе. Подходит для девелоперов, управляющих компаний и агентств недвижимости.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: seoTitle,
    description: seoDescription,
    locale: "ru_RU",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description: seoDescription,
    images: ["/favicon-32x32.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
