import Footer from '@/components/Shared/Footer'
import Hero from '@/components/Shared/Hero'
import Navbar from '@/components/Shared/Navbar'
import React from 'react'
import heroImg from '@/../public/HeroImg2.svg'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

export default function page() {
  const heading = "If animals could talk, they would talk about us."
  const description = "At Paw Store, we understand that pets are more than just animals - they are cherished members of your family. That's why we are dedicated to providing the best products."
  return (
    <div>
      <Navbar />
      <Hero heading={heading} description={description} heroImage={heroImg} />
      <div className='flex flex-col gap-12 container mx-auto max-w-7xl px-6 py-12 lg:flex-row lg:gap-24'>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 lg:w-xl">

          <label className="label">First Name</label>
          <input type="text" className="input" placeholder="My awesome page" />

          <label className="label">Last Name</label>
          <input type="text" className="input" placeholder="my-awesome-page" />

          <label className="label">Email</label>
          <input type="text" className="input" placeholder="Name" />
          <label className="label">Message</label>
          <textarea placeholder="Your message" className="textarea textarea-warning"></textarea>
          <button className="btn text-white bg-primary">Send Message</button>
        </fieldset>
        <div className='flex flex-col gap-8'>
          <h1 className='font-heading text-4xl font-bold'>Feel Free To Reach Out To Us!</h1>
          <p className='text-gray-500'>Have a question or need more information? We’re always happy to help. Feel free to contact us through phone or email, or visit us during our business hours. We look forward to connecting with you!</p>
          <div  className='flex gap-6'>
            <MapPin  className='text-primary'/>
            <h2 className='text-xl font-semibold'>Hattiesburg, Mississippi, 39401</h2>
          </div>
          <div  className='flex gap-6'>
            <Mail  className='text-primary'/>
            <h2 className='text-xl font-semibold'>contact@pawstore.com</h2>
          </div>
          <div  className='flex gap-6'>
            <Phone  className='text-primary'/>
            <h2 className='text-xl font-semibold'>+ (123) 456-7890</h2>
          </div>
          <div  className='flex gap-6'>
            <Clock  className='text-primary'/>
            <h2 className='text-xl font-semibold'>Mon - Fri: 9:00 AM - 6:00 PM</h2>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
} 