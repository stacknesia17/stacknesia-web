import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stacknesia',
  description: 'Two DBAs sharing real-world knowledge from 100+ production databases. No fluff, no theory — just what actually works.',
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}