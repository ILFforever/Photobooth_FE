import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IPH Photobooth - Professional Event Photo Booth Software",
  description: "Professional photobooth application by Intania Production House. Features live preview, photo collages, QR codes, and guest display support.",
  keywords: ["photobooth", "event photography", "photo booth software", "IPH", "Intania Production House"],
  icons: {
    icon: "/photos/logo/iph.png",
    apple: "/photos/logo/iph.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jost.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
