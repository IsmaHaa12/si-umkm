// app/login/page.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    if (email === 'admin@umkm.com' && password === 'admin123') {
      Cookies.set('token', 'dummy-jwt-token', { expires: 1 })
      router.push('/dashboard')
    } else {
      setError('Email atau password salah')
    }
  }

  return (
    <section className="max-w-md mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-center text-blue-800 dark:text-blue-200 mb-6">
        Login Admin
      </h1>
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow space-y-4"
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 rounded-md"
        >
          Masuk
        </button>
      </form>
    </section>
  )
}
