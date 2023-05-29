import React from 'react'
import Navbar from './Pages/Navigation/Nav'
import HeroSection from './Pages/Hero/Hero'
import Service from './Pages/Service/Service'
import MyApp from './Pages/Myapp/Download'
import Article from './Pages/Article/Article'
import Carousel from './Pages/Carousel/Display'

function View() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Service />
      <MyApp />
      <Article/>
      <Carousel/>
    </div>
  )
}

export default View
