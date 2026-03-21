import { connectDB } from '@/lib/connectDB';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await connectDB();
    const customers = await db.collection('users').find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({ customers }, { status: 200 });
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}