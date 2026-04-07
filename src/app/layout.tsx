import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Van der Berg & Associates — Boutique Legal Counsel, Cape Town",
  description:
    "Property law, commercial contracts, estate planning, and family law. Boutique legal counsel in Cape Town since 1987.",
};

export const viewport: Viewport = {
  themeColor: "#0f0e0d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
