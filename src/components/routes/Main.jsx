import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Footer from '../Footer'
import './Home.css'
import Navfot from '../Navfot'
import Join from '../Join'
import MainPageCards from '../MainPageCards'
import Winner from '../winners'
const Home = () => {
  return (
    <div className='bg-[#151414] h-screen w-full'>
      <Navbar />
      <Hero />
      <Join />
      <Winner/>
      <MainPageCards />
      <Footer />
      <Navfot />
    </div>
  )
}

export default Home
