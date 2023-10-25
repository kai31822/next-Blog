import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//css https://www.radix-ui.com/themes/docs/overview/getting-started
import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
// import radix ui
import { Theme } from '@radix-ui/themes';
// page
import Navbar from './Navbar'
//middleware
import Providers from '@/app/components/Providers'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Kai\'s Blog',
  description: '對生活沒幫助的地方...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Providers>
          <Theme appearance="light" accentColor="sky">
            <Navbar></Navbar>
            <main>{children}</main>
          </Theme>
        </Providers>
      </body>
    </html>
  )
}
