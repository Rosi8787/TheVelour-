import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000"
  ),

  title: {
    default: "The Velourá",
    template: "%s | The Velourá",
  },

  description:
    "Temukan koleksi fashion wanita, skincare premium, dan aksesoris pilihan.",

  keywords: [
    "fashion wanita",
    "skincare",
    "affiliate store",
    "the veloura",
    "produk kecantikan",
  ],

  authors: [
    {
      name: "The Velourá",
    },
  ],

  creator: "The Velourá",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "The Velourá",
    description:
      "Fashion wanita premium dan aksesoris pilihan.",
    url:
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000",
    siteName: "The Velourá",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "The Velourá",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "The Velourá",
    description:
      "Fashion wanita premium dan aksesoris pilihan.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[#FAFAFA] antialiased">
        {children}

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics
            gaId={process.env.NEXT_PUBLIC_GA_ID}
          />
        )}
      </body>
    </html>
  );
}