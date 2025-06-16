/* eslint-disable @typescript-eslint/no-explicit-any */
// app/produk/page.tsx
import React from 'react'
import ProdukCard from '@/components/ProductCard'

// Ganti fetch dengan dummy data agar tidak error saat testing lokal
async function getProduk() {
  return [
    {
      id: '1',
      namaProduk: 'Kopi Gayo',
      deskripsiProduk: 'Kopi asli dari Aceh dengan cita rasa khas dan aroma kuat.',
      harga: 35000,
      gambar: '/placeholder.jpg',
    },
    {
      id: '2',
      namaProduk: 'Keripik Pisang',
      deskripsiProduk: 'Cemilan renyah khas UMKM lokal yang gurih dan manis.',
      harga: 15000,
      gambar: '/placeholder.jpg',
    },
    {
      id: '3',
      namaProduk: 'Batik Tulis Pekalongan',
      deskripsiProduk: 'Batik asli buatan tangan dari pengrajin lokal Pekalongan.',
      harga: 150000,
      gambar: '/placeholder.jpg',
    },
  ]
}

export default async function ProdukPage() {
  const produk = await getProduk()

  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-800 dark:text-blue-200">
        Katalog Produk UMKM
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {produk.map((item: any) => (
          <ProdukCard
            key={item.id}
            id={item.id}
            namaProduk={item.namaProduk}
            deskripsiProduk={item.deskripsiProduk}
            harga={item.harga}
            gambar={item.gambar}
          />
        ))}
      </div>
    </section>
  )
}
