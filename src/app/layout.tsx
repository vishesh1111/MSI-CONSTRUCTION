import "./globals.css";
import { Playfair_Display, Montserrat, Fraunces, JetBrains_Mono, Inter } from "next/font/google";
import WelcomeNotification from "@/components/WelcomeNotification";

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

export const metadata = {
  title: "MSI Construction",
  description: "Rebuilding Legacy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${montserrat.variable} ${fraunces.variable} ${jetbrainsMono.variable} ${inter.variable}`}>
        {children}
        <WelcomeNotification />
      </body>
    </html>
  );
}
