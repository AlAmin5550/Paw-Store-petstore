"use client"
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Page() {
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const response = await fetch('/api/customers')
      const data = await response.json()

      if (response.ok) {
        setCustomers(data.customers)
      } else {
        toast.error('Failed to fetch customers')
      }
    } catch (error) {
      console.error('Error fetching customers:', error)
      toast.error('Error fetching customers')
    } finally {
      setLoading(false)
    }
  }

  const deleteCustomer = async (customerId) => {
    if (!confirm('Are you sure you want to delete this customer?')) {
      return
    }

    try {
      const response = await fetch(`/api/customers/${customerId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Customer deleted successfully!')
        // Remove the customer from the local state
        setCustomers(customers.filter(customer => customer._id !== customerId))
      } else {
        toast.error('Failed to delete customer')
      }
    } catch (error) {
      console.error('Error deleting customer:', error)
      toast.error('Error deleting customer')
    }
  }

  if (loading) {
    return (
      <div className='container w-full p-7'>
        <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Customer Lists</h1>
        <div className='flex justify-center items-center h-64'>
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </div>
    )
  }

  return (
    <div className='container w-full p-7'>
      <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Customer Lists</h1>

      {customers.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>No customers found.</p>
        </div>
      ) : (
        <div className='mt-6 bg-white rounded-xl p-4'>
          <div className='overflow-x-auto'>
            <table className='table table-zebra w-full'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Joined Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer._id}>
                    <td className='font-medium'>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone || 'N/A'}</td>
                    <td>{new Date(customer.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        className='btn btn-sm btn-error'
                        onClick={() => deleteCustomer(customer._id)}
                      >
                        Delete
                      </button>
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
