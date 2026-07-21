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
  title: "Sai Maganti — saimaganti.io",
  description:
    "Sai Maganti — a software engineer who likes building things that make someone's day a little better. Currently building YeetCode.",
  metadataBase: new URL("https://saimaganti.io"),
  openGraph: {
    title: "Sai Maganti — saimaganti.io",
    description:
      "A software engineer who likes building things that make someone's day a little better.",
    url: "https://saimaganti.io",
    siteName: "saimaganti.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#050505] font-sans text-zinc-300 antialiased">
        {children}
      </body>
    </html>
  );
}
