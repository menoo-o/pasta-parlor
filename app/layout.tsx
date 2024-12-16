import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Pasta Parlor | Coming Soon",
  description: "Pasta Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
