import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tullaballoo — Coming Soon",
  description:
    "Tullaballoo is a software studio building custom web and app solutions for clients, and creating our own thoughtfully designed products. Launching soon.",
  robots: "index,follow",
  openGraph: {
    title: "Tullaballoo — Coming Soon",
    description:
      "Software the way you need it. Launching soon. Good software takes a moment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
