import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Cards() {
    return (
        <div className="card bg-base-100 w-[306px] h-[398px] shadow-sm">
            <figure>
                <Image
                    width={306}
                    height={306}
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
    )
}
