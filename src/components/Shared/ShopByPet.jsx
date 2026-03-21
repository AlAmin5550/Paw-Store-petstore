"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

export default function ShopByPet({ selectedAnimal, onAnimalSelect, isHomepage = false }) {
    const router = useRouter();

    const pets = [
        { name: 'Cat', src: '/Catimg.svg', width: 196, height: 188 },
        { name: 'Hamster', src: '/hamsterImg.svg', width: 132, height: 160 },
        { name: 'Dog', src: '/dogImg.svg', width: 134, height: 195 },
        { name: 'Parrot', src: '/parrotImg.svg', width: 209, height: 218 },
        { name: 'Rabbit', src: '/rabbitImg.svg', width: 147, height: 200 },
        { name: 'Turtle', src: '/turtleImg.svg', width: 243, height: 122 }
    ];

    const handlePetClick = (petName) => {
        if (isHomepage) {
            // Navigate to shop page with animal filter
            router.push(`/shop?animal=${encodeURIComponent(petName)}`);
        } else {
            // Update filter on current page
            onAnimalSelect(petName);
        }
    };

    return (
        <div className='flex flex-col gap-5 p-5 md:p-10 md:gap-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-2xl md:text-3xl lg:text-4xl'>Shop By Pet</h1>
            <div className='flex flex-col justify-between mx-auto lg:flex-row'>
                {pets.map((pet) => (
                    <div
                        key={pet.name}
                        className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                            selectedAnimal === pet.name ? 'scale-105' : 'hover:scale-105'
                        }`}
                        onClick={() => handlePetClick(pet.name)}
                    >
                        <div className="relative w-60 h-60 group">
                            {/* background spot */}
                            <div
                                className={`absolute left-1/2 top-0 -translate-x-1/2 translate-y-4 w-46 h-48 rotate-6 transition-all duration-300 ${
                                    selectedAnimal === pet.name
                                        ? 'bg-gradient-to-br from-[#F87537] via-[#FFB470] to-[#FBA81F]'
                                        : 'bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-[#F87537] group-hover:via-[#FFB470] group-hover:to-[#FBA81F]'
                                }`}
                                style={{ borderRadius: "80% 30% 40% 40% / 60% 40% 60% 50%" }}
                            />
                            {/* image above the spot */}
                            <Image
                                src={pet.src}
                                alt={pet.name}
                                width={pet.width}
                                height={pet.height}
                                className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-4 z-10 object-contain"
                            />
                        </div>
                        <span className={`mt-1 text-xl font-semibold transition-colors duration-300 ${
                            selectedAnimal === pet.name ? 'text-primary' : 'text-secondary'
                        }`}>
                            {pet.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
