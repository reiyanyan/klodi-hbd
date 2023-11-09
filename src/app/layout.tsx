import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "klodi hbd",
  description: "desc - klodi hbd",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico"></link>
        <title>Happy Birthday!</title>
        <meta
          name="description"
          content="Dari Vira ponyo"
        />

        <meta property="og:url" content="https://klodi-hbd.vercel.app" />

        <meta property="og:type" content="website" />
        <meta property="og:image" content="/image.jpg" />
        <meta
          property="og:title"
          content="Buat kak bima"
        />
        <meta
          property="og:description"
          content="Dari Vira ponyo"
        />

        <meta property="twitter:url" content="https://klodi-hbd.vercel.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://ik.imagekit.io/3592mo0vh/img/compressed.jpg"
        />
        <meta
          name="twitter:title"
          content="Buat kak bima"
        />
        <meta
          name="twitter:description"
          content="Dari Vira ponyo"
        />

        <meta property="twitter:domain" content="klodi-hbd.vercel.app" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
