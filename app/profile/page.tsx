// app/profile/page.tsx
'use client'

import { useEffect, useState } from 'react'

interface UserProfile {
  nama: string
  email: string
  noHp: string
  alamat: string
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)

  useEffect(() => {
    // Contoh fetch profil dari backend (ganti URL sesuai API kamu)
    fetch('/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error('Gagal fetch profil:', err))
  }, [])

  if (!profile) return <div className="text-center py-10">Memuat data profil...</div>

  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-200 mb-8">
        Profil Pengguna
      </h1>
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        <div className="mb-4">
          <span className="font-medium text-gray-700 dark:text-gray-300">Nama:</span>
          <p className="text-lg text-gray-900 dark:text-white">{profile.nama}</p>
        </div>
        <div className="mb-4">
          <span className="font-medium text-gray-700 dark:text-gray-300">Email:</span>
          <p className="text-lg text-gray-900 dark:text-white">{profile.email}</p>
        </div>
        <div className="mb-4">
          <span className="font-medium text-gray-700 dark:text-gray-300">No. HP:</span>
          <p className="text-lg text-gray-900 dark:text-white">{profile.noHp}</p>
        </div>
        <div>
          <span className="font-medium text-gray-700 dark:text-gray-300">Alamat:</span>
          <p className="text-lg text-gray-900 dark:text-white">{profile.alamat}</p>
        </div>
      </div>
    </section>
  )
}
