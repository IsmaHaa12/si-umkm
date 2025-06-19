/* eslint-disable @typescript-eslint/no-unused-vars */
// app/pelatihan/page.tsx
'use client'

import React, { useEffect, useState } from 'react'

const dummyPelatihan = [
  {
    id: 1,
    judul: 'Strategi Digital Marketing untuk UMKM',
    deskripsi:
      'Pelatihan ini membahas cara memasarkan produk UMKM secara online menggunakan media sosial dan marketplace.',
    tanggal: '2025-07-10',
    lokasi: 'Online via Zoom',
    pemateri: 'Dewi Sartika, M.M.',
  },
  {
    id: 2,
    judul: 'Peningkatan Kualitas Produk UMKM',
    deskripsi:
      'Belajar bagaimana meningkatkan kualitas produk agar bisa bersaing di pasar nasional maupun internasional.',
    tanggal: '2025-07-20',
    lokasi: 'Balai UMKM Jakarta Selatan',
    pemateri: 'Ir. Bambang Sutrisno',
  },
  {
    id: 3,
    judul: 'Manajemen Keuangan untuk Pemula',
    deskripsi:
      'Sesi pelatihan praktis mengenai pencatatan keuangan usaha mikro agar lebih terorganisir dan efisien.',
    tanggal: '2025-08-05',
    lokasi: 'Kantor Dinas Koperasi',
    pemateri: 'Nina Karunia, SE., Ak.',
  },
]

export default function PelatihanPage() {
  const [list, setList] = useState(dummyPelatihan)

  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200 mb-8 text-center">
        Jadwal Pelatihan UMKM
      </h1>
      <div className="space-y-6">
        {list.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-900 shadow-md rounded-xl p-6 border-l-4 border-blue-600 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-1">{item.judul}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{item.deskripsi}</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 dark:text-gray-400">
              <p>
                <strong>Tanggal:</strong> {item.tanggal}
              </p>
              <p>
                <strong>Lokasi:</strong> {item.lokasi}
              </p>
              <p>
                <strong>Pemateri:</strong> {item.pemateri}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}