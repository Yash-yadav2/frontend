import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Bonus = () => {

  const bonus = [
    { image: "/public/bonus/Snip20201029_27.png", title: "3RD WELCOME BONUS CASINO" },
    { image: "/public/bonus/Snip20210901_57.png", title: "3RD WELCOME BONUS SPORTS" },
    { image: "/public/bonus/Snip20201029_27.png", title: "2ND WELCOME BONUS CASINO" },
    { image: "/public/bonus/2021-09-01-14.53.08-e1630504506997.jpg", title: "1ST WELCOME BONUS SPORTS" },
    { image: "/public/bonus/Snip20201102_40-min.png", title: "[BRONZE] 10% BONUS CASINO" },
    { image: "/bonus/Snip20210901_55.png", title: "[BRONZE] 10% DAILY SPORTS BONUS" },
    { image: "/public/bonus/Snip20201102_40-min.png", title: "[DIAMOND] 25% BONUS CASINO" },
    { image: "/public/bonus/Snip20210901_55.png", title: "[DIAMOND] 25% DAILY SPORTS BONUS" },
    { image: "/public/bonus/Snip20201102_40-min.png", title: "[GOLD] 15% DAILY CASINO BONUS" },
    { image: "/bonus/Snip20210901_55.png", title: "[GOLD] 15% DAILY SPORTS BONUS" },
    { image: "/public/bonus/Snip20201102_40-min.png", title: "[PLATINUM] 20% DAILY CASINO BONUS" },
    { image: "/bonus/Snip20210901_55.png", title: "[PLATINUM] 20% DAILY SPORTS BONUS" },
    { image: "/public/bonus/Snip20201102_40-min.png", title: "[SILVER] 10% DAILY CASINO BONUS" },
    { image: "/public/bonus/Snip20210901_55.png", title: "[SILVER] 10% DAILY SPORTS BONUS" },
    { image: "/public/bonus/Snip20210901_57.png", title: "2ND WELCOME BONUS SPORTS" },
    { image: "/public/bonus/Snip20201029_27.png", title: "1ST WELCOME BONUS CASINO" },








  ];
  
  return (
   <>
    <Navbar />
    <div className='bg-[#151414]'>
      <div className='flex flex-col justify-center items-center p-10'>
    <h1 className='text-white text-4xl  uppercase'>Bonuses</h1>
    </div>
    <div className='md:px-28 px-5 pb-5 md:pb-10'>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {bonus.map((item, index) => (
          <div key={index} className=' relative bg-[#151414]  rounded-lg shadow-lg border-[#fbb203] border-2  transition-transform  md:h-[49vh]  md:w-[16vw] md:p-3 p-0 group'>
            <div className='h-3/5 md:h-1/2 w-full '>
            <img src={item.image} alt={item.title} className=' h-full w-full object-cover' />
            </div>
          <div className=' md:h-1/2 h-1/2 '> 
          <div className=' h-1/4 md:h-1/2 w-full '> 
          <h1 className=' text-center text-[#fbb203] text-xl'>{item.title}</h1>
          </div>
          <div className=' h-1/2  w-full flex justify-center items-center flex-col gap-2'>
          <button className=' px-14 py-1 bg-[#fbb203] rounded-md'>SIGN UP</button>
          <button className=' px-6 py-1 bg-[#fbb203] rounded-md'>READ THE TERMS</button>
          </div>
          </div>

          </div>
        
      ))}
       
      </div>
    </div>
    </div>
    <Footer />
   </>
  )
}

export default Bonus
