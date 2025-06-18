/* eslint-disable @typescript-eslint/no-explicit-any */
// app/produk/[id]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import ProdukDetail from '@/components/ProdukDetail'
import Link from 'next/link'

export default function DetailProdukPage() {
  const params = useParams()
  const router = useRouter()
  const [produk, setProduk] = useState<any | null>(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('produk') || '[]')
    const found = data.find((p: any) => p.id === params.id)
    if (!found) {
      router.push('/produk')
    } else {
      setProduk(found)
    }
  }, [params.id, router])

  if (!produk) return <p className="text-center py-10 text-gray-500">Memuat produk...</p>

  return (
    <section className="py-12 px-4">
      <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6 space-x-1">
        <Link href="/" className="hover:underline text-blue-600">Beranda</Link>
        <span>{'>'}</span>
        <Link href="/produk" className="hover:underline text-blue-600">Produk</Link>
        <span>{'>'}</span>
        <span className="text-gray-800 dark:text-white font-medium">{produk.namaProduk}</span>
      </nav>

      <ProdukDetail produk={produk} />
    </section>
  )
}
