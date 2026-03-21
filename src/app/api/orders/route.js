import { connectDB } from '@/lib/connectDB';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const db = await connectDB();
    const orders = await db.collection('orders').find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    console.error('Error fetching orders:', error);
    const errorMessage = process.env.NODE_ENV === 'development' ? error.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { items, totalAmount, customer } = body;

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: 'Order items are required' }, { status: 400 });
    }

    if (typeof totalAmount !== 'number' || Number.isNaN(totalAmount) || totalAmount < 0) {
      return NextResponse.json({ error: 'A valid total amount is required' }, { status: 400 });
    }

    const normalizedItems = items.map((item) => ({
      productId: item.id,
      name: item.name,
      imageUrl: item.imageUrl,
      quantity: Number(item.quantity) || 0,
      price: Number(item.price) || 0,
      lineTotal: (Number(item.quantity) || 0) * (Number(item.price) || 0),
    }));

    const hasInvalidItem = normalizedItems.some(
      (item) => !item.productId || !item.name || item.quantity <= 0 || item.price < 0,
    );

    if (hasInvalidItem) {
      return NextResponse.json({ error: 'Invalid order items provided' }, { status: 400 });
    }

    const db = await connectDB();
    const result = await db.collection('orders').insertOne({
      items: normalizedItems,
      totalAmount,
      customer: {
        name: customer?.name || 'Guest',
        email: customer?.email || null,
      },
      status: 'placed',
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: 'Order placed successfully', orderId: result.insertedId },
      { status: 201 },
    );
  } catch (error) {
    console.error('Error placing order:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    const body = await request.json();
    const { orderId, status } = body;

    if (!orderId) {
      return NextResponse.json({ error: 'Order ID is required' }, { status: 400 });
    }

    if (!status) {
      return NextResponse.json({ error: 'Status is required' }, { status: 400 });
    }

    let objectId;
    try {
      objectId = new ObjectId(orderId);
    } catch {
      return NextResponse.json({ error: 'Invalid order ID format' }, { status: 400 });
    }

    const db = await connectDB();
    const result = await db.collection('orders').updateOne(
      { _id: objectId },
      {
        $set: {
          status,
          updatedAt: new Date(),
        },
      },
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Order status updated successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error updating order status:', error);
    const errorMessage = process.env.NODE_ENV === 'development' ? error.message : 'Internal server error';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
