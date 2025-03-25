import React from 'react'
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import MobileDrop from "./Registration";
import { FaUserCircle } from "react-icons/fa"; // Profile icon
import { IoMdLogOut } from "react-icons/io"; // Logout icon
import { MdEdit } from "react-icons/md"; // Edit Profile icon

const Navbar = () => {

  const [DropOpen, setDropOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/user/profile");
        setUser(res.data);
      } catch (err) {
        setUser(null); // No user logged in
      }
    };

    fetchUser();
  }, []);


    // Logout function
    const handleLogout = async () => {
      try {
        await axios.get("/auth/logout");
        alert("Logged out successfully!");
        setUser(null); // Remove user state
        window.location.href = "/"; // Redirect to home
      } catch (err) {
        alert("Logout failed!");
      }
    };
  
  const toggleDrop = () => {
    setDropOpen(!DropOpen);
  };
  
  
  return (
    <div>
       {DropOpen && <MobileDrop isOpen={DropOpen} toggleDrop={toggleDrop} />}
      <div className='navbar  flex justify-between text-white  items-center '>
        <div>
            <svg width="137" height="40" viewBox="0 0 137 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_9_34)"><path d="M72.373 31.4694C72.5643 32.5785 73.076 34.551 74.6511 36.343C77.7149 39.8288 82.4156 39.916 83.8831 39.9432C83.8831 39.9432 86.9704 40.0978 91.231 38.4153C94.2592 37.2192 96.3836 35.5517 97.6713 34.5029C98.9923 33.4274 99.9902 32.4099 100.677 31.6517C100.79 31.5347 100.846 31.3815 100.78 31.3078C100.687 31.205 100.294 31.3911 100.18 31.4444C97.2845 32.8033 94.3726 34.1519 91.3506 35.224C89.3992 35.9163 86.857 36.7609 83.796 36.8662C81.9788 36.9286 80.7274 36.9524 78.8303 36.2933C75.9478 35.292 74.8298 33.958 74.0344 33.1107C73.4159 32.4286 72.9889 31.7878 72.7114 31.3213C72.6583 31.2571 72.5693 31.2332 72.4929 31.2611C72.4087 31.292 72.3571 31.3795 72.373 31.4694Z" fill="#FDAB0F"></path><path d="M0.2555 17.9918C1.20765 12.6822 4.8802 9.56662 9.91293 9.56662C15.399 9.56662 18.0742 12.375 16.9861 17.6409L16.8952 18.0797H11.4545C11.8624 15.6663 11.3185 14.4377 9.82217 14.4377C8.23534 14.4377 6.82977 16.0172 6.33092 18.5186C5.7415 21.9853 7.73649 23.7406 11.6811 23.7406C13.3587 23.7406 14.8096 23.6089 16.0791 23.3456L15.0362 28.0411C13.8121 28.4359 12.1345 28.6115 10.0035 28.6115C2.70392 28.6112 -1.01407 25.0129 0.2555 17.9918Z" fill="white"></path><path d="M37.1987 10.8874L34.0485 28.5423C33.6042 28.5709 32.2102 28.5447 31.452 28.3313C30.8996 28.1761 30.082 27.6687 29.7826 27.2626C28.0894 28.1114 26.281 28.3918 24.8302 28.3918C20.6582 28.3918 18.4236 25.8517 18.435 21.7005C18.4376 20.7941 18.0641 16.0825 21.5572 12.4532C22.0475 11.9438 22.6387 11.4284 23.3812 10.9756C26.7973 8.89193 30.7783 9.53013 33.4568 9.96654C34.3645 10.1146 35.6654 10.3796 37.1987 10.8874ZM30.9964 14.5688C30.7948 14.3674 29.7567 14.1023 29.0311 14.1023C26.7642 14.1023 25.1031 15.5743 24.4081 18.7921C24.1963 19.7871 23.3465 23.7804 26.6854 24.0455C27.4685 24.1076 28.4231 24.1671 29.3909 23.5815L30.9964 14.5688Z" fill="white"></path><path d="M45.7322 21.6341C41.5155 20.7563 39.7473 19.3084 40.518 14.964C41.1982 11.3657 43.9641 9.56662 48.8155 9.56662C50.9918 9.56662 52.8507 9.87381 54.347 10.5321L54.0749 15.2712C52.5787 14.4375 50.6743 13.9987 48.3622 13.9987C46.9566 13.9987 46.2312 14.3059 46.1405 14.9641C45.9591 15.7103 46.639 15.9734 47.954 16.3245C52.4426 17.2461 53.9841 19.0452 53.1229 23.258C52.4881 26.8123 49.8582 28.6113 45.2336 28.6113C42.5586 28.6113 40.4276 28.3043 38.7498 27.6461L38.9311 22.9507C40.6542 23.7846 42.7851 24.1794 45.3242 24.1794C46.775 24.1794 47.5459 23.8284 47.6819 23.0823C47.8178 22.3363 47.2284 21.9412 45.7322 21.6341Z" fill="white"></path><path d="M64.8658 9.96149L61.5559 28.1724H55.6617L58.9715 9.96149H64.8658ZM63.551 0.0881958C65.546 0.0881958 66.7249 1.22912 66.362 3.37936C66.0447 5.31016 64.639 6.53888 62.5989 6.53888C60.6038 6.53888 59.4249 5.354 59.7876 3.20377C60.1049 1.31692 61.5105 0.0881958 63.551 0.0881958Z" fill="white"></path><path d="M70.9339 1.18516L77.0095 0.0881958L75.2026 10.1372C76.2909 9.7422 77.4243 9.56669 78.6033 9.56669C83.6812 9.56669 86.3564 12.9895 85.132 19.7911C84.0893 25.452 80.1447 28.6112 74.4772 28.6112C71.8476 28.6112 69.0817 28.1724 66.1798 27.3387L70.9339 1.18516ZM72.7995 23.3456C73.3437 23.6088 73.933 23.7403 74.568 23.7403C76.971 23.7403 78.4672 22.1606 79.0114 19.0011C79.5556 15.9295 78.6939 14.3936 76.4722 14.3936C75.5201 14.3936 74.7947 14.5254 74.3414 14.7885L72.7995 23.3456Z" fill="#FDAB0F"></path><path d="M97.6912 9.56662C103.993 9.56662 107.213 13.6037 106.079 19.9225C105.127 25.1886 101.183 28.6112 95.878 28.6112C89.5301 28.6112 86.2657 24.574 87.4896 18.2553C88.5323 12.9893 92.2958 9.56662 97.6912 9.56662ZM95.9236 23.7404C97.9631 23.7404 99.4153 21.7657 99.9133 19.0889C100.458 16.3244 99.6406 14.4375 97.6457 14.4375C95.6518 14.4375 94.1546 16.2804 93.6566 19.0889C93.1577 21.9412 93.9737 23.7404 95.9236 23.7404Z" fill="#FDAB0F" class="frame-start"></path><path d="M88.9901 14.3538C89.0023 14.3317 89.0216 14.3141 89.0452 14.3036C89.0687 14.2931 89.0951 14.2905 89.1204 14.2958C91.1627 14.7288 93.1836 15.1518 95.1829 15.5649C95.2229 15.5734 95.2683 15.5965 95.3191 15.6343C95.3561 15.6626 95.3977 15.6814 95.4435 15.6909L106.222 17.8557C106.263 17.864 106.299 17.8859 106.325 17.9175C106.35 17.949 106.364 17.9881 106.363 18.0284C106.215 22.9409 103.309 27.3442 98.1132 28.3644C95.5211 28.8736 92.2073 28.4903 90.0718 26.8773C86.1887 23.9456 86.9293 18.0425 88.9901 14.3538ZM94.1071 23.0343C93.4251 23.0654 92.7415 23.0984 92.0565 23.1334C91.8048 23.1476 91.6935 23.2735 91.6979 23.5054C91.699 23.5518 91.7233 23.5758 91.7711 23.5777L99.0661 23.8536C99.0845 23.854 99.103 23.8509 99.1201 23.8444C99.1371 23.8377 99.1526 23.828 99.1656 23.8154L100.196 22.815C100.256 22.7575 100.243 22.7306 100.158 22.7344L98.2815 22.8221C98.2161 22.8249 98.205 22.8027 98.2479 22.7556C98.6167 22.3491 98.9193 21.8991 99.1554 21.4058C99.1846 21.3445 99.2334 21.3213 99.3017 21.3364L100.935 21.7142C100.993 21.7274 101.046 21.717 101.095 21.6831L102.699 20.5285C102.762 20.4833 102.755 20.455 102.677 20.4437L89.3897 18.6297C89.3419 18.623 89.318 18.6434 89.318 18.6906V18.9353C89.318 19.0079 89.3546 19.0523 89.4278 19.0683L93.3387 19.9682C93.3816 19.9785 93.405 20.0045 93.409 20.0461C93.4968 20.9757 93.3299 22.3084 94.1247 22.9835C94.1617 23.0146 94.1559 23.0315 94.1071 23.0343Z" fill="#FDAB0F" class="frame-end"></path><path d="M107.802 28.1726L110.885 11.0148C114.014 10.0493 117.097 9.56662 120.045 9.56662C121.677 9.56662 122.991 10.0493 123.989 11.0148C126.029 10.0493 128.07 9.56662 130.11 9.56662C135.007 9.56662 137.592 11.7168 136.684 16.5877L134.599 28.1724H128.705L130.473 18.3429C130.971 15.666 130.155 14.3059 128.115 14.3059C127.525 14.3059 126.755 14.4814 125.894 14.8324C126.12 15.9295 126.075 17.202 125.848 18.6941L124.125 28.1726H118.231L119.999 18.3429C120.498 15.5787 119.954 14.306 118.095 14.306C117.506 14.306 116.825 14.3938 116.145 14.5254L113.697 28.1726H107.802Z" fill="#FDAB0F"></path></g><defs><clipPath id="clip0_9_34"><rect width="137" height="40" fill="white"></rect></clipPath></defs></svg>
        </div>
        <div>
            <ul className='flex faltu  gap-1 text-[0.93vw] uppercase'>
               <div className=' transition-all  hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]'><NavLink to='/sports'>sports</NavLink></div>
               <div className=' transition-all  hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]'> <NavLink to='/InPlay'>CANLI BAHİS</NavLink></div>
               <div className=' transition-all  hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]'> <NavLink to='/Casino'>Casino</NavLink></div>
               <div className=' transition-all  hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]'>  <NavLink to='/LiveCasino'>Canlı Casino</NavLink></div>
               <div className=' transition-all  hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]'> <NavLink to='/Bonus'>Bonuslar</NavLink></div>
               <div className=' transition-all  hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]'> <NavLink to='/LoyaltyProgram'>VIP PROGRAMI</NavLink></div>
            </ul>
        </div>
        {/* Right Section - Profile & Buttons */}
      <div className="flex z-10 items-center gap-4">
      <button className="bg-white  text-black font-bold px-4 py-1 rounded-lg">
          $0
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-1 rounded-lg">
          DEPOSIT
        </button>
       

        {/* Profile Section */}
        {user ? (
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)} className="relative flex items-center">
              <FaUserCircle size={36} className="text-yellow-400" />
              {/* <span className="ml-2 text-yellow-400 font-bold">{user.firstName}</span> */}
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-black/90 text-white rounded-lg shadow-md p-0">
                <div className="bg-yellow-500 text-black text-center font-bold py-2 rounded-t-md">
                  {user.firstName} {user.lastName}
                </div>
                
                <div className="p-4">
                 <div className=' flex justify-between items-center '>
                 <p className="text-white">CASHBACK</p>
                  <button className="md:w-[9vw] md:px-0 px-2 bg-green-500 hover:bg-green-600 text-white text-sm py-1 rounded-md">
                    GET CASHBACK
                  </button>
                 </div>
                  <p className="text-white mt-2 flex text-sm/7 justify-between items-center">MESSAGES: <span className="text-gray-500">NO MESSAGES</span></p>
                  <p className="text-white flex text-sm/7 justify-between items-center">LOYALTY LEVEL: <span className="text-white">BRONZE</span></p>
                  <p className="text-white flex text-sm/7 justify-between items-center">EXPERIENCE POINTS: <span className="text-green-400">0.00</span></p>
                  <p className="text-white flex text-sm/7 justify-between items-center">FREE SPINS: <span className="text-white">0</span></p>
                  <p className="text-white flex text-sm/7 justify-between items-center">BONUS BALANCE: <span className="text-white">0.00 ₺</span></p>
                  <p className="text-white flex text-sm/7 justify-between items-center">TOTAL WAGERING: <span className="text-white">NO ACTIVE BONUS</span></p>
                  <p className="text-white flex text-sm/7 justify-between items-center">PERIOD OF WAGERING: <span className="text-white">NO ACTIVE BONUS</span></p>
                </div>

                {/* Edit Profile & Logout Buttons */}
                <div className="flex justify-between bg-yellow-500 p-3 rounded-b-md">
                  <button onClick={() => navigate("/edit-profile")} className="flex items-center text-[#151414] ">
                    <MdEdit size={20} className="mr-2" /> EDIT PROFILE
                  </button>
                  <button onClick={handleLogout} className="flex items-center text-[#151414] ">
                    <IoMdLogOut size={20} className="mr-2" /> LOGOUT
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink to="/login" className="bg-white text-black px-4 py-2 rounded-lg">Login</NavLink>
            <NavLink to="/register" className="bg-green-500 text-white px-4 py-2 rounded-lg">Register</NavLink>
          </>
        )}
      </div>
      </div>

    </div>
  )
}

export default Navbar
