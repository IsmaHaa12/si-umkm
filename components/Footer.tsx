export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300 text-sm text-center py-6 mt-16">
        <div className="max-w-7xl mx-auto">
          &copy; {new Date().getFullYear()} Si-UMKM. Dibuat oleh Tim Mahasiswa.
        </div>
      </footer>
    )
}