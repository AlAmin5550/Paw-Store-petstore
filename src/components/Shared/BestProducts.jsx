"use client"
import React, { useEffect, useState } from 'react'
import Cards from './productCards'

export default function BestProducts() {
    const [bestSellingProducts, setBestSellingProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                // Filter for best-selling products (assuming there's a bestSelling field)
                const bestSelling = data.products.filter(product => product.bestSelling === true);
                setBestSellingProducts(bestSelling.slice(0, 8)); // Limit to 8 products
            } catch (error) {
                console.error('Error fetching best-selling products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='flex flex-col gap-5 p-5 items-center md:p-10 md:gap-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl'>Best Selling Products</h1>
            <div className='flex flex-col gap-8 items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 md:gap-8 lg:flex-row lg:gap-15'>
                {bestSellingProducts.length > 0 ? (
                    bestSellingProducts.map(product => <Cards key={product._id} product={product} />)
                ) : (
                    <p className='text-gray-500'>No best-selling products available</p>
                )}
            </div>
        </div>
    )
}
