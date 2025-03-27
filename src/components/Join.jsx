import React from 'react'

const Join = () => {
  return (
    <div className=' h-[15vh] join sm:h-[20vh] md:h-[30vh] w-full p-6 flex justify-center items-center'>
        <div className='  h-full w-1/2 '>
            <img className=' h-full w-full  object-center object-cover rounded-lg' src="/images/Telegram_Picture_Desktop_170K_EN_2-scaled.jpeg" alt="" />
        </div>
        <div className='  h-full w-1/2 flex justify-center items-center '>
            <div className=' h-full w-1/2 px-2 pl-4'>
            <img className=' h-full w-full  object-cover rounded-lg' src="/images/vip-promo-bg-24.jpg" alt="" />
            </div>
            <div className=' h-full w-1/2 px-2'>
            <img className=' h-full w-full  object-cover rounded-lg' src="/images/app-promo-bg-24.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Join