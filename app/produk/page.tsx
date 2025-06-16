/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// app/produk/page.tsx
'use client'

import React, { useState } from 'react'
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

export default function ProdukPage() {
  const [keranjang, setKeranjang] = useState<any[]>([])
  const [keyword, setKeyword] = useState('')

  const tambahKeKeranjang = (produk: any) => {
    setKeranjang([...keranjang, produk])
  }

  const hasilFilter = dummyProduk.filter((item) =>
    item.namaProduk.toLowerCase().includes(keyword.toLowerCase())
  )

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200">
          Katalog Produk UMKM
        </h1>
        <div className="flex gap-4 items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Cari produk..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full md:w-64 px-4 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700"
          />
          <div className="text-sm bg-blue-800 text-white px-4 py-2 rounded-xl">
            Keranjang: {keranjang.length}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hasilFilter.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 text-white rounded-xl overflow-hidden shadow hover:shadow-lg transition relative"
          >
            <img src={item.gambar} alt={item.namaProduk} className="w-full h-44 object-cover" />
            <div className="p-5">
              <p className="text-sm text-blue-300 mb-1">{item.kategori}</p>
              <h2 className="text-xl font-semibold mb-1">{item.namaProduk}</h2>
              <p className="text-sm text-gray-400 mb-2">{item.pelaku}</p>
              <div className="flex items-center gap-1 text-green-400 mb-2">
                {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
              </div>
              <div className="flex justify-between items-center">
                <span className="bg-gray-800 px-3 py-1 rounded text-sm font-medium">
                  Rp{item.harga.toLocaleString()}
                </span>
                <Link
                  href={`/produk/${item.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </div>
        ))}

        {hasilFilter.length === 0 && (
          <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
            Tidak ada produk yang cocok.
          </p>
        )}
      </div>
    </section>
  )
}