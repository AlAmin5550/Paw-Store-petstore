import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import { ObjectId } from 'mongodb';

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    console.log('Attempting to delete product with ID:', id);

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.log('Invalid ObjectId format:', id);
      return NextResponse.json({ error: 'Invalid product ID format' }, { status: 400 });
    }

    const db = await connectDB();

    // Delete the product
    const result = await db.collection('products').deleteOne({
      _id: objectId
    });

    console.log('Delete result:', result);

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}