import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navbar/Navbar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sonia Anthony Portflio",
  description: "Sonia Anthony Portfolio Virtual Assistant Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <div className='mt-[70px]' >
          {children}
        </div>
      </body>
    </html>
  );
}
