import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise Simulation Software | AI Technology | Scalera AI",
  description:
    "Our simulation software is used by enterprise companies to quickly and efficiently simulate future scenarios in a safe, virtual environment.",
  icons: {
    icon: [
      { url: "/seo/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/seo/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/seo/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="/fonts/PxGrotesk/PxGroteskRegular.css" />
      </head>
      <body className="min-h-full flex flex-col bg-simu-bg text-white">
        {children}
      </body>
    </html>
  );
}
