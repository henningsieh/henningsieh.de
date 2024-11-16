// src/app/page.tsx:

import PortfolioOneSheet from "@/components/Portfolio"
import { getDescription, getKeywords, jsonLd } from "@/data"
import { Metadata } from "next"

export default function Home() {
  return (
    <main>
      <PortfolioOneSheet />
    </main>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL("https://henningsieh.de"),
  title: {
    default: "Henning Sieh | Senior IT Consultant & Full-Stack Developer",
    template: "%s | Henning Sieh",
  },
  description: getDescription(),
  keywords: getKeywords(),
  authors: [{ name: "Henning Sieh" }],
  creator: "Henning Sieh",
  publisher: "Henning Sieh",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://henningsieh.de",
    title: "Henning Sieh | Senior IT Consultant & Full-Stack Developer",
    description: getDescription(),
    siteName: "Henning Sieh IT Consulting",
    images: [
      {
        url: "/avatar_Henning-Sieh_315x315.jpg",
        width: 315,
        height: 315,
        alt: "Henning Sieh Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henning Sieh | Senior IT Consultant & Full-Stack Developer",
    description: getDescription(),
    images: ["/avatar_Henning-Sieh_315x315.jpg"],
  },
  alternates: {
    canonical: "https://henningsieh.de",
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
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  other: {
    "json-ld": JSON.stringify(jsonLd),
  },
}
