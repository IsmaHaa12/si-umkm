/* eslint-disable @typescript-eslint/no-explicit-any */
// app/pelatihan/page.tsx
'use client'

import { useQuery, gql } from '@apollo/client'

const GET_PELATIHAN = gql`
  query GetPelatihan($keyword: String) {
    pelatihan(keyword: $keyword) {
      id
      nama
      deskripsi
      tanggal
    }
  }
`

export default function PelatihanPage() {
  const { data, loading, error } = useQuery(GET_PELATIHAN, {
    variables: { keyword: '' },
  })

  if (loading) return <div className="text-center py-10">Memuat data pelatihan...</div>
  if (error) return <div className="text-center text-red-500 py-10">Gagal memuat data.</div>

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200 text-center mb-8">
        Daftar Program Pelatihan UMKM
      </h1>
      <div className="space-y-6">
        {data.pelatihan.map((p: any) => (
          <div
            key={p.id}
            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {p.nama}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              {p.deskripsi?.slice(0, 150)}...
            </p>
            <p className="text-sm text-blue-600 dark:text-blue-300">
              Tanggal: {new Date(p.tanggal).toLocaleDateString('id-ID')}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}