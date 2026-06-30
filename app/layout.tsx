import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://highlineventurescarcare.com"),
  title: {
    default: "Highline Ventures Car Care | Premium Car Wash & Wheel Services in Uganda",
    template: "%s | Highline Ventures Car Care",
  },
  description:
    "Uganda's premier automotive care center. Professional car wash, wheel alignment, wheel balancing, tyre services, and auto detailing. Serving Kampala and surrounding areas.",
  keywords: [
    "car wash Uganda",
    "wheel alignment Kampala",
    "wheel balancing Uganda",
    "tyre services Kampala",
    "car detailing Uganda",
    "auto care Uganda",
    "Highline Ventures",
    "car care Kampala",
  ],
  authors: [{ name: "Highline Ventures Car Care" }],
  creator: "Highline Ventures Car Care",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://highlineventurescarcare.com",
    siteName: "Highline Ventures Car Care",
    title: "Highline Ventures Car Care | Premium Automotive Services Uganda",
    description:
      "Professional car wash, wheel alignment, wheel balancing, tyre services and auto detailing in Uganda.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Highline Ventures Car Care - Premium Automotive Services Uganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Highline Ventures Car Care | Premium Automotive Services Uganda",
    description:
      "Professional car wash, wheel alignment, wheel balancing, tyre services and auto detailing in Uganda.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased bg-brand-black text-white`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
