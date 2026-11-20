import type { Metadata, Viewport } from "next";
import "@fontsource-variable/rubik";
import "@fontsource/rubik-mono-one";
import "./globals.css";

export const metadata: Metadata = {
  title: "Réna Hajjar",
  description:
    "Réna Hajjar — master's student at Queen's University's Perk Lab building surgical navigation tools. Also a painter, guitarist and traveller.",
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = { themeColor: "#F4F2FC" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
