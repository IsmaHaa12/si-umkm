/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'

import { useRouter } from 'next/navigation'

export default function ProdukDetail({ produk }: { produk: any }) {
  const router = useRouter()

  const tambahKeKeranjang = () => {
    const existing = JSON.parse(localStorage.getItem('keranjang') || '[]')
    const updated = [...existing, produk]
    localStorage.setItem('keranjang', JSON.stringify(updated))
    alert('Produk ditambahkan ke keranjang!')
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 max-w-4xl mx-auto">
      <img src={produk.gambar || '/placeholder.jpg'} className="w-full h-72 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2">{produk.namaProduk}</h1>
      <p className="text-sm text-gray-500 mb-1">{produk.kategori} | {produk.pelaku}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{produk.deskripsiProduk}</p>
      <p className="text-xl font-bold text-blue-700 mb-6">Rp{produk.harga.toLocaleString()}</p>
      <div className="flex gap-4">
        <button
          onClick={() => router.push('/produk')}
          className="bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded"
        >
          Kembali ke Katalog
        </button>
        <button
          onClick={tambahKeKeranjang}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          + Keranjang
        </button>
      </div>
    </div>
  )
}
