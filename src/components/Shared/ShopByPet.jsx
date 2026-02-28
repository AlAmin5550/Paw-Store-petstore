import Image from 'next/image'
import React from 'react'

export default function ShopByPet() {
    colors: {
        orange1: 'F87537';
        orange2: 'FBA81F';

    };
    return (
        <div className='flex flex-col gap-5 p-5 md:p-10 md:gap-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl'>Shop By Pet</h1>
            <div className='flex flex-col justify-between mx-auto lg:flex-row'>
                <div className="flex flex-col items-center">
                    <div className="relative w-60 h-60 group">
                        {/* background spot */}
                        <div
                            className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-4 w-46 h-48 bg-gray-100 rotate-6 group-hover:bg-gradient-to-br group-hover:from-[#F87537] group-hover:via-[#FFB470] group-hover:to-[#FBA81F] transition-all duration-300"
                            style={{ borderRadius: "80% 30% 40% 40% / 60% 40% 60% 50%" }}
                        />
                        {/* image above the spot */}
                        <Image
                            src="/Catimg.svg"
                            alt="Cat"
                            width={196}
                            height={188}
                            className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-8 z-10 object-contain"
                        />
                    </div>
                    <span className="mt-1 text-secondary text-xl font-semibold">Cat</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-60 h-60 group justify-end">
                        {/* background spot */}
                        <div
                            className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-4 w-46 h-48 bg-gray-100 rotate-6 group-hover:bg-gradient-to-br group-hover:from-[#F87537] group-hover:via-[#FFB470] group-hover:to-[#FBA81F] transition-all duration-300"
                            style={{ borderRadius: "80% 30% 40% 40% / 60% 40% 60% 50%" }}
                        />
                        {/* image above the spot */}
                        <Image
                            src="/hamsterImg.svg"
                            alt="Hamster"
                            width={132}
                            height={160}
                            className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-8 z-10 object-contain"
                        />
                    </div>
                    <span className="mt-1 text-secondary text-xl font-semibold">Hamster</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-60 h-60 group">
                        {/* background spot */}
                        <div
                            className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-4 w-46 h-48 bg-gray-100 rotate-6 group-hover:bg-gradient-to-br group-hover:from-[#F87537] group-hover:via-[#FFB470] group-hover:to-[#FBA81F] transition-all duration-300"
                            style={{ borderRadius: "80% 30% 40% 40% / 60% 40% 60% 50%" }}
                        />
                        {/* image above the spot */}
                        <Image
                            src="/dogImg.svg"
                            alt="Dog"
                            width={134}
                            height={195}
                            className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-4 z-10 object-contain"
                        />
                    </div>
                    <span className="mt-1 text-secondary text-xl font-semibold">Dog</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-60 h-60 group">
                        {/* background spot */}
                        <div
                            className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-4 w-46 h-48 bg-gray-100 rotate-6 group-hover:bg-gradient-to-br group-hover:from-[#F87537] group-hover:via-[#FFB470] group-hover:to-[#FBA81F] transition-all duration-300"
                            style={{ borderRadius: "80% 30% 40% 40% / 60% 40% 60% 50%" }}
                        />
                        {/* image above the spot */}
                        <Image
                            src="/parrotImg.svg"
                            alt="Parrot"
                            width={209}
                            height={218}
                            className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-4 z-10 object-contain"
                        />
                    </div>
                    <span className="mt-1 text-secondary text-xl font-semibold">Parrot</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-60 h-60 group">
                        {/* background spot */}
                        <div
                            className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-4 w-46 h-48 bg-gray-100 rotate-6 group-hover:bg-gradient-to-br group-hover:from-[#F87537] group-hover:via-[#FFB470] group-hover:to-[#FBA81F] transition-all duration-300"
                            style={{ borderRadius: "80% 30% 40% 40% / 60% 40% 60% 50%" }}
                        />
                        {/* image above the spot */}
                        <Image
                            src="/rabbitImg.svg"
                            alt="Rabbit"
                            width={147}
                            height={200}
                            className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-4 z-10 object-contain"
                        />
                    </div>
                    <span className="mt-1 text-secondary text-xl font-semibold">Rabbit</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative w-60 h-60 group">
                        {/* background spot */}
                        <div
                            className="absolute left-1/2 top-0 -translate-x-1/2 translate-y-4 w-46 h-48 bg-gray-100 rotate-6 group-hover:bg-gradient-to-br group-hover:from-[#F87537] group-hover:via-[#FFB470] group-hover:to-[#FBA81F] transition-all duration-300"
                            style={{ borderRadius: "80% 30% 40% 40% / 60% 40% 60% 50%" }}
                        />
                        {/* image above the spot */}
                        <Image
                            src="/turtleImg.svg"
                            alt="Turtle"
                            width={243}
                            height={122}
                            className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-4 z-10 object-contain"
                        />
                    </div>
                    <span className="mt-1 text-secondary text-xl font-semibold">Turtle</span>
                </div>

            </div>



        </div>


    )
}
