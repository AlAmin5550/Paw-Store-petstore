import Image from "next/image";
import Link from "next/link";
import React from 'react'

export default function Hero() {
    return (
        <div>
            <div className="hero bg-muted min-h-screen lg:h-[767px ]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className="relative">
                        <Image src="/Shape1.svg" width={173.86} height={185.08} className="absolute top-4"></Image>
                        <h3 className="font-heading font-semibold text-primary">Paw Store</h3>
                        <h1 className="text-5xl font-bold font-heading">A pet store with <br /> everything you need!</h1>
                        <p className="py-6 text-secondary font-light font-body">
                            From healthy food to cozy accessories, we bring you hand-picked essentials to keep tails wagging and whiskers happy.
                        </p>
                        <Link href="/shop">
                            <button className="btn btn-neutral rounded-xl px-8 py-4">Shop Now</button>
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}
