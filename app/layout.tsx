import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans, GeistMono } from 'geist/font'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>{children}</body>
    </html>
  )
}
