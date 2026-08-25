import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nativee.in"),

  title: {
    default: "Nativee — AI Communication Infrastructure",
    template: "%s | Nativee",
  },

  description:
    "Nativee is AI communication infrastructure for speech recognition, translation, and real-time multilingual communication.",

  applicationName: "Nativee",

  alternates: {
    canonical: "https://www.nativee.in/",
  },

  openGraph: {
    type: "website",
    url: "https://www.nativee.in/",
    siteName: "Nativee",
    title: "Nativee — AI Communication Infrastructure",
    description:
      "AI communication infrastructure for speech recognition, translation, and real-time multilingual communication.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nativee — AI Communication Infrastructure",
    description:
      "AI communication infrastructure for speech recognition, translation, and real-time multilingual communication.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <body className="font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}