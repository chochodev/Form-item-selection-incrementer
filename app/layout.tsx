// "use client";
import type { Metadata } from "next";
import "./globals.css";
import Header from './_layouts/header';
import Footer from './_layouts/footer';


export const metadata: Metadata = {
  title: "Event Planner",
  description: "Creates and organizes events for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className=''>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
