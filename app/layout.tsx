import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//css https://www.radix-ui.com/themes/docs/overview/getting-started
import '@radix-ui/themes/styles.css';
import './globals.css'
// import radix ui
import { Theme } from '@radix-ui/themes';
// page
import Navbar from './Navbar'

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
      <body className={inter.className}>
        <Theme appearance="light" accentColor="sky">
          <Navbar></Navbar>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  )
}
