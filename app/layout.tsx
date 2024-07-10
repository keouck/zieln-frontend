/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import PrelineScript from "./components/PrelineScript";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={poppins.className}>{children}</body>
        <PrelineScript />
      </html>
    </ClerkProvider>
  );
}
