import React from 'react'
import Hero from '../Shared/Hero'
import Category1 from '../Shared/Category1'
import Featured from '../Shared/Featured'
import Section4 from '../Shared/Section4'
import BestProducts from '../Shared/BestProducts'
import ShopByPet from '../Shared/ShopByPet'
import NewsSection from '../Shared/NewsSection'
import Footer from '../Shared/Footer'

export default function Homepage() {
  return (
    <div>
      <Hero />
      <Category1 />
      <Featured />
      <Section4 />
      <BestProducts />
      <ShopByPet/>
      <NewsSection/>
      <Footer/>
    </div>
  )
}
