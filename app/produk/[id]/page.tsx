// app/produk/[id]/page.tsx
import ProdukDetail from '@/components/ProdukDetail'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const dummyProduk = [
  {
    id: '1',
    namaProduk: 'Kopi Gayo',
    deskripsiProduk: 'Kopi khas Aceh dengan aroma dan rasa kuat.',
    harga: 35000,
    gambar: '/placeholder.jpg',
    kategori: 'Minuman',
    pelaku: 'UMKM Gayo',
    rating: 4,
  },
  {
    id: '2',
    namaProduk: 'Keripik Pisang',
    deskripsiProduk: 'Cemilan renyah khas lokal.',
    harga: 15000,
    gambar: '/placeholder.jpg',
    kategori: 'Cemilan',
    pelaku: 'UMKM Pisang Jaya',
    rating: 5,
  },
]

export default function DetailProdukPage({ params }: { params: { id: string } }) {
  const produk = dummyProduk.find((p) => p.id === params.id)

  if (!produk) return notFound()

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
