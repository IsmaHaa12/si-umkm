// app/api/pelatihan/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'

let pelatihanList = [
  {
    id: '1',
    nama: 'Pelatihan Dasar UMKM',
    deskripsi: 'Pelatihan dasar untuk pelaku usaha baru',
    tanggal: '2025-06-30',
    videoUrl: 'https://www.youtube.com/embed/abcd1234'
  },
]

function getIdFromUrl(req: NextRequest) {
  return req.nextUrl.pathname.split('/').pop() || ''
}

export async function GET(req: NextRequest) {
  const id = getIdFromUrl(req)
  const data = pelatihanList.find(p => p.id === id)
  if (!data) return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 })
  return NextResponse.json(data)
}

export async function PUT(req: NextRequest) {
  const id = getIdFromUrl(req)
  const body = await req.json()
  const index = pelatihanList.findIndex(p => p.id === id)
  if (index === -1) return NextResponse.json({ error: 'Tidak ditemukan' }, { status: 404 })
  pelatihanList[index] = { ...pelatihanList[index], ...body }
  return NextResponse.json(pelatihanList[index])
}

export async function DELETE(req: NextRequest) {
  const id = getIdFromUrl(req)
  pelatihanList = pelatihanList.filter(p => p.id !== id)
  return NextResponse.json({ message: 'Pelatihan dihapus' })
}
