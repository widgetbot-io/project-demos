import React from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import NavBar from '@/components/NavBar';

const inter = Inter({ subsets: ['latin'] });

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>WidgetBot Event Demo</title>
      </Head>

      <NavBar />

      <main>
        {children}
      </main>
    </div>
  );
}
