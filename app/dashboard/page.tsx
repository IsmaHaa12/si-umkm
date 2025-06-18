/* eslint-disable @typescript-eslint/no-unused-vars */
// app/dashboard/page.tsx
'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [produkCount, setProdukCount] = useState(0)
  const [userCount, setUserCount] = useState(45)
  const [pelatihanCount, setPelatihanCount] = useState(7)

  useEffect(() => {
    const produk = JSON.parse(localStorage.getItem('produk') || '[]')
    setProdukCount(produk.length)
  }, [])

  return (
    <section className="max-w-6xl mx-auto py-12 px-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200">
          Dashboard Admin
        </h1>
        <Link
          href="/dashboard/tambah-produk"
          className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg text-sm"
        >
          + Tambah Produk
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Jumlah Produk</p>
          <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300">{produkCount}</h2>
        </div>
        <div className="p-6 bg-gradient-to-br from-green-100 to-green-200 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Jumlah UMKM</p>
          <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-300">{userCount}</h2>
        </div>
        <div className="p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Pelatihan Aktif</p>
          <h2 className="text-4xl font-extrabold text-yellow-700 dark:text-yellow-300">{pelatihanCount}</h2>
        </div>
      </div>
    </section>
  )
}
