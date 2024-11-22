import React from "react";

import { Geist } from "next/font/google";

import "./globals.css";
import cn from "@/lib/utils/cn";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen antialiased bg-stone-100", geist.className)}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
