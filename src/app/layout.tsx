"use client"

// src/app/layout.tsx:
import { MailIcon, MapPinHouseIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

import { Navigation } from "@/components/Navigation"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Button } from "@/components/ui/button"
import { basicData } from "@/data"

import "./globals.css"

import localFont from "next/font/local"

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
            <footer className="border-primary/10 bg-background text-foreground border-t px-4 py-12">
              <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
                  {/* Name and Title */}
                  <div className="text-center md:text-left">
                    <h3 className="mb-1 text-xl font-bold">{basicData.name}</h3>
                    <p className="text-muted-foreground text-sm">{basicData.jobTitle}</p>
                  </div>

                  {/* Contact Links */}
                  <div className="text-center">
                    <div className="flex flex-col gap-2 text-sm">
                      <Link href={`mailto:${basicData.email}`} className="hover:text-accent transition-colors">
                        {basicData.email}
                      </Link>
                      <Link href={`tel:${basicData.mobile}`} className="hover:text-accent transition-colors">
                        {basicData.mobile}
                      </Link>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4 md:justify-end">
                    <Button asChild size="icon" variant="ghost" className="hover:bg-accent/20 transition-colors">
                      <Link
                        href="https://www.linkedin.com/in/henningsieh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Image src="/LinkedIn_icon.original.svg" width={24} height={24} alt="LinkedIn" />
                      </Link>
                    </Button>
                    <Button asChild size="icon" variant="ghost" className="hover:bg-accent/20 transition-colors">
                      <Link
                        href="https://bsky.app/profile/henningsieh.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Bluesky"
                      >
                        <Image src="/Bluesky-Logo.original.svg" width={24} height={24} unoptimized alt="Bluesky" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="border-primary/10 mt-8 border-t pt-8">
                  <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-muted-foreground text-sm">
                      © {new Date().getFullYear()} {basicData.name}. Alle Rechte vorbehalten.
                    </p>
                    <div className="flex gap-6">
                      <Button
                        asChild
                        variant="link"
                        size="sm"
                        className="text-muted-foreground hover:text-accent h-auto p-0 font-normal"
                      >
                        <Link href="/#home" className="flex items-center gap-1">
                          <MailIcon className="h-4 w-4" /> Kontakt
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="link"
                        className="text-muted-foreground hover:text-accent h-auto p-0 font-normal"
                      >
                        <Link href="/impressum" className="flex items-center gap-1">
                          <MapPinHouseIcon className="h-4 w-4" /> Impressum
                        </Link>
                      </Button>
                    </div>
                  </div>
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
