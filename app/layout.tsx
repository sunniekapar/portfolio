import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import NoiseSVG from "@/components/noise-svg";

const inter = Inter({ subsets: ["latin"] });

const array = localFont({
  src: './fonts/array.woff2',
  variable: '--font-array'
});

export const metadata: Metadata = {
  title: "Sunnie Kapar",
  description:
    "I'm an 18-year-old full stack developer studying computer engineering @ University of Waterloo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className={`${inter.className} ${array.variable}`}>
        <NoiseSVG />
        {children}
      </body>
    </html>
  );
}
