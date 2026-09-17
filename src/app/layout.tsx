import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premium Garment Manufacturer in China | DISTRICT 88 LTD",
  description: "DISTRICT 88 LTD is a mid-to-premium garment development and manufacturing partner in China. We support international fashion, sportswear, and technical apparel brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-background text-foreground`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Discreet WhatsApp Icon */}
        <a 
          href="https://wa.me/yournumber" 
          target="_blank" 
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-3"
        >
          <span className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground shadow-lg border border-gray-100">
            Have a project? Talk to our team.
          </span>
          <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center rounded-none shadow-xl hover:bg-accent transition-colors">
            {/* Minimalist Chat Icon simulating WhatsApp */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
          </div>
        </a>

        <Footer />
      </body>
    </html>
  );
}
