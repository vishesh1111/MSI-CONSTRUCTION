import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Montserrat, Fraunces, JetBrains_Mono, Inter } from "next/font/google";
import WelcomeNotification from "@/components/WelcomeNotification";
import { JsonLd } from "@/components/JsonLd";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://msiconstruction.in'),
  title: {
    default: 'MSI Construction — Best Construction Company & Interior Designer in Delhi NCR | 30+ Years',
    template: '%s | MSI Construction'
  },
  description: 'MSI Construction is a leading construction company and interior designer in Delhi NCR with 30+ years of experience. Residential, commercial & industrial construction, turnkey projects, and luxury interior design across Delhi, Noida, Gurgaon, Ghaziabad, Faridabad & all India. Call +91 93194 44747',
  keywords: ['construction company Delhi', 'construction company Noida', 'construction company near me', 'interior designer Delhi NCR', 'best construction company', 'commercial construction company', 'residential construction Delhi', 'turnkey construction company', 'industrial construction', 'office interior design', 'home renovation Delhi', 'building contractor', 'civil contractor Delhi', 'warehouse construction', 'factory construction', 'luxury interior designer'],
  authors: [{ name: 'MSI Construction', url: 'https://msiconstruction.in' }],
  creator: 'MSI Construction',
  publisher: 'MSI Construction',
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://msiconstruction.in',
    siteName: 'MSI Construction',
    title: 'MSI Construction — Best Construction Company & Interior Designer in Delhi NCR | 30+ Years',
    description: 'MSI Construction is a leading construction company and interior designer in Delhi NCR with 30+ years of experience. Residential, commercial & industrial construction, turnkey projects, and luxury interior design across Delhi, Noida, Gurgaon, Ghaziabad, Faridabad & all India. Call +91 93194 44747',
    images: [{ url: '/img/MSI_cropped.png', width: 384, height: 144, alt: 'MSI Construction - Best Construction Company & Interior Designer Delhi NCR' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSI Construction — Best Construction Company & Interior Designer in Delhi NCR | 30+ Years',
    description: 'MSI Construction is a leading construction company and interior designer in Delhi NCR with 30+ years of experience. Residential, commercial & industrial construction, turnkey projects, and luxury interior design across Delhi, Noida, Gurgaon, Ghaziabad, Faridabad & all India. Call +91 93194 44747',
    images: ['/img/MSI_cropped.png']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1
    }
  },
  alternates: { canonical: 'https://msiconstruction.in' }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
        <JsonLd type="organization" />
        <JsonLd type="website" />
        <JsonLd type="localBusiness" />
        {children}
        <WelcomeNotification />
      </body>
    </html>
  );
}
