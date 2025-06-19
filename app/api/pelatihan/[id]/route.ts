// app/api/pelatihan/[id]/route.ts
import { NextResponse } from 'next/server'

let pelatihanList = [
  {
    id: '1',
    nama: 'Pelatihan Dasar UMKM',
    deskripsi: 'Pelatihan dasar untuk pelaku usaha baru',
    tanggal: '2025-06-30',
    videoUrl: 'https://www.youtube.com/embed/abcd1234'
  },
]

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const data = pelatihanList.find(p => p.id === params.id)
  if (!data) return NextResponse.json({ error: 'Data tidak ditemukan' }, { status: 404 })
  return NextResponse.json(data)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()
  const index = pelatihanList.findIndex(p => p.id === params.id)
  if (index === -1) return NextResponse.json({ error: 'Tidak ditemukan' }, { status: 404 })
  pelatihanList[index] = { ...pelatihanList[index], ...body }
  return NextResponse.json(pelatihanList[index])
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  pelatihanList = pelatihanList.filter(p => p.id !== params.id)
  return NextResponse.json({ message: 'Pelatihan dihapus' })
}
