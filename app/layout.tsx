import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Mohit Sendurkar | Graphic Designer & UI/UX Designer",
  description: "Portfolio of Mohit Sendurkar - Graphic Designer, UI/UX Designer, and Frontend Developer based in India.",
  keywords: ["Graphic Designer", "UI/UX Designer", "Figma Designer", "Frontend Developer", "Web Designer", "React Developer", "Next.js Developer"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-charcoal text-offwhite min-h-screen flex flex-col selection:bg-primary selection:text-white`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}