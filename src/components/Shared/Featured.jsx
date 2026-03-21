"use client"
import { ShoppingCart } from 'lucide-react'
import React, { useEffect, useState } from 'react'

export default function Featured() {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                // Filter for featured products and limit to 3
                const featured = data.products.filter(product => product.featured === true).slice(0, 3);
                setFeaturedProducts(featured);
            } catch (error) {
                console.error('Error fetching featured products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='flex flex-col gap-5 p-5 items-center md:p-10 md:gap-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-3xl md:text-4xl lg:text-5xl'>Featured Products</h1>
            <div className='flex flex-col gap-8 items-center md:gap-8 lg:flex-row lg:gap-15'>
                {featuredProducts.length > 0 ? (
                    featuredProducts.map((product, index) => (
                        <div key={product._id || index} className="card bg-base-100 w-[306px] lg:w-[416px] h-[508px] shadow-sm">
                            <figure>
                                <img
                                    width={416}
                                    height={416}
                                    src={product.imageUrl || product.image || "/PuppyFood1.svg"}
                                    alt={product.name || "Product"} />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title flex justify-between">
                                    {product.name || "Premium Pet Food"}
                                </h2>
                                <div className="card-actions">
                                    <div className="text-sm text-secondary font-bold">${product.price || "19.99"}</div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-gray-500'>No featured products available</p>
                )}
            </div>
        </div>
    )
}
