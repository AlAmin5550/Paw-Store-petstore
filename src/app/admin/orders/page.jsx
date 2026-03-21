"use client"
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function Page() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState('')
  const [updatingOrderId, setUpdatingOrderId] = useState('')

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      setFetchError('')
      const response = await fetch('/api/orders')
      const data = await response.json()

      if (response.ok) {
        setOrders(data.orders || [])
      } else {
        setFetchError(data?.error || 'Failed to fetch orders')
        toast.error('Failed to fetch orders')
      }
    } catch (error) {
      console.error('Error fetching orders:', error)
      setFetchError('Could not connect to order service. Please try again.')
      toast.error('Error fetching orders')
    } finally {
      setLoading(false)
    }
  }

  const markAsComplete = async (orderId) => {
    try {
      setUpdatingOrderId(orderId)
      const response = await fetch('/api/orders', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          status: 'complete',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to update order status')
      }

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          String(order._id) === String(orderId) ? { ...order, status: 'complete' } : order,
        ),
      )
      toast.success('Order marked as complete')
    } catch (error) {
      console.error('Error updating order:', error)
      toast.error(error.message || 'Failed to update order status')
    } finally {
      setUpdatingOrderId('')
    }
  }

  if (loading) {
    return (
      <div className='container w-full p-7'>
        <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Order Lists</h1>
        <div className='flex justify-center items-center h-64'>
          <div className='loading loading-spinner loading-lg'></div>
        </div>
      </div>
    )
  }

  return (
    <div className='container w-full p-7'>
      <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Order Lists</h1>

      {fetchError ? (
        <div className='text-center py-12'>
          <p className='text-error text-lg'>{fetchError}</p>
        </div>
      ) : orders.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>No orders found yet.</p>
        </div>
      ) : (
        <div className='mt-6 bg-white rounded-xl p-4'>
          <div className='overflow-x-auto'>
            <table className='table table-zebra w-full'>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Placed At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className='font-medium'>{String(order._id).slice(-6)}</td>
                    <td>
                      <p className='font-medium'>{order.customer?.name || 'Guest'}</p>
                      <p className='text-xs text-gray-500'>{order.customer?.email || 'No email'}</p>
                    </td>
                    <td>{order.items?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0}</td>
                    <td>${Number(order.totalAmount || 0).toFixed(2)}</td>
                    <td>
                      <span className={order.status === 'complete' ? 'badge badge-success' : 'badge badge-warning'}>
                        {order.status || 'placed'}
                      </span>
                    </td>
                    <td>{order.createdAt ? new Date(order.createdAt).toLocaleString() : 'N/A'}</td>
                    <td>
                      {order.status === 'complete' ? (
                        <button className='btn btn-sm' disabled>
                          Completed
                        </button>
                      ) : (
                        <button
                          className='btn btn-sm btn-neutral'
                          onClick={() => markAsComplete(order._id)}
                          disabled={updatingOrderId === String(order._id)}
                        >
                          {updatingOrderId === String(order._id) ? 'Completing...' : 'Complete'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
