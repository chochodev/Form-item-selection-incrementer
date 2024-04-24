"use client";

// import type { Metadata } from "next";
import "./globals.css";
import Header from "./_layouts/header";
import Footer from "./_layouts/footer";
import { DataProvider } from "./useContext";
import { BrowserRouter as Router } from 'react-router-dom';

// export const metadata: Metadata = {
//   title: "Event Planner",
//   description: "Creates and organizes events for you",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='relative '>
        <Router>
          <Header />
          <DataProvider>
            <section className='flex flex-col justify-center items-center bg-slate-200 px-[1.5rem] sm:px-[3rem] lg:px-[4rem]'>
              {children}
            </section>
          </DataProvider>
          <Footer />
        </Router>
      </body>
    </html>
  );
}
