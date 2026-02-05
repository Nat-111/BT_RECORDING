import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import SplashLoader from "@/app/components/layout/SplashLoader";
import SiteReveal from "@/app/components/layout/SiteReveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | BT Recording",
    default: "BT Recording | Editorial Photographer",
  },
  description: "Bespoke editorial, wedding, and lifestyle photography capturing life's most precious moments with elegance and timeless style.",
  keywords: ["photography", "editorial", "wedding photographer", "portrait photography", "lifestyle"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/images/no bg.png",
    siteName: "BT Recording",
    images: [{
      url: "/images/no bg.png",
      width: 1200,
      height: 630,
      alt: "BT Recording",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased scroll-smooth">
        <SplashLoader />
        <SiteReveal>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SiteReveal>
      </body>
    </html>
  );
}
