// app/pelatihan/page.tsx
'use client'

import { useEffect, useState } from 'react'

interface Pelatihan {
  id: string
  nama: string
  deskripsi: string
  tanggal: string
  videoUrl?: string
}

export default function PelatihanPage() {
  const [data, setData] = useState<Pelatihan[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPelatihan = async () => {
      try {
        const res = await fetch('/api/pelatihan')
        if (!res.ok) throw new Error('Gagal mengambil data')
        const json = await res.json()
        setData(json)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Terjadi kesalahan yang tidak diketahui')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPelatihan()
  }, [])

  if (loading) return <div className="text-center py-10">Memuat data pelatihan...</div>
  if (error) return <div className="text-center text-red-500 py-10">{error}</div>

  return (
  <section className="max-w-7xl mx-auto py-12 px-6">
    <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-200 text-center mb-8">
      Daftar Program Pelatihan UMKM
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((p) => (
        <div
          key={p.id}
          className="bg-white dark:bg-gray-900 p-4 rounded-xl shadow hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {p.nama}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            {p.deskripsi?.slice(0, 100)}...
          </p>
          <p className="text-xs text-blue-600 dark:text-blue-300 mb-3">
            Tanggal: {new Date(p.tanggal).toLocaleDateString('id-ID')}
          </p>
          {p.videoUrl && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-md"
                src={p.videoUrl}
                title={`Video ${p.nama}`}
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
)

}
