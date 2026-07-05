import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { SITE, SITE_URL } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
});

const OG_IMAGE = {
  url: "/logo.png",
  width: 1776,
  height: 1049,
  alt: "Nika Red — Industrial Software, Edge AI, and XR Engineering Studio",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nika Red | Industrial Software, Edge AI, and XR Engineering Studio",
    template: "%s | Nika Red",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "industrial software studio",
    "edge AI engineering",
    "XR development for manufacturing",
    "SCADA integration",
    "legacy system modernization",
    "digital twin development",
    "predictive maintenance algorithms",
    "industrial automation software",
    "computer vision quality control",
    "spatial computing",
    "MES ERP integration",
    "product engineering",
    "Chennai",
    "India",
  ],
  authors: [{ name: SITE.legalName, url: SITE_URL }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "technology",
  alternates: {
    canonical: "/",
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
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE_URL,
    title: "Nika Red | Industrial Software, Edge AI, and XR Engineering Studio",
    description: SITE.description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nika Red | Industrial Software, Edge AI, and XR Engineering Studio",
    description: SITE.description,
    images: [OG_IMAGE.url],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#131417" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <head>
        <script suppressHydrationWarning dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
