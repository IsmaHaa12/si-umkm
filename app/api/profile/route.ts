// app/api/profile/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    nama: 'Hardin',
    email: 'hardin@example.com',
    noHp: '08123456789',
    alamat: 'Purwokerto',
  })
}
