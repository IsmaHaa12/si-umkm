/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
// components/ProdukCard.tsx
import React from 'react'

type ProdukCardProps = {
  id: string
  namaProduk: string
  deskripsiProduk: string
  harga: number
  gambar?: string
}

export default function ProdukCard({ id, namaProduk, deskripsiProduk, harga, gambar }: ProdukCardProps) {
  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <img
        src={gambar || '/placeholder.jpg'}
        alt={namaProduk}
        className="w-full h-52 object-cover"
      />
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          {namaProduk}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
          {deskripsiProduk?.slice(0, 100) || 'Tanpa deskripsi'}...
        </p>
        <div className="text-base font-bold text-blue-700 dark:text-blue-300">
          Rp{harga.toLocaleString()}
        </div>
      </div>
    </div>
  )
}
