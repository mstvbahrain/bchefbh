import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bchefbh.com"),
  title: "Bchef Bahrain | Catering, Macarons & Pastries",
  description: "Boutique catering, handcrafted macarons and French-inspired pastries for private and corporate events across Bahrain.",
  alternates: { canonical: "https://bchefbh.com" },
  openGraph: {
    title: "Bchef Bahrain | Made for the moments worth celebrating",
    description: "Boutique catering, handcrafted macarons and French-inspired pastries for events across Bahrain.",
    url: "https://bchefbh.com",
    siteName: "Bchef Bahrain",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bchef catering and macarons" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Bchef Bahrain", description: "Catering, macarons and pastries for memorable occasions.", images: ["/og.png"] },
  icons: {
    icon: "/bchef-logo-transparent.png",
    shortcut: "/bchef-logo-transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en"><body>{children}</body></html>;
}
