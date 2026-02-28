import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Category1() {
    return (
        <div className='flex flex-col gap-5 p-5 md:gap-10 md:p-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-3xl md:text-4xl lg:text-5xl'>Browse by category</h1>
            <div className='flex flex-col gap-5 items-center justify-between mx-auto md:gap-8 lg:flex-row lg:gap-15'>
                <div className="card bg-muted w-[306px] h-[308px] shadow-sm rounded-3xl">
                    <figure>
                        <Image
                            width={306}
                            height={308}
                            src="/Accessories.svg"
                            alt="Accessories" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Accessories
                            <div className="text-primary "><MoveRight /></div>
                        </h2>
                        <div className="card-actions ">
                            <div className="text-sm text-gray-500">84 products</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-muted w-[306px] h-[308px] shadow-sm rounded-3xl">
                    <figure>
                        <Image
                            width={306}
                            height={308}
                            src="/Food.svg"
                            alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Food
                            <div className="text-primary "><MoveRight /></div>
                        </h2>
                        <div className="card-actions ">
                            <div className="text-sm text-gray-500">84 products</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-muted w-[306px] h-[308px] shadow-sm rounded-3xl">
                    <figure>
                        <Image
                            width={306}
                            height={308}
                            src="/Furniture.svg"
                            alt="Furniture" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Furniture
                            <div className="text-primary "><MoveRight /></div>
                        </h2>
                        <div className="card-actions ">
                            <div className="text-sm text-gray-500">84 products</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-muted w-[306px] h-[308px] shadow-sm rounded-3xl">
                    <figure>
                        <Image
                            width={306}
                            height={308}
                            src="/Bags.svg"
                            alt="Bags" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Bags
                            <div className="text-primary "><MoveRight /></div>
                        </h2>
                        <div className="card-actions ">
                            <div className="text-sm text-gray-500">84 products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
