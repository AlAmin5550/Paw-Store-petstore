"use client"
import React, { useState } from 'react'
import { uploadImage } from '../../../utils/uploadImage'
import toast from 'react-hot-toast'

export default function Page() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    animal: "",
    description: "",
    featured: false,
    bestSelling: false,
    images: [], // File[]
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imageUrl = image ? await uploadImage(image) : null;
      const product = {
        name: form.name,
        category: form.category,
        price: parseFloat(form.price),
        animal: form.animal,
        description: form.description,
        featured: form.featured,
        bestSelling: form.bestSelling,
        imageUrl: imageUrl,
      };

      // Send to API
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        toast.success('Product added successfully!');
        // Reset form
        setForm({
          name: "",
          category: "",
          price: "",
          animal: "",
          description: "",
          featured: false,
          bestSelling: false,
          images: [],
        });
        setImage(null);
      } else {
        toast.error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Error adding product');
    }
  }
  return (
    <div className='container w-full p-7'>
      <h1 className='font-heading font-bold text-3xl text-primary border-b pb-2'>Add Products</h1>
      <div className='w-full h-6/7 p-3 bg-white rounded-xl mt-5 text-xl'>
        <form onSubmit={handleSubmit} className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          <div className='lg:col-span-2 space-y-6'>
            {/* Product Name */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Product name</span>
              </div>
              <input
                type="text"
                className={`input input-bordered w-full `}
                placeholder="e.g. Premium Dog Food (10lb)"
                name='name'
                value={form.name}
                onChange={handleChange}
              />

            </label>
            {/* Price */}
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-medium">Price</span>
              </div>
              <input
                type="number"
                inputMode="decimal"
                step="0.01"
                className={`input input-bordered w-full `}
                placeholder="0.00"
                name='price'
                value={form.price}
                onChange={handleChange}
              />

            </label>
            {/* Category */}
            <label className="form-control w-full flex flex-col">
              <div className="label">
                <span className="label-text font-medium">Category</span>
              </div>
              <div className='flex gap-5'>
                <label className={`select `} name='category' value={form.category}>
                  <span className="label">Category</span>
                  <select name='category' value={form.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Bags">Bags</option>
                  </select>
                </label>
                <label className={`select `} name='animal' >
                  <span className="label">Animal</span>
                  <select name='animal' value={form.animal} onChange={handleChange}>
                    <option value="">Select Animal</option>
                    <option value="Dog">Dogs</option>
                    <option value="Cat">Cat</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Parrot">Parrot</option>
                    <option value="Hamster">Hamster</option>
                    <option value="Tortoise">Tortoise</option>
                  </select>
                </label>

              </div>
            </label>

            {/* Description */}
            <label className="form-control w-full flex flex-col">
              <div className="label">
                <span className="label-text font-medium">Description</span>
                <span className="label-text-alt opacity-70">Keep it clear & scannable</span>
              </div>
              <textarea
                className={`textarea textarea-bordered w-full min-h-36 `}
                placeholder="Write a helpful product description..."
                name='description'
                value={form.description}
                onChange={handleChange}
              />

            </label>
            <div className='flex gap-3'>
              <label className="label cursor-pointer gap-3 justify-start">
                <input
                  type="checkbox"
                  className="toggle toggle-warning"
                  name='featured'
                  checked={form.featured}
                  onChange={handleChange}
                />
                <span className="label-text">Featured product</span>
              </label>
              <label className="label cursor-pointer gap-3 justify-start">
                <input
                  type="checkbox"
                  className="toggle toggle-warning"
                  name='bestSelling'
                  checked={form.bestSelling}
                  onChange={handleChange}
                />
                <span className="label-text">Best Selling</span>
              </label>
            </div>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} className="file-input" />


          </div>
          <div className="flex justify-center mt-6 lg:col-span-3">
            <button type="submit" className="btn btn-warning">Add Product</button>
          </div>

        </form>


      </div>
    </div>
  )
}
