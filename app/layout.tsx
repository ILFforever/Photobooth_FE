import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPH Photobooth - Professional Event Photo Booth Software",
  description: "Professional photobooth application by Intania Production House. Features live preview, photo collages, QR codes, and guest display support.",
  keywords: ["photobooth", "event photography", "photo booth software", "IPH", "Intania Production House"],
  icons: {
    icon: "/photos/IPH.png",
    apple: "/photos/IPH.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
