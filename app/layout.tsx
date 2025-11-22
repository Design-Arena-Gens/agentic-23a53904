import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Photography by Simo | Professional Photography',
  description: 'Capturing life\'s precious moments through the lens. Professional photography services by Simo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
