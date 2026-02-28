import {  ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Featured() {
    return (
        <div className='flex flex-col gap-5 p-5 items-center md:p-10 md:gap-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-3xl md:text-4xl lg:text-5xl'>Featured Products</h1>
            <div className='flex flex-col gap-8 items-center  md:gap-8 lg:flex-row lg:gap-15'>
                <div className="card bg-base-100 w-[306px] lg:w-[416px] h-[508px] shadow-sm">
                    <figure>
                        <Image
                            width={416}
                            height={416}
                            src="/PuppyFood1.svg"
                            alt="Puppy Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Premium Puppy Food
                            <div className="text-primary "><ShoppingCart /></div>
                        </h2>
                        <div className="card-actions ">
                            <div className="text-sm text-secondary font-bold">$19.99</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-[306px] lg:w-[416px] h-[508px] shadow-sm">
                    <figure>
                        <Image
                            width={416}
                            height={416}
                            src="/Catfood1.svg"
                            alt="Cat Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Premium Cat Food
                            <div className="text-primary "><ShoppingCart /></div>
                        </h2>
                        <div className="card-actions ">
                            <div className="text-sm text-secondary font-bold">$24.99</div>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100  w-[306px] lg:w-[416px] h-[508px] shadow-sm">
                    <figure>
                        <Image
                            width={416}
                            height={416}
                            src="/DogFood1.svg"
                            alt="Dog Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Premium Dog Food
                            <div className="text-primary "><ShoppingCart /></div>
                        </h2>
                        <div className="card-actions ">
                            <div className="text-sm text-secondary font-bold">$24.99</div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
