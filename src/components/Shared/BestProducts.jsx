import React from 'react'
import Cards from './Cards'

export default function BestProducts() {
    const products = Array.from({length: 8}, (_,i) => ({ id: i+1 /* or real data */ }));
    return (
        <div className='flex flex-col gap-5 p-5 items-center md:p-10 md:gap-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl'>Best Selling Products</h1>
            <div  className='flex flex-col gap-8 items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4  md:gap-8 lg:flex-row lg:gap-15'>
                {
                    products.map(p=> <Cards key={p} />)
                }

            </div>

        </div>
    )
}
