'use client'

import Footer from '@/components/Shared/Footer'
import Hero from '@/components/Shared/Hero'
import Navbar from '@/components/Shared/Navbar'
import React, { Suspense, useEffect, useState } from 'react'
import heroImg from '@/../public/HeroImg3.svg'
import ShopByPet from '@/components/Shared/ShopByPet'
import { useSearchParams } from 'next/navigation'
import Cards from '@/components/Shared/Cards'

function ShopPageContent() {
    const [products, setProducts] = useState([]);
    const searchParams = useSearchParams();
    const [selectedCategories, setSelectedCategories] = useState(() => {
        // Initialize from URL parameter or default to all categories
        const categoryParam = searchParams ? searchParams.get('category') : null;
        if (categoryParam) {
            return [categoryParam];
        }
        return ['Food', 'Accessories', 'Furniture', 'Bags'];
    });
    const [selectedAnimal, setSelectedAnimal] = useState(() => {
        // Initialize from URL parameter
        return searchParams ? searchParams.get('animal') : null;
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const handleCategoryChange = (category, isChecked) => {
        if (isChecked) {
            setSelectedCategories(prev => [...prev, category]);
        } else {
            setSelectedCategories(prev => prev.filter(cat => cat !== category));
        }
    };

    const handleAnimalSelect = (animal) => {
        setSelectedAnimal(prev => prev === animal ? null : animal);
    };

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategories.includes(product.category);
        const animalMatch = !selectedAnimal || product.animal === selectedAnimal;
        return categoryMatch && animalMatch;
    });

    const categories = ['Food', 'Accessories', 'Furniture', 'Bags'];

    const heading = "Your friendly and caring small pet store."
    const description = "At Paw Store, we understand that pets are more than just animals - they are cherished members of your family. That's why we are dedicated to providing the best products."
    return (
        <div>
            <Navbar />
            <Hero heading={heading} description={description} heroImage={heroImg} buttonLink={"/contact"}  buttonText={"Contact Us"}/>
            <ShopByPet selectedAnimal={selectedAnimal} onAnimalSelect={handleAnimalSelect} />
            <div className='flex flex-col max-w-7xl mx-auto p-5 lg:flex-row lg:p-3 gap-2'>
                <div className='flex flex-col gap-4 w-full lg:w-1/4'>
                    <h1 className='font-headings text-xl font-semibold'>Filter by categories</h1>
                    <ul className='space-y-2'>
                        {categories.map(category => (
                            <li key={category} className='flex items-center gap-2'>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    checked={selectedCategories.includes(category)}
                                    onChange={(e) => handleCategoryChange(category, e.target.checked)}
                                />
                                <label className='cursor-pointer'>{category}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-full lg:w-3/4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <Cards key={product._id} product={product} />
                            ))
                        ) : (
                            <p className='col-span-full text-center text-gray-500'>No products found in selected categories.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default function Page() {
    return (
        <Suspense fallback={<div className='p-5 text-center'>Loading shop...</div>}>
            <ShopPageContent />
        </Suspense>
    )
}
