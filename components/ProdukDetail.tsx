/* eslint-disable @next/next/no-img-element */
// components/ProdukDetail.tsx
'use client'

import React, { useState } from 'react'

type ProdukDetailProps = {
  produk: {
    id: string
    namaProduk: string
    deskripsiProduk: string
    harga: number
    gambar?: string
    kategori: string
    pelaku: string
    rating: number
  }
}

export default function ProdukDetail({ produk }: ProdukDetailProps) {
  const [rating, setRating] = useState(produk.rating)
  const [hovered, setHovered] = useState<number | null>(null)

  const handleRate = (value: number) => {
    setRating(value)
    alert(`Kamu memberikan rating ${value} untuk ${produk.namaProduk}`)
    // Di sini bisa ditambahkan POST ke API
  }

  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-6 space-y-4">
      <img
        src={produk.gambar || '/placeholder.jpg'}
        alt={produk.namaProduk}
        className="w-full h-64 object-cover rounded"
      />

      <div className="space-y-2">
        <p className="text-sm text-blue-500 font-medium">{produk.kategori}</p>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{produk.namaProduk}</h2>
        <p className="text-gray-500 dark:text-gray-300 text-sm">oleh {produk.pelaku}</p>
        <div className="flex items-center gap-1 text-yellow-400">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => handleRate(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="text-2xl focus:outline-none"
            >
              {i <= (hovered ?? rating) ? '★' : '☆'}
            </button>
          ))}
        </div>
        <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
          {produk.deskripsiProduk}
        </p>
        <div className="text-xl font-semibold text-blue-700 dark:text-blue-300">
          Rp{produk.harga.toLocaleString()}
        </div>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  )
}