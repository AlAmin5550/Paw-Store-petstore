import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useCart } from '@/Services/CartProvider'

export default function productCards({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="card bg-base-100 w-[306px] h-[398px] shadow-sm">
            <figure>
                <img
                    width={306}
                    height={306}
                    src={product.imageUrl || "/PuppyFood1.svg"}
                    alt={product.name || "Product"} />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex justify-between">
                    {product.name || "Premium Puppy Food"}
                    <button
                        type="button"
                        className="text-primary btn btn-ghost p-2"
                        onClick={() => addToCart(product)}
                        aria-label={`Add ${product.name || 'product'} to cart`}
                    >
                        <ShoppingCart />
                    </button>
                </h2>
                <div className="card-actions ">
                    <div className="text-sm text-secondary font-bold">${product.price || "19.99"}</div>
                </div>
            </div>
        </div>
    )
}
