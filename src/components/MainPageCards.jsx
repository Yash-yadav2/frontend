import React, { useState } from "react";

import LoginForm from "./LoginForm";


const MainPageCards = () => {

  const [isOpen, setIsOpen] = useState(false);

    const games = [
        { name: "Gates of Casibom", category: "Popular", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/gates_of_casibom_1000.jpg" },
        { name: "Gates of Casibom", category: "Popular", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/gates_of_casibom_1000.jpg" },
        { name: "Gates of Casibom", category: "Popular", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/gates_of_casibom_1000.jpg" },
        { name: "Gates of Casibom", category: "Popular", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/gates_of_casibom_1000.jpg" },
        { name: "Gates of Casibom", category: "Popular", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/gates_of_casibom_1000.jpg" },
        { name: "Casibom Bonanza 1000", category: "New Games", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/sugar_rush_1000.jpg" },
        { name: "Casibom Bonanza 1000", category: "New Games", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/sugar_rush_1000.jpg" },
        { name: "Casibom Bonanza 1000", category: "New Games", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/sugar_rush_1000.jpg" },
        { name: "Casibom Bonanza 1000", category: "New Games", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/sugar_rush_1000.jpg" },
        { name: "Casibom Bonanza 1000", category: "New Games", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/sugar_rush_1000.jpg" },
        { name: "Casibom Bonanza 1000", category: "New Games", company: "Casibom", image: "https://agstatic.com/games/pragmaticplay/315/sugar_rush_1000.jpg" },
        { name: "Sweet Bonanza", category: "Slots", company: "Pragmatic Play", image: "https://agstatic.com/games/pragmaticplay/315/casibom_bonanza_1000.jpg" },
        { name: "Sweet Bonanza", category: "Slots", company: "Pragmatic Play", image: "https://agstatic.com/games/pragmaticplay/315/casibom_bonanza_1000.jpg" },
        { name: "Sweet Bonanza", category: "Slots", company: "Pragmatic Play", image: "https://agstatic.com/games/pragmaticplay/315/casibom_bonanza_1000.jpg" },
        { name: "Sweet Bonanza", category: "Slots", company: "Pragmatic Play", image: "https://agstatic.com/games/pragmaticplay/315/casibom_bonanza_1000.jpg" },
        { name: "Gates of Olympus", category: "Drops & Wins", company: "Pragmatic Play", image: "https://agstatic.com/games/pragmaticplay/315/sweet_bonanza_1000.jpg" },
        { name: "Gates of Olympus", category: "Drops & Wins", company: "Pragmatic Play", image: "https://agstatic.com/games/pragmaticplay/315/sweet_bonanza_1000.jpg" },
        { name: "Gates of Olympus", category: "Drops & Wins", company: "Pragmatic Play", image: "https://agstatic.com/games/pragmaticplay/315/sweet_bonanza_1000.jpg" },
        { name: "Gates of Olympus", category: "Drops & Wins", company: "Pragmatic Play", image: "https://agstatic.com/games/pragmaticplay/315/sweet_bonanza_1000.jpg" },
        { name: "JetX", category: "Table Games", company: "Smartsoft", image: "https://agstatic.com/games/pragmaticplay/315/big_bass_christmas_bash.jpg" },
        { name: "JetX", category: "Table Games", company: "Smartsoft", image: "https://agstatic.com/games/pragmaticplay/315/big_bass_christmas_bash.jpg" },
        { name: "JetX", category: "Table Games", company: "Smartsoft", image: "https://agstatic.com/games/pragmaticplay/315/big_bass_christmas_bash.jpg" },
        { name: "JetX", category: "Table Games", company: "Smartsoft", image: "https://agstatic.com/games/pragmaticplay/315/big_bass_christmas_bash.jpg" },
        { name: "JetX", category: "Table Games", company: "Smartsoft", image: "https://agstatic.com/games/pragmaticplay/315/big_bass_christmas_bash.jpg" },
      ];
    
  return (
    <>
    <div className=' h-fit w-full bg-[#151414]  px-6 '> 
    {isOpen && <LoginForm onClose={() => setIsOpen(false)} />}
        <div className=' bg-[#1c1a19] p-1 rounded-xl flex  justify-center items-center gap-2'>
        <div className='flex flex-col gap-10 h-[40vw] w-[15%] sidecards justify-center rounded-md  items-center'>
        <div  className="relative  p-3 h-1/2 w-full rounded-lg  group">
              <img  src='/cardimages/title-popular-bg-v2-tr.png' alt='' className="rounded-md h-full w-full object-cover " />
            
              <div className="absolute inset-0 bg-[#151414] bg-opacity-0 flex flex-col justify-center gap-0 cardhide rounded-2xl overflow-hidden md:gap-10 items-center ">
                <div className="h-5 w-full"></div>
                <h2  className=' text-white font-extrabold'>POPULAR</h2>
                <div>
                <button onClick={() => setIsOpen(true)} className="px-7 py-1 text-[0.85vw] bg-white text-black  rounded-[0.3vw] m-2">MORE GAMES</button>
                </div>
              </div>
            </div>
            <div  className="relative  p-3 h-1/2 w-full rounded-lg  group">
              <img  src='/cardimages/title-live-bg-v3.png' alt='' className="rounded-md h-full w-full object-cover " />
            
              <div className="absolute inset-0 bg-[#151414] bg-opacity-0 flex flex-col justify-center gap-0 cardhide rounded-2xl overflow-hidden md:gap-10 items-center ">
                <div className="h-5 w-full"></div>
                <h2 className=' text-white font-extrabold'>POPULAR</h2>
                <div>
                <button onClick={() => setIsOpen(true)}  className="px-7 py-1 text-[0.85vw] bg-white text-black  rounded-[0.3vw] m-2">MORE GAMES</button>
                </div>
              </div>
            </div>
        </div>
        <div className=' h-full w-[85%] flex flex-col justify-center items-center'>
            <div className=' h-1/2 w-full px-6 py-1'>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {games.length > 0 ? (
          games.map((game, index) => (
            <div key={index} className="relative bg-gray-800  rounded-lg shadow-lg hover:scale-105 transition-transform  group">
              <img onClick={() => setIsOpen(true)}  src={game.image} alt={game.name} className="rounded-md " />
            
              <div className="absolute inset-0 bg-[#151414] bg-opacity-70 flex flex-col justify-center gap-0 cardhide md:gap-10 items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="h-5 w-full"></div>
                <h2 className=' text-white'>Gates of Casibom - 1000</h2>
                <div className='flex gap-0 justify-center items-center'>
                <button onClick={() => setIsOpen(true)}  className="px-7 py-1 text-[0.85vw] bg-yellow-500 text-black  rounded-[0.3vw] m-2">Play</button>
                <button onClick={() => setIsOpen(true)}  className="px-7 py-1 text-[0.85vw] bg-gray-700 text-black hover:bg-yellow-500  rounded-[0.3vw] m-2">Demo</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No games found.</p>
        )}
      </div>
            </div>
            <div className=' h-1/2 w-full bg-slate-800'></div>
        </div>
        </div>
    </div>
    </>
  )
}

export default MainPageCards