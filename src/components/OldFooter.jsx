import React from 'react'

const OldFooter = () => {
  return (
    <>
       <footer className="bg-[#151414] text-gray-400 text-sm p-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="text-center pb-6 border-b border-gray-700">
            <h2 className="text-yellow-400 font-semibold">
              Play Casino | Top Winning Casino Games | Casibom™
            </h2>
            <p>The best casino site in Turkey. Casibom is the best, most profitable casino slot game in the world.</p>
          </div>
  
          {/* Middle Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
            {/* Contact */}
            <div>
              <h3 className="text-gray-300 font-semibold">EMAIL</h3>
              <p className="text-yellow-400">support@casibom.com</p>
            </div>
  
            {/* General Rules */}
            <div>
              <h3 className="text-yellow-400 font-semibold border-b border-yellow-400 pb-2">General Rules</h3>
              <ul className="space-y-1">
                <li>Rules & Conditions</li>
                <li>Privacy Policy</li>
                <li>Partnership</li>
                <li>Responsible Gaming</li>
              </ul>
            </div>
  
            {/* About Us */}
            <div>
              <h3 className="text-yellow-400 font-semibold border-b border-yellow-400 pb-2">About us</h3>
              <ul className="space-y-1">
                <li>Contact us</li>
                <li>Casibom Help Center</li>
                <li>Betting Rules</li>
              </ul>
            </div>
          </div>
  
          {/* License Information */}
          <p className="text-xs text-center pb-4">
            casibom.com is operated by Segurfi N.V., registered under Curacao law and with company number 153142.
            The site has a valid license issued by GCB.
          </p>
  
          {/* Payment & Crypto Icons */}
          <div className="flex flex-wrap justify-center gap-6 pb-6">
            <img src="https://via.placeholder.com/60" alt="PAYCO" />
            <img src="https://via.placeholder.com/60" alt="Bank Transfer" />
            <img src="https://via.placeholder.com/60" alt="Bitcoin" />
            <img src="https://via.placeholder.com/60" alt="Ethereum" />
            <img src="https://via.placeholder.com/60" alt="Litecoin" />
          </div>
  
          {/* Partners */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 justify-items-center pb-6">
            <img src="https://via.placeholder.com/60" alt="Pragmatic Play" />
            <img src="https://via.placeholder.com/60" alt="Evolution" />
            <img src="https://via.placeholder.com/60" alt="Quickspin" />
            <img src="https://via.placeholder.com/60" alt="NetEnt" />
            <img src="https://via.placeholder.com/60" alt="Red Tiger" />
            <img src="https://via.placeholder.com/60" alt="Iron Dog Studio" />
            <img src="https://via.placeholder.com/60" alt="Yggdrasil" />
            <img src="https://via.placeholder.com/60" alt="Novomatic" />
          </div>
  
          {/* Bottom Section */}
          <div className="text-center border-t border-gray-700 pt-4">
            <p>© Casibom. All rights reserved.</p>
          </div>
        </div>
      </footer> 
    </>
  )
}

export default OldFooter