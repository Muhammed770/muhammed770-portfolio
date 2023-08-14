import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
import Navbar from '@/components/navbar';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammeds Portfolio',
  description: 'software engineer and a full-stack web developer',
}
//layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Providers>
          <Navbar></Navbar>
          {children}
        </Providers>
      </body>
    </html>
  )
}
