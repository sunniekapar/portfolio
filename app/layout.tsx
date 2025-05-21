import "@/app/globals.css";
import NoiseSVG from "@/components/noise-svg";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const array = localFont({
  src: "./fonts/array.woff2",
  variable: "--font-array",
});

export const metadata: Metadata = {
  title: "Sunnie Kapar",
  description:
    "I'm a 19-year-old full stack developer studying computer engineering @ University of Waterloo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/images/favicon.ico" sizes="any" />
      <body className={`min-h-dvh ${inter.className} ${array.variable}`}>
        <NoiseSVG />
        {children}
      </body>
    </html>
  );
}
