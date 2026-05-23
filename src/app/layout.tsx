import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikared.com"),
  title: {
    default: "NIKA RED | Industrial Intelligence",
    template: "%s | NIKA RED",
  },
  description:
    "NIKA RED builds industrial-grade software, AI systems, and XR platforms — engineered for the physical world. Based in Chennai, India.",
  keywords: ["industrial software", "AI R&D", "XR", "edge computing", "enterprise systems", "Chennai", "India"],
  authors: [{ name: "NIKA RED PRIVATE LIMITED" }],
  openGraph: {
    type: "website",
    siteName: "NIKA RED",
    title: "NIKA RED | Industrial Intelligence",
    description:
      "Industrial-grade software, AI systems, and XR platforms engineered for the physical world.",
    images: [{ url: "/hero_neural_mesh_1775043239514.png", width: 1200, height: 630, alt: "NIKA RED" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIKA RED | Industrial Intelligence",
    description: "Industrial-grade software, AI systems, and XR platforms engineered for the physical world.",
    images: ["/hero_neural_mesh_1775043239514.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
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
