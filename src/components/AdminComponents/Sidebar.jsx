import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    return (
        <div className="drawer lg:drawer-open rounded-2xl overflow-hidden border border-base-300">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side bg-white">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu min-h-full w-80 p-4 gap-3 rounded-lg">
                    {/* Sidebar content here */}
                    <div className="flex items-center gap-3 mb-6 pb-4 ">
                        <Image src="/icon.svg" width={40} height={40} alt='paw Store' />
                        <h1 className="text-xl font-bold font-heading ">Paw Store</h1>
                    </div>
                    <li><Link href="/admin">Dashboard</Link></li>
                    <li ><Link href="/admin/products">Products</Link></li>
                    <li ><Link href="/admin/addItems">Add Products</Link></li>
                    <li ><Link href="/admin/orders">Orders</Link></li>
                    <li><Link href="/admin/customers">Customers</Link></li>
                </ul>
            </div>
        </div>
    )
}
