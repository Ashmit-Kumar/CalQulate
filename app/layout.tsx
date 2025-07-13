import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Navbar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CalQulate",
  description: "Smart food insights from your grocery cart.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="p-4 text-center text-sm text-muted-foreground bg-white shadow-inner">
          © {new Date().getFullYear()} CalQulate. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
