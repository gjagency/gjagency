import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "G&J Agency | Desarrollo web, apps y soluciones digitales",
  description: "G&J Agency - Agencia de desarrollo web y móvil. Creamos soluciones digitales a medida para empresas y emprendedores.",
  verification: {
    google: "bUNZLv40-Gu9ZQCPbEqFzp4IULdYgkwQr4Ssqcd6OGU",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17824852621"></Script>
        <Script id="google_ads">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17824852621');`}
        </Script>
        
        {children}
      </body>
    </html>
  );
}
