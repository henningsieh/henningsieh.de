"use client"

// src/app/layout.tsx:
import "./globals.css"

import { Mail, MapPinHouse } from "lucide-react"

import localFont from "next/font/local"
import Link from "next/link"
import Script from "next/script"

import { Navigation } from "@/components/Navigation"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="min-h-screen scroll-smooth">
            <Navigation />

            {children}

            {/* Footer */}
            <footer className="border-t border-primary/10 bg-background px-4 py-8">
              <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="text-sm text-muted-foreground">&copy; 2024 Henning Sieh. All rights reserved.</div>
                <div className="flex items-center gap-4">
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="nav-link flex items-center gap-1 text-muted-foreground"
                  >
                    <Link href="/#home">
                      <Mail className="mr-2 h-4 w-4" /> Kontakt
                    </Link>
                  </Button>
                  <Button asChild variant="link" className="nav-link flex items-center gap-1 text-muted-foreground">
                    <Link href="/impressum">
                      <MapPinHouse className="h-6 w-6" /> Impressum
                    </Link>
                  </Button>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>

        {/* Plausible Analytics Script */}
        <Script src="https://cdn.sieh.org/js/script.js" data-domain="henningsieh.de" strategy="afterInteractive" />

        {/* Matomo Analytics Script */}
        <Script
          id="matomo"
          dangerouslySetInnerHTML={{
            __html: `
              var _paq = window._paq = window._paq || [];
              /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                var u="https://matomo.sieh.org/";
                _paq.push(['setTrackerUrl', u+'matomo.php']);
                _paq.push(['setSiteId', '2']);
                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();
            `,
          }}
        />
        {/* <!-- End Matomo Code --> */}
      </body>
    </html>
  )
}
