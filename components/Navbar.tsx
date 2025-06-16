import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/">Si-UMKM</Link>
        </h1>
        <ul className="flex gap-6">
          <li><Link href="/produk" className="hover:underline">Produk</Link></li>
          <li><Link href="/pelatihan" className="hover:underline">Pelatihan</Link></li>
          <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link href="/profile" className="hover:underline">Profil</Link></li>
        </ul>
      </div>
    </nav>
  )
}