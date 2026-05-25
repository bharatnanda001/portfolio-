import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharat Nanda — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Bharat Nanda — AI Engineer specializing in RAG systems, scalable backend architecture, and modern web experiences. B.Tech CSE at Galgotias University.",
  keywords: [
    "Bharat Nanda",
    "AI Engineer",
    "Full Stack Developer",
    "RAG Systems",
    "FastAPI",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Bharat Nanda" }],
  openGraph: {
    title: "Bharat Nanda — AI Engineer & Full Stack Developer",
    description:
      "Building AI Systems That Feel Like The Future. AI Engineer specializing in RAG systems, scalable backend architecture, and modern web experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Nanda — AI Engineer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
