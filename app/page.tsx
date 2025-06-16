import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-blue-200 mb-6">
        Selamat Datang di Si-UMKM
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
        Platform digital untuk mendukung pertumbuhan UMKM Indonesia melalui publikasi produk,
        pelatihan, dan dukungan pemerintah.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Link
          href="/produk"
          className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-xl transition"
        >
          Lihat Produk
        </Link>
        <Link
          href="/pelatihan"
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 px-6 rounded-xl transition"
        >
          Info Pelatihan
        </Link>
      </div>
    </section>
  )
}