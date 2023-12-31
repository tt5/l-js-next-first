import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { createContext } from 'vm'

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
      <body>
    <nav>
      <Link href="/">home</Link>
      <Link href="/blog">blog</Link>
      <Link href="/todos">todos</Link>
    </nav>
      {children}
      <footer><div>its</div><div>like</div><div>that</div></footer>
      </body>
    </html>
  )
}
