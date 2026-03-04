import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Bebas_Neue } from "next/font/google";

const sans = Bebas_Neue({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: "400",
});

const alt = localFont({
  src: [
    {
      path: "../public/fonts/tiemposRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/tiemposRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/tiemposMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/tiemposMediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/tiemposBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/tiemposBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/tiemposSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/tiemposSemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-alt",
});

export const metadata: Metadata = {
  title: "Jahvon Cockburn | Portfolio",
  description:
    "My updated 2026 portfolio website. Minimalist design, showcasing major skills I've learned.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${alt.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
