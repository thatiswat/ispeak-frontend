import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Poppins,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nativee.in"),

  title: {
    default: "Nativee — AI Communication Infrastructure",
    template: "%s | Nativee",
  },

  description:
    "Nativee is AI communication infrastructure for multilingual speech recognition, translation, and real-time communication across India's languages.",

  applicationName: "Nativee",

  alternates: {
    canonical: "https://www.nativee.in/",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "1024x1024",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: "https://www.nativee.in/",
    siteName: "Nativee",
    title: "Nativee — AI Communication Infrastructure",
    description:
      "AI communication infrastructure for multilingual speech recognition, translation, and real-time communication across India's languages.",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nativee — AI Communication Infrastructure",
    description:
      "AI communication infrastructure for multilingual speech recognition, translation, and real-time communication across India's languages.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.nativee.in/#website",
      name: "Nativee",
      url: "https://www.nativee.in/",
      inLanguage: "en-IN",
      publisher: {
        "@id": "https://www.nativee.in/#organization",
      },
    },

    {
      "@type": "Organization",
      "@id": "https://www.nativee.in/#organization",
      name: "Nativee",
      url: "https://www.nativee.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.nativee.in/icon.png",
      },
      image: "https://www.nativee.in/icon.png",
      description:
        "Nativee is AI communication infrastructure for multilingual speech recognition, translation, and real-time communication across India's languages.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${poppins.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}