import '@/styles/globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head />
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
        <Navbar />
        <main className="min-h-screen pt-4 px-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}