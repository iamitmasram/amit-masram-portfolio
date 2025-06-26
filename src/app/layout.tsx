import './globals.css'
import type { Metadata } from 'next'
import AmitIcon from '@/assets/alog.ico'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Amit Masram",
  description: "Created with the help of Frontend Tribe",
  icons: {
    icon: AmitIcon.src, // Use the AmitIcon as the favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={AmitIcon.src} sizes="any" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}