import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../axios";
import MobileDrop from "./Registration";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";

const Navbar = () => {
  const [DropOpen, setDropOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get user from Redux state
  const user = useSelector((state) => state.auth.user);

  const toggleDrop = () => {
    setDropOpen(!DropOpen);
  };

  const handleLogout = async () => {
    try {
      await axios.get("/auth/logout");
      dispatch(logout());
      alert("Logged out successfully!");
      navigate("/");
    } catch (err) {
      alert("Logout failed!");
    }
  };

  return (
    <div>
      {DropOpen && <MobileDrop isOpen={DropOpen} toggleDrop={toggleDrop} />}
      <div className="navbar flex justify-between text-white items-center">
        <div>
          {/* Logo SVG here */}
          <svg width="137" height="40" viewBox="0 0 137 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* ...SVG content... */}
          </svg>
        </div>
        <div>
          <ul className="flex gap-1 uppercase text-[0.93vw]">
            <div className="transition-all hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]">
              <NavLink to="/sports">sports</NavLink>
            </div>
            <div className="transition-all hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]">
              <NavLink to="/InPlay">CANLI BAHİS</NavLink>
            </div>
            <div className="transition-all hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]">
              <NavLink to="/Casino">Casino</NavLink>
            </div>
            <div className="transition-all hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]">
              <NavLink to="/LiveCasino">Canlı Casino</NavLink>
            </div>
            <div className="transition-all hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]">
              <NavLink to="/Bonus">Bonuslar</NavLink>
            </div>
            <div className="transition-all hover:border-[1px] py-[0.5vw] px-[1.2vw] rounded-lg border-[#fdb203]">
              <NavLink to="/LoyaltyProgram">VIP PROGRAMI</NavLink>
            </div>
          </ul>
        </div>

        {/* Right Section - Authentication / Profile */}
        <div className="flex items-center gap-4 z-10">
          {user ? (
            <div className="flex items-center gap-4">
              <button className="bg-white hidden text-black font-bold px-4 py-1 rounded-lg">
                $0
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-1 rounded-lg">
                DEPOSIT
              </button>
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center"
                >
                  <FaUserCircle size={36} className="text-yellow-400" />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-black/90 text-white rounded-lg shadow-md">
                    <div className="bg-yellow-500 text-black text-center font-bold py-2 rounded-t-md">
                      {user.user.firstName} {user.user.lastName}
                    </div>
                    <div className="p-4">
                      <p className="text-white flex justify-between items-center text-sm">
                        MESSAGES: <span className="text-gray-500">NO MESSAGES</span>
                      </p>
                      <p className="text-white flex justify-between items-center text-sm">
                        LOYALTY LEVEL: <span className="text-white">BRONZE</span>
                      </p>
                      <p className="text-white flex justify-between items-center text-sm">
                        EXPERIENCE POINTS: <span className="text-green-400">0.00</span>
                      </p>
                      <p className="text-white flex justify-between items-center text-sm">
                        FREE SPINS: <span className="text-white">0</span>
                      </p>
                      <p className="text-white flex justify-between items-center text-sm">
                        BONUS BALANCE: <span className="text-white">0.00 ₺</span>
                      </p>
                      <p className="text-white flex justify-between items-center text-sm">
                        TOTAL WAGERING: <span className="text-white">NO ACTIVE BONUS</span>
                      </p>
                      <p className="text-white flex justify-between items-center text-sm">
                        PERIOD OF WAGERING: <span className="text-white">NO ACTIVE BONUS</span>
                      </p>
                    </div>
                    <div className="flex justify-between bg-yellow-500 p-3 rounded-b-md">
                      <button
                        onClick={() => navigate("/edit")}
                        className="flex items-center text-[#151414]"
                      >
                        <MdEdit size={20} className="mr-2" /> EDIT PROFILE
                      </button>
                      <button
                        onClick={handleLogout}
                        className="flex items-center text-[#151414]"
                      >
                        <IoMdLogOut size={20} className="mr-2" /> LOGOUT
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={toggleDrop}
                className="bg-white text-black text-sm rounded-md px-4 py-2"
              >
                Login
              </button>
              <button
                onClick={toggleDrop}
                className="bg-[#33ae33] text-white text-sm rounded-md px-4 py-2"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
