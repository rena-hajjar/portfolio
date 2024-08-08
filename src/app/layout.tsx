import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import icon from './../../public/favicon.ico';

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
        <link rel="icon" href="/../../public/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
