"use client"
import React, { useEffect, useState } from 'react'

export default function Admin() {
  const [stats, setStats] = useState({
    orders: 0,
    customers: 0,
    products: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [ordersResponse, customersResponse, productsResponse] = await Promise.all([
          fetch('/api/orders'),
          fetch('/api/customers'),
          fetch('/api/products'),
        ])

        const [ordersData, customersData, productsData] = await Promise.all([
          ordersResponse.json(),
          customersResponse.json(),
          productsResponse.json(),
        ])

        setStats({
          orders: Array.isArray(ordersData?.orders) ? ordersData.orders.length : 0,
          customers: Array.isArray(customersData?.customers) ? customersData.customers.length : 0,
          products: Array.isArray(productsData?.products) ? productsData.products.length : 0,
        })
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className='container w-full p-7'>
      <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Dashboard</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
        <div className='card bg-base-100 shadow-sm'>
          <div className='card-body'>
            <p className='text-secondary'>Total Orders</p>
            <h2 className='text-3xl font-bold'>{loading ? '...' : stats.orders}</h2>
          </div>
        </div>

        <div className='card bg-base-100 shadow-sm'>
          <div className='card-body'>
            <p className='text-secondary'>Total Customers</p>
            <h2 className='text-3xl font-bold'>{loading ? '...' : stats.customers}</h2>
          </div>
        </div>

        <div className='card bg-base-100 shadow-sm'>
          <div className='card-body'>
            <p className='text-secondary'>Total Products</p>
            <h2 className='text-3xl font-bold'>{loading ? '...' : stats.products}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

