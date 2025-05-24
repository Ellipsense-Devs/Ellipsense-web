import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ellipsense",
  description: "Empowering businesses with innovative software solutions and cutting-edge technology services",
  metadataBase: new URL('https://ellipsense.vercel.app'),
  openGraph: {
    title: 'Ellipsense',
    description: 'Empowering businesses with innovative software solutions and cutting-edge technology services',
    url: 'https://ellipsense.vercel.app',    siteName: 'Ellipsense',    images: [
      {
        url: '/logo.svg',
        width: 150,
        height: 150,
        alt: 'Ellipsense Logo',
      },      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ellipsense Overview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ellipsense',
    description: 'Empowering businesses with innovative software solutions and cutting-edge technology services',
    images: ['/logo.svg', '/logo.png'],
    creator: '@ellipsense',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll need to replace this with your actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
