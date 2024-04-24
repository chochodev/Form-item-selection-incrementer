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
      <body>
        <Router>
          <Header />
          <DataProvider>
            {children}
          </DataProvider>
          <Footer />
        </Router>
      </body>
    </html>
  );
}
