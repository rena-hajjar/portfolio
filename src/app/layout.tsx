import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import icon from "./../../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Réna Sophia Hajjar",
  description: "Portfolio and About",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}
