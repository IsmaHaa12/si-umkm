// app/dashboard/tambah-produk/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function TambahProdukPage() {
  const router = useRouter()
  const [form, setForm] = useState({
    namaProduk: '',
    deskripsiProduk: '',
    harga: '',
    kategori: '',
    pelaku: '',
    gambar: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.namaProduk || !form.deskripsiProduk || !form.harga || !form.kategori || !form.pelaku) {
      setError('Semua field kecuali gambar wajib diisi.')
      return
    }
    if (isNaN(Number(form.harga)) || Number(form.harga) <= 0) {
      setError('Harga harus berupa angka lebih dari 0.')
      return
    }

    setError('')

    const produkBaru = {
      id: Date.now().toString(),
      ...form,
      harga: Number(form.harga),
      rating: 0,
    }

    const existing = JSON.parse(localStorage.getItem('produk') || '[]')
    localStorage.setItem('produk', JSON.stringify([...existing, produkBaru]))

    alert('Produk berhasil ditambahkan!')
    router.push('/produk')
  }

  return (
    <section className="max-w-2xl mx-auto py-12 px-6">
      <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-6">
        Tambah Produk Baru
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <label className="block text-sm font-medium">Nama Produk</label>
          <input
            name="namaProduk"
            value={form.namaProduk}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Deskripsi Produk</label>
          <textarea
            name="deskripsiProduk"
            value={form.deskripsiProduk}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Harga</label>
            <input
              type="number"
              name="harga"
              value={form.harga}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              required
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Kategori</label>
            <input
              name="kategori"
              value={form.kategori}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Pelaku UMKM</label>
            <input
              name="pelaku"
              value={form.pelaku}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">URL Gambar</label>
            <input
              name="gambar"
              value={form.gambar}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
        >
          Simpan Produk
        </button>
      </form>
    </section>
  )
}