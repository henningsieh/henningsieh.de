// src/app/page.tsx:

import PortfolioOneSheet from "@/components/Portfolio"
import { keywords, description, jsonLd, basicData } from "@/data"
import { Metadata } from "next"

export default function Home() {
  return (
    <main>
      <PortfolioOneSheet />
    </main>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(basicData.url),
  title: {
    default: basicData.jobTitle,
    template: `%s | ${basicData.name}`,
  },
  description: description,
  keywords: keywords,
  authors: [{ name: basicData.name }],
  creator: basicData.name,
  publisher: basicData.name,
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: basicData.url,
    title: basicData.jobTitle,
    description: description,
    siteName: basicData.websiteTitle,
    images: [
      {
        url: "/avatar_Henning-Sieh_315x315.jpg",
        width: 315,
        height: 315,
        alt: `${basicData.name}'s Profile Picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: basicData.jobTitle,
    description: description,
    images: ["/avatar_Henning-Sieh_315x315.jpg"],
  },
  alternates: {
    canonical: basicData.url,
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
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  // },
  other: {
    "json-ld": JSON.stringify(jsonLd),
  },
}
