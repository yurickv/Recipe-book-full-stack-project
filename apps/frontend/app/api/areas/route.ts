export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
const API_URL = process.env.NEXT_API_URL || 'http://localhost:3001';

export async function GET() {
  const res = await fetch(`${API_URL}/api/areas`);
  const data = await res.json();
  return NextResponse.json(data);
}
