import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";

import "./globals.css";

const interFont = Inter({ subsets: ["latin"] });
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "GoShop",
  description: "Welcome to GoShop, Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.className} ${barlowFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
