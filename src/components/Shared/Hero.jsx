import Image from "next/image";
import Link from "next/link";
import React from 'react'

export default function Hero({ heading, description, buttonText, heroImage }) {
    return (
        <div className="hero bg-muted min-h-[640px] md:min-h-[660px] lg:min-h-[660px] relative overflow-hidden">

            {/* Decorative Shapes */}
            <Image
                src="/Shape1.svg"
                width={180}
                height={180}
                className="hidden lg:block absolute top-3 left-80 opacity-80"
                alt="Shape"
            />

            <Image
                src="/parroticon.svg"
                width={140}
                height={140}
                className="hidden lg:block absolute top-40 left-[45%] opacity-100"
                alt="Parrot Icon"
            />

            {/* Hero Content */}
            <div className="hero-content flex flex-col pt-30 pb-0 gap-14 items-center h-full w-full max-w-7xl  lg:flex-row lg:pt-16">

                {/* LEFT TEXT */}
                <div className=" text-center  space-y-4 lg:text-left lg:space-y-6 max-w-xl z-10">

                    <h3 className="font-heading font-semibold text-primary text-lg tracking-wide">
                        Paw Store
                    </h3>

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-heading leading-tight">
                        {heading || "A pet store with everything you need."}
                    </h1>

                    <p className="text-secondary font-light font-body text-base md:text-lg">
                        {description || "Discover a world of pet care and love at Paw Store, where we provide everything you need to keep your furry friends happy and healthy."}
                    </p>

                    <Link href="/shop">
                        <button className="btn btn-neutral rounded-xl px-8 py-6 text-lg shadow-md hover:scale-105 transition">
                            {buttonText || "Shop Now"}
                        </button>
                    </Link>

                </div>

                {/* RIGHT IMAGE */}
                {/* <div className="relative flex justify-center items-center lg:absolute lg:inset-y-0 lg:right-12 ">
                    <Image
                        src="/Pattern1.svg"
                        width={700}
                        height={700}
                        className="absolute z-0 bottom-0 right-0 w-90 sm:w-130 md:w-[520px] lg:w-[700px] max-w-none"
                        alt="Orange Blob"
                    />
                    <Image
                        src="/HeroImg1.svg"
                        width={700}
                        height={700}
                        className="relative lg:absolute lg:bottom-0 lg:right-38 w-50 md:w-[320px] lg:w-100 max-w-none object-contain"
                        alt="Hero Pets"
                    />
                </div> */}
                <div className="h-full flex flex-col justify-end items-center w-full md:w-[560px] lg:w-[700px] bg-[url('/Pattern1.svg')] bg-no-repeat bg-contain bg-bottom">
                    <Image
                        src={heroImage || "/HeroImg1.svg"}
                        width={700}
                        height={700}
                        className="object-contain w-[200px] md:w-[280px] lg:w-[420px]"
                        alt="Hero Pets"
                    />

                </div>

            </div>

            {/* Bottom Shape */}
            <Image
                src="/Shape2.svg"
                width={180}
                height={180}
                className="hidden lg:block absolute bottom-0 left-[35%] opacity-80"
                alt="Shape"
            />

        </div>

    )
}
