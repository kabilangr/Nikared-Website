import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://nikared.com"),
  title: {
    default: "Nika Red | Industrial Software, Edge AI, and XR Engineering Studio",
    template: "%s | Nika Red",
  },
  description:
    "Nika Red is a Chennai-based engineering studio building custom industrial software, edge AI systems, and spatial computing (XR) solutions for manufacturing, logistics, and heavy infrastructure.",
  keywords: [
    "industrial software studio", 
    "edge AI engineering", 
    "XR development for manufacturing", 
    "SCADA integration",
    "legacy system modernization",
    "digital twin development",
    "predictive maintenance algorithms",
    "industrial automation software",
    "product engineering", 
    "Chennai", 
    "India"
  ],
  authors: [{ name: "NIKA RED PRIVATE LIMITED" }],
  openGraph: {
    type: "website",
    siteName: "Nika Red",
    title: "Nika Red | Industrial Software, Edge AI, and XR Engineering Studio",
    description:
      "A Chennai-based engineering studio building custom industrial software, edge AI systems, and spatial computing (XR) solutions for manufacturing, logistics, and heavy infrastructure.",
    images: [{ url: "/logo.svg", width: 852, height: 503, alt: "Nika Red Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nika Red | Industrial Software, Edge AI, and XR Engineering Studio",
    description: "A Chennai-based engineering studio building custom industrial software, edge AI systems, and spatial computing (XR) solutions for manufacturing, logistics, and heavy infrastructure.",
    images: ["/logo.svg"],
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
        {children}
      </body>
    </html>
  );
}
