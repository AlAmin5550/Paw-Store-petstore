import Footer from '@/components/Shared/Footer'
import Hero from '@/components/Shared/Hero'
import Navbar from '@/components/Shared/Navbar'
import React from 'react'
import heroImg from '@/../public/HeroImg2.svg'
import Image from 'next/image'

export default function page() {
  const heading = "If animals could talk, they would talk about us."
  const description = "At Paw Store, we understand that pets are more than just animals - they are cherished members of your family. That's why we are dedicated to providing the best products."
  return (
    <div>
      <Navbar />
      <Hero heading={heading} description={description} heroImage={heroImg} />
      <div className='container mx-auto max-w-7xl '>
        <h1 className='text-4xl font-bold mx-5 my-8 lg:mt-16'>About Us</h1>
        <div className='flex flex-col text-gray-500 font-headings p-6 md:flex-row md:justify-between gap-8 md:p-6 md:max-w-6xl  lg:gap-24'>
          <p>
            We believe shopping should feel simple, joyful, and inspiring. Our store was built around one goal: offering high-quality products that make everyday life better — without overcomplicating the experience.
          </p>
          <p>
            We’re a small team of pet lovers who are passionate about creating a better shopping experience for pet owners. We started this store because we wanted to make it easier for people to find the best products for their furry friends, without having to sift through endless options or deal with confusing websites.
          </p>
        </div>
        <div className='grid grid-cols-2 justify-between p-6 lg:flex lg:mx-4'>
          <div className=''>
            <h1 className='text-primary fonts-headings text-3xl mb-2 font-semibold'>2K+</h1>
            <p>Happy Customers</p>
          </div>
          <div className=''>
            <h1 className='text-primary fonts-headings text-3xl mb-2 font-semibold'>72</h1>
            <p>Brands</p>
          </div>
          <div className=''>
            <h1 className='text-primary fonts-headings text-3xl mb-2 font-semibold'>1k+</h1>
            <p>Products Available</p>
          </div>
          <div className=''>
            <h1 className='text-primary fonts-headings text-3xl mb-2 font-semibold'>20+</h1>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className='flex flex-col mx-auto justify-center my-8 md:flex-row md:gap-8 lg:mt-16 lg:gap-8 '>
          <Image src={"/founder.jpg"} alt="Founder" width={420} height={580} className='rounded-2xl  max-h-[580px]' />
          <div className='max-w-xl p-6 lg:p-14'>
            <h1 className='fonts-headings text-2xl mb-2 font-medium'>Taylor Joshua</h1>
            <p className='mt-8 text-gray-500'>
              Taylor Joshua is the founder of Paw Store, a pet store that offers a wide range of products for pets. He has always been passionate about animals and wanted to create a store that would provide high-quality products for pets and their owners. With over 20 years of experience in the pet industry, Taylor has built a successful business that is dedicated to providing excellent customer service and top-notch products for pets. He is committed to making sure that every pet owner has access to the best products for their furry friends, and he continues to work hard to ensure that Paw Store remains a trusted name in the pet industry.
            </p>

          </div>

        </div>
        <h1 className='fonts-headings text-4xl mb-4 font-semibold text-center pt-5'>Our Team</h1>
        <div className='flex flex-col lg:flex-row gap-8 justify-center items-center lg:gap-16'>

          <div className='flex flex-col items-center font-headings'>
            <Image
              src={"/staff1.jpg"}
              alt="Our Team"
              width={416}
              height={416}
              className='rounded-2xl'
            ></Image>
            <h2 className='text-xl font-semibold pt-2'>Gerard Ferguson</h2>
          </div>
          <div className='flex flex-col items-center font-headings'>
            <Image
              src={"/staff2.jpg"}
              alt="Our Team"
              width={416}
              height={416}
              className='rounded-2xl'
            ></Image>
            <h2 className='text-xl font-semibold pt-2'>Caroline Washington</h2>
          </div>
          <div className='flex flex-col items-center font-headings'>
            <Image
              src={"/staff3.jpg"}
              alt="Our Team"
              width={416}
              height={416}
              className='rounded-2xl'
            ></Image>
            <h2 className='text-xl font-semibold pt-2'>George Smith</h2>
          </div>

        </div>
        <div className="carousel w-full lg:mx-20">
          <div id="slide1" className="carousel-item relative w-full">
            <div className='max-w-2xl mx-auto px-6 py-12 flex flex-col gap-4'>
              <h4 className='font-heading text-primary text-xl'>Testimonials</h4>
              <h2 className='font-heading text-3xl font-semibold'>What People Say About US</h2>
              <div className="rating">
                <div className="mask mask-star bg-primary" aria-label="1 star"></div>
                <div className="mask mask-star bg-primary" aria-label="2 star"></div>
                <div className="mask mask-star bg-primary" aria-label="3 star" ></div>
                <div className="mask mask-star bg-primary" aria-label="4 star"></div>
                <div className="mask mask-star bg-primary" aria-label="5 star" aria-current="true"></div>
              </div>
              <p className='text-gray-500'>
                “Absolutely impressed with the quality and attention to detail. Everything was smooth from start to finish, and the final result exceeded my expectations.”
              </p>
              <div className='pt-6'>
                <h2 className='text-xl font-semibold'>John Doe</h2>
                <p className='text-gray-500 font-semibold'>Customer</p>
              </div>
            </div>
            <div className="absolute bottom-5 right-20  flex gap-2 lg:right-55">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className='max-w-2xl mx-auto px-6 py-12 flex flex-col gap-4'>
              <h4 className='font-heading text-primary text-xl'>Testimonials</h4>
              <h2 className='font-heading text-3xl font-semibold'>What People Say About US</h2>
              <div className="rating">
                <div className="mask mask-star bg-primary" aria-label="1 star"></div>
                <div className="mask mask-star bg-primary" aria-label="2 star"></div>
                <div className="mask mask-star bg-primary" aria-label="3 star" ></div>
                <div className="mask mask-star bg-primary" aria-label="4 star"></div>
                <div className="mask mask-star bg-primary" aria-label="5 star" aria-current="true"></div>
              </div>
              <p className='text-gray-500'>
                “The team was responsive, professional, and easy to work with. They understood exactly what I needed and delivered on time without any issues.”
              </p>
              <div className='pt-6'>
                <h2 className='text-xl font-semibold'>Jane Smith</h2>
                <p className='text-gray-500 font-semibold'>Customer</p>
              </div>
            </div>
            <div className="absolute bottom-5 right-55 flex gap-2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <div className='max-w-2xl mx-auto px-6 py-12 flex flex-col gap-4'>
              <h4 className='font-heading text-primary text-xl'>Testimonials</h4>
              <h2 className='font-heading text-3xl font-semibold'>What People Say About US</h2>
              <div className="rating">
                <div className="mask mask-star bg-primary" aria-label="1 star"></div>
                <div className="mask mask-star bg-primary" aria-label="2 star"></div>
                <div className="mask mask-star bg-primary" aria-label="3 star" ></div>
                <div className="mask mask-star bg-primary" aria-label="4 star"></div>
                <div className="mask mask-star bg-primary" aria-label="5 star" aria-current="true"></div>
              </div>
              <p className='text-gray-500'>
                “From the first interaction to the final delivery, everything felt organized and stress-free. I would definitely recommend them to anyone looking for quality work.”
              </p>
              <div className='pt-6'>
                <h2 className='text-xl font-semibold'>Emily Johnson</h2>
                <p className='text-gray-500 font-semibold'>Customer</p>
              </div>
            </div>
            <div className="absolute bottom-5 right-55 flex gap-2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <div className='max-w-2xl mx-auto px-6 py-12 flex flex-col gap-4'>
              <h4 className='font-heading text-primary text-xl'>Testimonials</h4>
              <h2 className='font-heading text-3xl font-semibold'>What People Say About US</h2>
              <div className="rating">
                <div className="mask mask-star bg-primary" aria-label="1 star"></div>
                <div className="mask mask-star bg-primary" aria-label="2 star"></div>
                <div className="mask mask-star bg-primary" aria-label="3 star" ></div>
                <div className="mask mask-star bg-primary" aria-label="4 star"></div>
                <div className="mask mask-star bg-primary" aria-label="5 star" aria-current="true"></div>
              </div>
              <p className='text-gray-500'>
                “I’ve worked with many service providers before, but this experience really stood out. Great communication, fast turnaround, and outstanding results.”
              </p>
              <div className='pt-6'>
                <h2 className='text-xl font-semibold'>Sophia Martinez</h2>
                <p className='text-gray-500 font-semibold'>Customer</p>
              </div>
            </div>
            <div className="absolute bottom-5 right-55 flex gap-2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
