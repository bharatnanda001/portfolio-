import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharat Nanda — AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Bharat Nanda — AI Engineer specializing in RAG systems, scalable backend architecture, and modern web experiences.",
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
    <html lang="en" className={`dark ${serif.variable} ${montserrat.variable}`} suppressHydrationWarning>
      <body className="min-h-screen overflow-x-hidden font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
