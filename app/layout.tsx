import type { Metadata } from "next";
import { Quicksand, Outfit } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Argumindo - Transform Kids into Confident Thinkers & Powerful Speakers",
    template: "%s | Argumindo",
  },
  description: "AI-powered debate and communication training for ages 9-15+. A complete journey from foundational reasoning to championship-level debate with gamified learning.",
  keywords: ["Argumindo", "debate training", "communication skills", "kids education", "AI learning", "public speaking", "argumentation", "critical thinking", "gamified learning"],
  authors: [{ name: "Argumindo" }],
  creator: "Argumindo",
  publisher: "Argumindo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://argumindo.com"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://argumindo.com",
    siteName: "Argumindo",
    title: "Argumindo - Transform Kids into Confident Thinkers & Powerful Speakers",
    description: "AI-powered debate and communication training for ages 9-15+. A complete journey from foundational reasoning to championship-level debate with gamified learning.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Argumindo - AI-powered debate training for kids",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Argumindo - Transform Kids into Confident Thinkers",
    description: "AI-powered debate and communication training for ages 9-15+. Gamified learning from foundational reasoning to championship-level debate.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${quicksand.variable} ${outfit.variable} font-sans`}>{children}</body>
    </html>
  );
}

