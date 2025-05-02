import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stop Bullying Now - Anti-Bullying Movement',
  description: 'Join our movement to dismantle bullying everywhere. Together, we can create safer spaces and support those affected.',
  authors: [{ name: 'Olanrewaju Shinaayomi', url: 'https://myinfo-kappa.vercel.app' }],
  keywords: ['bullying', 'stop bullying', 'anti-bullying', 'support', 'mental health'],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#7c3aed',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
