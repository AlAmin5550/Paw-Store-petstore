import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Section4() {
    return (
        <div className='flex flex-col pt-5 bg-muted items-center justify-center gap-5 md:gap-8 md:pt-8 lg:gap-12 lg:p-16 lg:flex-row'>
            <div className="relative w-full h-[260px] md:h-[360px] lg:h-[450px] bg-[url('/ShapeSec4.svg')] bg-no-repeat bg-center bg-contain md:bg-cover flex items-center justify-center">
                <Image src={"/TwoCats.svg"} fill alt='TwoCats' className='object-contain' sizes='(max-width:640px) 80vw, (max-width:1024px) 50vw, 538px'>

                </Image>


            </div>
            <div className="space-y-4 text-center lg:text-left max-w-xl">

                <h3 className="font-heading font-semibold text-primary text-lg tracking-wide">
                    Paw Store
                </h3>

                <h1 className="text-3xl sm:text-2xl lg:text-5xl font-bold font-heading leading-tight">
                    The smarter way to shop for your pet.
                </h1>

                <p className="text-secondary text-sm font-body">
                    We’re passionate about making pets happier and healthier every day.
                    Our mission is to provide high-quality products, expert care, and a loving shopping experience.
                    From food to toys, every item is chosen with your pet’s comfort in mind.
                    Learn more about our story, values, and commitment to pet care.
                </p>

                <Link href="/about-us">
                    <button className="btn btn-neutral rounded-xl px-8 py-6 text-lg shadow-md hover:scale-105 transition">
                        Learn More
                    </button>
                </Link>

            </div>

        </div>
    )
}
