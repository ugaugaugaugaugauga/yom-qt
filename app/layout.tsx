import type { Metadata } from 'next'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { koKR } from '@clerk/localizations'
import { Noto_Sans_KR } from 'next/font/google'

const inter = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <ClerkProvider localization={koKR}>
        <body className={inter.className}>{children}</body>
      </ClerkProvider>
    </html>
  )
}
