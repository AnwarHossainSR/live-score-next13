import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { Navbar, News, Sidebar } from '@/components';
import type { ChildrenProps } from '@/types';

export const metadata = {
  description:
    'Live score, fixtures, results, statistics and news - Live Score',
  keywords: 'Live score, fixtures, results, statistics and news - Live Score',
  title: 'Live score, fixtures, results, statistics and news - Live Score',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
});

export default async function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-2 md:px-16 md:py-2 text-textPrimary">
          <Navbar />
          <section className="flex space-x-4">
            <Sidebar />
            {children}
            <News />
          </section>
        </main>
      </body>
    </html>
  );
}
