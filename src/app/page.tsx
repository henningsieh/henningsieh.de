// src/app/page.tsx:
import { Metadata } from "next"

import PortfolioOneSheet from "@/components/Portfolio"
import { basicData, jsonLd, metaDataDescription, metaDataKeywords } from "@/data"

export default function Home() {
  return (
    <main>
      {jsonLd.map((entry, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
      <PortfolioOneSheet />
    </main>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(basicData.url),
  title: {
    default: `${basicData.name} - ${basicData.occupationalCategory}`,
    template: `%s | ${basicData.name}`,
  },
  description: metaDataDescription,
  keywords: metaDataKeywords,
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
    description: metaDataDescription,
    siteName: `${basicData.name} - ${basicData.occupationalCategory}`,
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
    description: metaDataDescription,
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
  verification: {
    google: "FU9DT5Molpovnd8eyACjQlF82aPvPehn7gD47A0kwbk",
  },
}
