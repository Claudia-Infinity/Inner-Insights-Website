import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import NewsletterPopup from "@/components/newsletter-popup";
import InfinityChat from "@/components/infinity-chat";

// Google Analytics 4 — Inner Insights production property.
const GA_MEASUREMENT_ID = "G-72WPYFKS5J";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Inner Insights · Claudia Romo, Psychic Medium & Coach",
    template: "%s · Inner Insights",
  },
  description:
    "Psychic readings, energy healing, smudge ceremonies, and life coaching with Claudia Romo. Based in Dallas, Texas.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-ink">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <NewsletterPopup />
        <InfinityChat />

        {/* Google Analytics 4 — loaded after interactive so it never blocks first paint. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: true });
          `}
        </Script>
      </body>
    </html>
  );
}
