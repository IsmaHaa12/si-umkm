/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// app/produk/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ProdukPage() {
  const [produk, setProduk] = useState<any[]>([])
  const [keranjang, setKeranjang] = useState<any[]>([])
  const [keyword, setKeyword] = useState('')
  const [lihatKeranjang, setLihatKeranjang] = useState(false)
  const [editId, setEditId] = useState<string | null>(null)
  const [editData, setEditData] = useState<any>({})

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('produk') || '[]')
    setProduk(data)

    const cart = JSON.parse(localStorage.getItem('keranjang') || '[]')
    setKeranjang(cart)

    const syncKeranjang = () => {
      const newCart = JSON.parse(localStorage.getItem('keranjang') || '[]')
      setKeranjang(newCart)
    }

    window.addEventListener('keranjang-updated', syncKeranjang)

    return () => {
      window.removeEventListener('keranjang-updated', syncKeranjang)
    }
  }, [])

  const dispatchKeranjangEvent = () => {
    window.dispatchEvent(new Event('keranjang-updated'))
  }

  const tambahKeKeranjang = (item: any) => {
    const updated = [...keranjang, item]
    setKeranjang(updated)
    localStorage.setItem('keranjang', JSON.stringify(updated))
    dispatchKeranjangEvent()
  }

  const hapusDariKeranjang = (index: number) => {
    const updated = [...keranjang]
    updated.splice(index, 1)
    setKeranjang(updated)
    localStorage.setItem('keranjang', JSON.stringify(updated))
    dispatchKeranjangEvent()
  }

  const hapusProduk = (id: string) => {
    const updated = produk.filter((item) => item.id !== id)
    setProduk(updated)
    localStorage.setItem('produk', JSON.stringify(updated))
  }

  const mulaiEdit = (item: any) => {
    setEditId(item.id)
    setEditData({ ...item })
  }

  const simpanEdit = () => {
    const updated = produk.map((item) =>
      item.id === editId ? editData : item
    )
    setProduk(updated)
    localStorage.setItem('produk', JSON.stringify(updated))
    setEditId(null)
  }

  const totalHarga = keranjang.reduce((total, item) => total + (item.harga || 0), 0)

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
            <>
              <ul className="space-y-2 mb-4">
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
              <div className="text-right font-semibold text-blue-700 dark:text-blue-300">
                Total: Rp{totalHarga.toLocaleString()}
              </div>
            </>
          )}
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hasilFilter.map((item) => (
          <div
            key={item.id}
            className="bg-gray-900 text-white rounded-xl overflow-hidden shadow hover:shadow-lg transition relative"
          >
            {editId === item.id ? (
              <div className="p-5 space-y-2">
                <input
                  className="w-full px-3 py-2 rounded bg-gray-800 text-white"
                  value={editData.namaProduk}
                  onChange={(e) => setEditData({ ...editData, namaProduk: e.target.value })}
                />
                <input
                  className="w-full px-3 py-2 rounded bg-gray-800 text-white"
                  value={editData.harga}
                  onChange={(e) => setEditData({ ...editData, harga: +e.target.value })}
                  type="number"
                />
                <input
                  className="w-full px-3 py-2 rounded bg-gray-800 text-white"
                  value={editData.kategori}
                  onChange={(e) => setEditData({ ...editData, kategori: e.target.value })}
                />
                <input
                  className="w-full px-3 py-2 rounded bg-gray-800 text-white"
                  value={editData.deskripsiProduk}
                  onChange={(e) => setEditData({ ...editData, deskripsiProduk: e.target.value })}
                  placeholder="Deskripsi produk"
                />
                <input
                  className="w-full px-3 py-2 rounded bg-gray-800 text-white"
                  value={editData.gambar}
                  onChange={(e) => setEditData({ ...editData, gambar: e.target.value })}
                  placeholder="URL gambar"
                />
                <div className="flex gap-2">
                  <button
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                    onClick={simpanEdit}
                  >
                    Simpan
                  </button>
                  <button
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded"
                    onClick={() => setEditId(null)}
                  >
                    Batal
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img src={item.gambar || '/placeholder.jpg'} alt={item.namaProduk} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <p className="text-sm text-blue-300 mb-1">{item.kategori}</p>
                  <h2 className="text-xl font-semibold mb-1">{item.namaProduk}</h2>
                  <p className="text-sm text-gray-400 mb-2">{item.pelaku}</p>
                  <p className="text-sm text-gray-300 mb-2">{item.deskripsiProduk}</p>
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
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-2 rounded"
                        onClick={() => mulaiEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-2 rounded"
                        onClick={() => hapusProduk(item.id)}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
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
