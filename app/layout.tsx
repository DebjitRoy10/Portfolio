import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Debjit Roy',
  description: 'See My Portfolio and connect with me',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Debjit Roy</title>
        <meta name="description" content="See My Portfolio and connect with me" />
      </head>
      <body>{children}</body>
    </html>
  )
}
