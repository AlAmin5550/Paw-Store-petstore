"use client";
import React, { use } from 'react';
import { Phone, Mail, MapPin, Search, Heart, ShoppingCart } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { signOut, useSession } from 'next-auth/react';
import button from 'daisyui/components/button';

export default function Navbar() {
    const session = useSession();
    return (
        <div className='absolute w-full top-0 left-1/2 z-50 -translate-x-1/2'>
            {/* 🔹 Top info bar */}
            <div className="text-sm">
                <div className="max-w-7xl mx-auto px-4 mt-1 flex justify-between items-center text-gray-600">
                    <div className="flex gap-4 items-center">
                        <span className="flex items-center gap-1">
                            <Phone size={14} /> +--- -- ----
                        </span>
                        <span className="flex items-center gap-1">
                            <Mail size={14} /> al.amin@usm.edu
                        </span>
                    </div>
                    <span className="hidden md:flex items-center gap-1">
                        <MapPin size={14} />
                        Hattiesburg Mississippi , US 39401
                    </span>
                </div>
            </div>
            <div className='relative'>
                <div className='max-w-7xl mx-auto '>
                    <div className="navbar bg-base-100 shadow-md px-6 rounded-full">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li><NavLink href="/">Home</NavLink></li>

                                    <li><NavLink href="/shop">Shop</NavLink></li>
                                    <li><NavLink href="/about">About Us</NavLink></li>
                                    <li><NavLink href="/contact">Contact Us</NavLink></li>
                                </ul>
                            </div>
                            <Link href="/" className="flex font-bold font-heading text-sm items-center gap-2 lg:text-lg">
                                <Image src="/icon.svg" width={29.27} height={24} alt='paw Store'></Image> Paw Store
                            </Link>
                        </div>
                        <div className="navbar-center hidden font-semibold font-heading lg:flex">
                            <ul className="menu menu-horizontal px-1 gap-6">
                                <li><NavLink href="/">Home</NavLink></li>

                                <li><NavLink href="/shop">Shop</NavLink></li>
                                <li><NavLink href="/about">About Us</NavLink></li>
                                <li><NavLink href="/contact">Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="navbar-end gap-3">
                            {/* search box */}
                            <div className='hidden md:flex items-center bg-base-200 rounded-full px-4 '>
                                <input type="text" placeholder='Search Product...' className='input input-ghost input-sm focus:outline-none w-40' />
                                <Search size={16} className='cursor-pointer' />

                            </div>
                            {/* shopping Cart */}
                            <div className='indicator'>
                                <ShoppingCart size={20} />
                                <span className='badge badge-sm rounded-full p-1 bg-primary text-white indicator-item'>
                                    0
                                </span>
                            </div>
                            <div className='btn btn-ghost p-2'>
                                {
                                    !session.data ? <Link href="/signup">Sign Up</Link> : <button className='btn btn-ghost' onClick={() => signOut()}>Sign Out</button>

                                }
                                

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
