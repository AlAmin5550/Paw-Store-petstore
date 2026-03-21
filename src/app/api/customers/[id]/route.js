import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/connectDB';
import { ObjectId } from 'mongodb';

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    console.log('Attempting to delete customer with ID:', id);

    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      console.log('Invalid ObjectId format:', id);
      return NextResponse.json({ error: 'Invalid customer ID format' }, { status: 400 });
    }

    const db = await connectDB();

    // Delete the customer
    const result = await db.collection('users').deleteOne({
      _id: objectId
    });

    console.log('Delete result:', result);

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Customer not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Customer deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting customer:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}