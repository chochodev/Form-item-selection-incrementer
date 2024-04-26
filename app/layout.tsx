"use client";

import "./globals.css";
import Header from "./_layouts/header";
import Footer from "./_layouts/footer";
import Head from 'next/head';
import { DataProvider } from "./useContext";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/redux/store'; // Import your store

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Event Planner</title>
        <meta name="description" content="Creates and organizes events for you" />
      </Head>
      
      <body className='relative '>
      <Provider store={store}>
        <Router>
          <Header />
          <DataProvider>
            <section className='flex flex-col justify-center items-center bg-slate-200 px-[0.875rem] sm:px-[1.5rem] lg:px-[3rem]'>
              {children}
            </section>
          </DataProvider>
          <Footer />
        </Router>
      </Provider>
      </body>
    </html>
  );
}
