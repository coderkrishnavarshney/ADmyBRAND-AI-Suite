import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite',
  description: 'AI‑powered marketing tools to grow your business',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gradient-to-br from-white to-slate-100 text-gray-900 dark:from-gray-900 dark:to-black dark:text-gray-100'}>
        {children}
      </body>
    </html>
  );
}
