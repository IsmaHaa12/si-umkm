/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// app/profile/page.tsx
'use client'

import React, { useState, useEffect } from 'react'

export default function ProfilePage() {
  const defaultProfile = {
    nama: 'Siti Nur Aisyah',
    email: 'aisyah@umkm.com',
    telepon: '081234567890',
    alamat: 'Jl. Melati No. 5, Jakarta',
    foto: '/profile.jpg',
    bio: 'Pelaku UMKM bidang kuliner dengan spesialisasi makanan tradisional.'
  }

  const [profile, setProfile] = useState(defaultProfile)
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('profile')
    if (stored) setProfile(JSON.parse(stored))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setProfile((prev: any) => ({ ...prev, foto: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    localStorage.setItem('profile', JSON.stringify(profile))
    setEditMode(false)
  }

  return (
    <section className="max-w-3xl mx-auto py-12 px-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 flex flex-col items-center">
        <img
          src={profile.foto}
          alt="Foto Profil"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-600"
        />
        {editMode && (
          <input
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
            className="mb-4 text-sm"
          />
        )}

        {editMode ? (
          <input
            type="text"
            name="nama"
            value={profile.nama}
            onChange={handleChange}
            className="text-2xl font-bold text-center text-blue-800 dark:text-blue-200 mb-1 bg-transparent border-b focus:outline-none"
          />
        ) : (
          <h1 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-1">{profile.nama}</h1>
        )}
        {editMode ? (
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="text-gray-600 dark:text-gray-300 text-sm mb-4 w-full text-center bg-transparent border-b focus:outline-none"
          />
        ) : (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{profile.bio}</p>
        )}

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="text-blue-800 dark:text-blue-200 font-medium w-full bg-transparent focus:outline-none"
              />
            ) : (
              <p className="text-blue-800 dark:text-blue-200 font-medium">{profile.email}</p>
            )}
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Telepon</p>
            {editMode ? (
              <input
                type="text"
                name="telepon"
                value={profile.telepon}
                onChange={handleChange}
                className="text-blue-800 dark:text-blue-200 font-medium w-full bg-transparent focus:outline-none"
              />
            ) : (
              <p className="text-blue-800 dark:text-blue-200 font-medium">{profile.telepon}</p>
            )}
          </div>
          <div className="col-span-full bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Alamat</p>
            {editMode ? (
              <input
                type="text"
                name="alamat"
                value={profile.alamat}
                onChange={handleChange}
                className="text-blue-800 dark:text-blue-200 font-medium w-full bg-transparent focus:outline-none"
              />
            ) : (
              <p className="text-blue-800 dark:text-blue-200 font-medium">{profile.alamat}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          {editMode ? (
            <>
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded mr-2"
              >
                Simpan
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded"
              >
                Batal
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded"
            >
              Edit Profil
            </button>
          )}
        </div>
      </div>
    </section>
  )
}