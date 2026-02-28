import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewsSection() {
    return (
        <div className='flex flex-col gap-5 p-5 items-center md:p-10 md:gap-10 lg:p-16 lg:gap-15'>
            <h1 className='font-heading font-bold text-3xl md:text-4xl lg:text-5xl'>News and Blogs</h1>
            <div className='flex flex-col justify-between items-center gap-5 lg:gap-10 lg:flex-row'>
                <Link href="https://www.petmd.com/dog/general-health/whelping" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <div>
                            <Image
                                src="/whelping.jpg"
                                alt="whelping"
                                width={416}
                                height={260}
                                className="rounded-xl"
                            />
                            <h2 className="font-heading font-bold text-2xl mt-4 px-3">
                                Whelping: A Guide To Help Your <br /> Dog Through Labor
                            </h2>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.petmd.com/cat/nutrition/wet-cat-food-vs-dry-cat-food-which-better" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <div>
                            <Image
                                src="/catNews.jpg"
                                alt="whelping"
                                width={416}
                                height={260}
                                className="rounded-xl"
                            />
                            <h2 className="font-heading font-bold text-2xl mt-4 px-3">
                                Wet Cat Food vs. Dry Cat <br /> Food: Which Is Better?
                            </h2>
                        </div>
                    </a>
                </Link>
                <Link href="https://www.petmd.com/bird/conditions/skin/c_bd_Psittacine_beak_and_feather_disease" passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                        <div>
                            <Image
                                src="/birdNews.jpg"
                                alt="whelping"
                                width={416}
                                height={260}
                                className="rounded-xl"
                            />
                            <h2 className="font-heading font-bold text-2xl mt-4 px-3">
                                Psittacine Beak and Feather <br /> Disease
                            </h2>
                        </div>
                    </a>
                </Link>



            </div>

        </div>
    )
}
