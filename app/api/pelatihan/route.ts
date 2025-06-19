// app/api/pelatihan/route.ts
import { NextResponse } from 'next/server'

const pelatihanList = [
  {
    id: '1',
    nama: 'Pelatihan Dasar UMKM',
    deskripsi: 'Pelatihan dasar untuk pelaku usaha baru agar memahami strategi bisnis dan pencatatan keuangan sederhana.',
    tanggal: '2025-06-30',
    videoUrl: 'https://www.youtube.com/embed/WWeFnlp4sPs'
  },
  {
    id: '2',
    nama: 'Digital Marketing untuk UMKM',
    deskripsi: 'Panduan penggunaan media sosial dan strategi pemasaran digital yang efektif untuk bisnis kecil.',
    tanggal: '2025-07-05',
    videoUrl: 'https://www.youtube.com/embed/haT24eEt9Xo'
  },
  {
    id: '3',
    nama: 'Manajemen Keuangan Sederhana',
    deskripsi: 'Pelatihan pengelolaan keuangan untuk memastikan arus kas UMKM tetap sehat dan berkelanjutan.',
    tanggal: '2025-07-10',
    videoUrl: 'https://www.youtube.com/embed/haT24eEt9Xo'
  },
  {
    id: '4',
    nama: 'Strategi Branding Produk UMKM',
    deskripsi: 'Tips membangun merek produk agar lebih dikenal oleh konsumen dan meningkatkan nilai jual.',
    tanggal: '2025-07-15',
    videoUrl: 'https://www.youtube.com/embed/WWeFnlp4sPs'
  },
  {
    id: '5',
    nama: 'Pemanfaatan Marketplace untuk UMKM',
    deskripsi: 'Cara menjual produk di platform seperti Tokopedia, Shopee, dan Bukalapak secara efektif.',
    tanggal: '2025-07-20',
    videoUrl: 'https://www.youtube.com/embed/WWeFnlp4sPs'
  },
  {
    id: '6',
    nama: 'Legalitas dan Perizinan UMKM',
    deskripsi: 'Pelatihan penting untuk memahami proses legalitas seperti NIB dan sertifikasi halal.',
    tanggal: '2025-07-25',
    videoUrl: 'https://www.youtube.com/embed/WWeFnlp4sPs'
  }
]


export async function GET() {
  return NextResponse.json(pelatihanList)
}

export async function POST(req: Request) {
  const body = await req.json()
  const newData = {
    id: Date.now().toString(),
    nama: body.nama,
    deskripsi: body.deskripsi,
    tanggal: body.tanggal,
    videoUrl: body.videoUrl,
  }
  pelatihanList.push(newData)
  return NextResponse.json(newData, { status: 201 })
}
