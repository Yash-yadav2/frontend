import { useState } from "react";
import { Eye, EyeOff, X } from "lucide-react";

export default function LoginForm({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#1a1a1a] text-white p-6 pl-0 pr-0 pt-0 rounded-lg shadow-lg w-[550px] relative">
        {/* Title with Close Button */}
        <div className="bg-yellow-400 top-0 text-black text-center py-3 rounded-t-lg font-bold relative">
          <span>Sugar Rush 1000</span>
          <button onClick={onClose} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-black">
            <X size={24} />
          </button>
        </div>
        
        <h2 className="text-center text-lg mt-4">Log in to play for real</h2>
        
        {/* Form */}
        <div className="mt-4 px-6 flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm">E-mail</label>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-3 py-2 bg-[#262626] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-1"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm">Casibom Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Casibom Password"
                className="w-full px-3 py-2 bg-[#262626] text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 mt-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex justify-between px-6 text-sm mt-3">
          <a href="#" className="text-yellow-400 hover:underline">Registration</a>
          <a href="#" className="text-yellow-400 hover:underline">Forgot password?</a>
        </div>
        
        {/* Buttons */}
       <div className=" w-full flex justify-center items-center flex-col">
       <button className=" bg-white text-black py-2 px-6 rounded-md mt-4 hover:bg-gray-200 font-semibold">
          LOGIN
        </button>
        
        <div className="text-center text-sm my-3">OR</div>
        
        <button className=" bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-500">
          PLAY FOR FREE
        </button>
       </div>
      </div>
    </div>
  );
}
