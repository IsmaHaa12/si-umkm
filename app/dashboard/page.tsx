// app/dashboard/page.tsx
import React from 'react'

// Ganti dengan dummy data agar halaman tidak 404
async function getDashboardStats() {
  return {
    produk: 123,
    user: 45,
    pelatihan: 7,
  }
}

export default async function DashboardPage() {
  const stats = await getDashboardStats()

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-8 text-center">
        Dashboard Admin
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-lg text-gray-500 dark:text-gray-300">Jumlah Produk</h2>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stats.produk}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-lg text-gray-500 dark:text-gray-300">Jumlah UMKM</h2>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stats.user}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-lg text-gray-500 dark:text-gray-300">Pelatihan Aktif</h2>
          <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stats.pelatihan}</p>
        </div>
      </div>
    </section>
  )
}
