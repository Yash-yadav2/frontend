import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import Cards from '../Cards'
import Footer from '../Footer'
import './Home.css'
import Navfot from '../Navfot'
const Home = () => {
  return (
    <div className='bg-[#151414] h-screen w-full'>
      <Navbar />
      <Hero />
      <Cards />
      <Footer />
      <Navfot />
    </div>
  )
}

export default Home
