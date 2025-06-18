/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// app/produk/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ProdukPage() {
  const [produk, setProduk] = useState<any[]>([])
  const [keranjang, setKeranjang] = useState<any[]>([])
  const [keyword, setKeyword] = useState('')
  const [lihatKeranjang, setLihatKeranjang] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('produk') || '[]')
    setProduk(data)

    const cart = JSON.parse(localStorage.getItem('keranjang') || '[]')
    setKeranjang(cart)
  }, [])

  const tambahKeKeranjang = (item: any) => {
    const updated = [...keranjang, item]
    setKeranjang(updated)
    localStorage.setItem('keranjang', JSON.stringify(updated))
  }

  const hapusDariKeranjang = (index: number) => {
    const updated = [...keranjang]
    updated.splice(index, 1)
    setKeranjang(updated)
    localStorage.setItem('keranjang', JSON.stringify(updated))
  }

  const hasilFilter = produk.filter((item) =>
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
          <button
            onClick={() => setLihatKeranjang(!lihatKeranjang)}
            className="text-sm bg-blue-800 text-white px-4 py-2 rounded-xl"
          >
            Keranjang: {keranjang.length}
          </button>
        </div>
      </div>

      {lihatKeranjang && (
        <div className="mb-10 bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold mb-3">Isi Keranjang</h2>
          {keranjang.length === 0 ? (
            <p className="text-gray-500">Keranjang masih kosong.</p>
          ) : (
            <ul className="space-y-2">
              {keranjang.map((item, index) => (
                <li key={index} className="text-sm flex justify-between items-center border-b pb-1">
                  <div>
                    <span>{item.namaProduk}</span>
                    <span className="text-blue-600 ml-2">Rp{item.harga.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => hapusDariKeranjang(index)}
                    className="text-red-500 hover:text-red-700 text-xs"
                  >
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hasilFilter.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 text-white rounded-xl overflow-hidden shadow hover:shadow-lg transition relative"
          >
            <img src={item.gambar || '/placeholder.jpg'} alt={item.namaProduk} className="w-full h-44 object-cover" />
            <div className="p-5">
              <p className="text-sm text-blue-300 mb-1">{item.kategori}</p>
              <h2 className="text-xl font-semibold mb-1">{item.namaProduk}</h2>
              <p className="text-sm text-gray-400 mb-2">{item.pelaku}</p>
              <div className="flex items-center gap-1 text-green-400 mb-2">
                {'★'.repeat(item.rating || 0)}{'☆'.repeat(5 - (item.rating || 0))}
              </div>
              <div className="flex justify-between items-center gap-2">
                <span className="bg-gray-800 px-3 py-1 rounded text-sm font-medium">
                  Rp{item.harga.toLocaleString()}
                </span>
                <div className="flex gap-2">
                  <Link
                    href={`/produk/${item.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-2 rounded"
                  >
                    Detail
                  </Link>
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded"
                    onClick={() => tambahKeKeranjang(item)}
                  >
                    + Keranjang
                  </button>
                </div>
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