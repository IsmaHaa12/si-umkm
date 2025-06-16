// app/layout.tsx
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ApolloWrapper from '@/components/ApolloWrapper'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
        <ApolloWrapper>
          <Navbar />
          <main className="min-h-screen pt-4 px-6">{children}</main>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  )
}