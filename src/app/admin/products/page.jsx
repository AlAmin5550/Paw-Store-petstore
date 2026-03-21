"use client"
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast'

export default function Page() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState('')
  console.log(products)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setFetchError('')
      const response = await fetch('/api/products')
      const data = await response.json()
      
      if (response.ok) {
        setProducts(data.products)
      } else {
        setFetchError(data?.error || 'Failed to fetch products')
        toast.error('Failed to fetch products')
      }
    } catch (error) {
      console.error('Error fetching products:', error)
      setFetchError('Could not connect to the product service. Please try again.')
      toast.error('Error fetching products')
    } finally {
      setLoading(false)
    }
  }

  const deleteProduct = async (productId) => {
    if (!confirm('Are you sure you want to delete this product?')) {
      return
    }

    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Product deleted successfully!')
        // Remove the product from the local state
        setProducts(products.filter(product => product._id !== productId))
      } else {
        toast.error('Failed to delete product')
      }
    } catch (error) {
      console.error('Error deleting product:', error)
      toast.error('Error deleting product')
    }
  }

  if (loading) {
    return (
      <div className='container w-full p-7'>
        <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Product Lists</h1>
        <div className='flex justify-center items-center h-64'>
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </div>
    )
  }

  return (
    <div className='container w-full p-7'>
      <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Product Lists</h1>
      
      {fetchError ? (
        <div className='text-center py-12'>
          <p className='text-error text-lg'>{fetchError}</p>
        </div>
      ) : products.length === 0 ? (
        <div className='text-center py-12'>
          <p className='text-gray-500 text-lg'>No products found. Add some products to get started!</p>
        </div>
      ) : (
        <div className='mt-6 bg-white rounded-xl p-4'>
          <div className='overflow-x-auto'>
            <table className='table table-zebra w-full'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Animal</th>
                  <th>Price</th>
                  <th>Featured</th>
                  <th>Best Selling</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      {product.imageUrl ? (
                        <img
                          src={product.imageUrl} 
                          alt={product.name} 
                          className='w-16 h-16 object-cover rounded'
                        />
                      ) : (
                        <div className='w-16 h-16 bg-gray-200 rounded flex items-center justify-center'>
                          <span className='text-gray-400 text-xs'>No Image</span>
                        </div>
                      )}
                    </td>
                    <td className='font-medium'>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.animal}</td>
                    <td>${product.price}</td>
                    <td>
                      {product.featured ? (
                        <span className='badge badge-success'>Yes</span>
                      ) : (
                        <span className='badge badge-ghost'>No</span>
                      )}
                    </td>
                    <td>
                      {product.bestSelling ? (
                        <span className='badge badge-warning'>Yes</span>
                      ) : (
                        <span className='badge badge-ghost'>No</span>
                      )}
                    </td>
                    <td>
                      <button 
                        className='btn btn-sm btn-neutral'
                        onClick={() => deleteProduct(product._id)}
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
