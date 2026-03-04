"use client"
import React, { useState } from 'react'

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    tags: "",
    description: "",
    status: "active", // active | draft
    featured: false,
    bestSelling: false,
    images: [], // File[]
  });

  const [errors, setErrors] = useState({});
    const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };
  return (
    <div className='container w-full p-7'>
      <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Add Products</h1>
      <div className='w-full h-6/7 p-3 bg-white rounded-xl mt-5 text-xl'>
        <form action="" className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-6'>
            {/* Product Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Product name</span>
              </div>
              <input
                type="text"
                className={`input input-bordered w-full ${errors.name ? "input-error" : ""}`}
                placeholder="e.g. Premium Dog Food (10lb)"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
              />
              {errors.name && (
                <div className="label">
                  <span className="label-text-alt text-error">{errors.name}</span>
                </div>
              )}
            </label>
            {/* Category */}
            <label className="form-control w-full flex flex-col">
              <div className="label">
                <span className="label-text font-medium">Category</span>
              </div>
              <label className={`select ${errors.category ? "select-error" : ""}`} value={form.category}
                onChange={(e) => setField("category", e.target.value)}>
                <span className="label">Type</span>
                <select>
                  <option>Food</option>
                  <option>Accessories</option>
                  <option>Furniture</option>
                  <option>Bags</option>
                </select>
              </label>
              {errors.category && (
                <div className="label">
                  <span className="label-text-alt text-error">{errors.category}</span>
                </div>
              )}
            </label>

          </div>

        </form>


      </div>
    </div>
  )
}
