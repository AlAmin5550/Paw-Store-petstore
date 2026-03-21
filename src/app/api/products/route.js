import { connectDB } from '@/lib/connectDB';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const db = await connectDB();
    const products = await db.collection('products').find({}).sort({ createdAt: -1 }).toArray();
    
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    const errorMessage = process.env.NODE_ENV === 'development' ? error.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const db = await connectDB();
    const body = await request.json();

    // Validate required fields
    const { name, category, price, animal, description } = body;
    if (!name || !category || !price || !animal || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert product into database
    const result = await db.collection('products').insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Product added successfully', productId: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error('Error adding product:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}