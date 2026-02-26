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

// 1. Updated Metadata for GPL 2026
export const metadata: Metadata = {
  title: "GPL 2026 | GSB Premier League 10th Anniversary",
  description: "Official website for GSB Premier League 2026. Celebrating 10 years of sports, unity, and heritage at Shanbhouge Kudru.",
  icons: {
    icon: "/logo.png", // 2. Setting logo.png as the favicon
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Manual link tag just to ensure broad browser compatibility */}
        <link rel="icon" href="/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white selection:bg-blue-600 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}