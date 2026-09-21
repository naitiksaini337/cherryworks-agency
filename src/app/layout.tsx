import type { Metadata } from "next";
import { Manrope, Instrument_Serif, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
// Force TS re-parse
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { BRAND } from "@/data/siteData";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cherryworks.in'),
  title: `${BRAND.name} | ${BRAND.tagline}`,
  description: BRAND.description,
  openGraph: {
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
    url: 'https://cherryworks.in',
    siteName: BRAND.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: BRAND.description,
  },
  alternates: {
    canonical: 'https://cherryworks.in',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable} ${lora.variable}`}>
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-cherry-bg text-cherry-text selection:bg-cherry-primary selection:text-white antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": BRAND.name,
              "description": BRAND.description,
              "url": "https://cherryworks.in",
              "logo": "https://cherryworks.in/cherryworkslogo.svg",
              "email": BRAND.email,
              "telephone": BRAND.whatsappNumber,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Worldwide",
                "addressCountry": "IN"
              }
            })
          }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <WhatsAppFloating />
        <Footer />
      </body>
    </html>
  );
}
