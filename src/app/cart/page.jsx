'use client'

import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import { useCart } from '@/Services/CartProvider'
import { Trash2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function CartPage() {
    const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
    const { data: session } = useSession();
    const router = useRouter();
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);
    const [orderPlacedMessage, setOrderPlacedMessage] = useState('');

    const handlePlaceOrder = async () => {
        if (cartItems.length === 0 || isPlacingOrder) {
            return;
        }

        setIsPlacingOrder(true);
        setOrderPlacedMessage('');

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems,
                    totalAmount: cartTotal,
                    customer: {
                        name: session?.user?.name || 'Guest',
                        email: session?.user?.email || null,
                    },
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data?.error || 'Failed to place order');
            }

            clearCart();
            setOrderPlacedMessage('Your order has been placed successfully.');
            toast.success('Order placed successfully!');
            setTimeout(() => {
                router.push('/');
            }, 1500);
        } catch (error) {
            toast.error(error.message || 'Could not place order. Please try again.');
        } finally {
            setIsPlacingOrder(false);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto px-4 pt-36 pb-12'>
                <div className='flex items-center justify-between mb-8'>
                    <h1 className='font-heading font-bold text-3xl md:text-4xl'>Your Shopping Cart</h1>
                    {cartItems.length > 0 && (
                        <button onClick={clearCart} className='btn btn-neutral  btn-sm'>
                            Clear Cart
                        </button>
                    )}
                </div>

                {cartItems.length === 0 ? (
                    <div className='card bg-base-100 p-8 text-center shadow-sm'>
                        <p className='text-lg text-secondary mb-4'>Your cart is empty.</p>
                        <Link href='/shop' className='btn btn-primary'>Continue Shopping</Link>
                    </div>
                ) : (
                    <div className='flex flex-col lg:flex-row '>
                        <div className='flex flex-col gap-2 w-3/4'>
                            {cartItems.map((item) => (
                                <div key={item.id} className='card bg-base-100 shadow-sm p-4 w-200'>
                                    <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
                                        <div className='flex items-center gap-4'>
                                            <img src={item.imageUrl} alt={item.name} width={72} height={72} className='rounded-lg object-cover' />
                                            <div>
                                                <h2 className='font-semibold text-lg'>{item.name}</h2>
                                                <p className='text-secondary'>${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center gap-3'>
                                            <button className='btn btn-sm' onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                            <span className='font-semibold min-w-6 text-center'>{item.quantity}</span>
                                            <button className='btn btn-sm' onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                        </div>

                                        <div className='flex items-center gap-4'>
                                            <p className='font-bold'>${(item.price * item.quantity).toFixed(2)}</p>
                                            <button className='btn btn-ghost btn-sm text-error' onClick={() => removeFromCart(item.id)}>
                                                <Trash2 />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className='card bg-base-100 shadow-sm p-6 mt-2 lg:mt-0 lg:w-100 lg:h-fit lg:ml-6'>
                            <div className='flex flex-col gap-4'>
                                <h2 className='font-heading font-bold text-lg'>Order Summary</h2>
                                <div className='space-y-3'>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base'>Subtotal:</span>
                                        <span className='font-medium'>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-base'>Shipping:</span>
                                        <span className='font-medium'>$0.00</span>
                                    </div>
                                    <div className='flex justify-between items-center border-b pb-3'>
                                        <span className='text-base'>Tax:</span>
                                        <span className='font-medium'>$0.00</span>
                                    </div>
                                    <div className='flex justify-between items-center pt-2'>
                                        <span className='font-semibold text-lg'>Total:</span>
                                        <span className='font-bold text-xl text-primary'>${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    className='btn btn-neutral w-full mt-4'
                                    onClick={handlePlaceOrder}
                                    disabled={isPlacingOrder}
                                >
                                    {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
                                </button>
                                {orderPlacedMessage && (
                                    <p className='text-success text-sm mt-2'>{orderPlacedMessage}</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}
