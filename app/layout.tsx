import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import NoiseSVG from "@/components/noise-svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sunnie Kapar",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className={`${inter.className}`}>
        <NoiseSVG />
        {children}
      </body>
    </html>
  );
}
