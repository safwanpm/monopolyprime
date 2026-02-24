
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisWrapper from "@/components/LenisWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://monopolyprime.ae"),

  title: {
    default: "MonopolyPrime Properties | Real Estate in Dubai & Sharjah",
    template: "%s | MonopolyPrime Properties",
  },

  description:
    "MonopolyPrime Properties is your trusted real estate partner in Dubai & Sharjah. We specialize in rentals, property sales, and off-plan projects with professionalism, transparency, and deep market expertise.",

  keywords: [
    "Dubai real estate",
    "Sharjah real estate",
    "property rental Dubai",
    "apartments in Sharjah",
    "off-plan projects UAE",
    "real estate agency Dubai",
    "buy property UAE",
    "MonopolyPrime Properties",
  ],

  authors: [{ name: "MonopolyPrime Properties" }],
  creator: "MonopolyPrime Properties",
  publisher: "MonopolyPrime Properties",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "MonopolyPrime Properties | Dubai & Sharjah Real Estate",
    description:
      "Explore premium rentals, property sales, and off-plan projects in Dubai & Sharjah with MonopolyPrime Properties.",
    url: "https://monopolyprimeproperties.com",
    siteName: "MonopolyPrime Properties",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "MonopolyPrime Properties | Real Estate Experts UAE",
    description:
      "Your trusted real estate partner in Dubai & Sharjah. Rentals, Sales & Off-Plan Projects.",
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

  category: "Real Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Geo Tags */}
        <meta name="geo.region" content="AE-DU" />
        <meta name="geo.placename" content="Dubai, Sharjah" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              name: "MonopolyPrime Properties",
              url: "https://monopolyprimeproperties.com",
              logo: "https://monopolyprimeproperties.com/logo.png",
              description:
                "Trusted real estate partner in Dubai & Sharjah specializing in rentals, sales, and off-plan projects.",
              areaServed: {
                "@type": "Place",
                name: "Dubai & Sharjah, UAE",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "AE",
              },
              sameAs: [
                "https://www.instagram.com/",
                "https://www.facebook.com/",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisWrapper>
          {children}
        </LenisWrapper>
        
      </body>
    </html>
  );
}