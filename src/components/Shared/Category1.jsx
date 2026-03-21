"use client"
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function Category1({ isHomepage = false }) {
    const router = useRouter();

    const categories = [
        { name: 'Accessories', src: '/Accessories.svg', alt: 'Accessories' },
        { name: 'Food', src: '/Food.svg', alt: 'Food' },
        { name: 'Furniture', src: '/Furniture.svg', alt: 'Furniture' },
        { name: 'Bags', src: '/Bags.svg', alt: 'Bags' }
    ];

    const handleCategoryClick = (categoryName) => {
        if (isHomepage) {
            // Navigate to shop page with category filter
            router.push(`/shop?category=${encodeURIComponent(categoryName)}`);
        }
    };

    return (
        <div className='flex flex-col gap-5 p-5 md:gap-10 md:p-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-3xl md:text-4xl lg:text-5xl'>Browse by category</h1>
            <div className='flex flex-col gap-5 items-center justify-between mx-auto md:gap-8 lg:flex-row lg:gap-15'>
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className={`card bg-muted w-[306px] h-[308px] shadow-sm rounded-3xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                            isHomepage ? 'hover:shadow-lg' : ''
                        }`}
                        onClick={() => handleCategoryClick(category.name)}
                    >
                        <figure>
                            <Image
                                width={306}
                                height={308}
                                src={category.src}
                                alt={category.alt} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title flex justify-between">
                                {category.name}
                                <div className="text-primary"><MoveRight /></div>
                            </h2>
                            <div className="card-actions">
                                <div className="text-sm text-gray-500">84 products</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
