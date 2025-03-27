import React, { useState } from "react";
import axios from "../axios"; 
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice"; 

const Registration = ({ isOpen }) => {
  const [activeTab, setActiveTab] = useState("register");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    currency: "TRY",
    countryCode: "+1",
    phoneNumber: "",
    isAdult: false,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
        alert("You must accept the terms and conditions");
        return;
    }
    try {
      const res = await axios.post("/auth/register", formData);
      dispatch(login({ user: res.data.user, token: res.data.token }));
      alert("Registration successful!");
      navigate("/Casino");
    } catch (error) {
        alert(error.response?.data.message || "Error registering user");
    }
  };

  // Renamed faltuData to loginData
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChangeLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", loginData);
      dispatch(login({ user: res.data.user, token: res.data.token }));
      alert("Login successful!");
      navigate("/Casino");
    } catch (err) {
        setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className={`fixed h-auto pb-5 md:pb-10 md:h-auto w-[90vw] form md:w-[25vw] top-20 right-1/2 md:right-10 translate-x-1/2 md:translate-x-0 bg-[#151211] text-white z-50 transition-all duration-300 p-0 rounded-lg shadow-lg ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>  
      <div className="flex w-full mb-4 border-b-2 border-[#33ae33]">
        <button className={`w-1/2 rounded-lg py-2 text-center ${activeTab === "login" ? "bg-[#33ae33] text-black" : "bg-gray-800"}`} onClick={() => setActiveTab("login")}>
          Login
        </button>
        <button className={`w-1/2 rounded-lg py-2 text-center ${activeTab === "register" ? "bg-[#33ae33] text-black" : "bg-gray-800"}`} onClick={() => setActiveTab("register")}>
          Register
        </button>
      </div>

      {activeTab === "register" ? (
       <form onSubmit={handleRegister} className="space-y-4 px-6">
       <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
         
         
         <input
           type="text"
           name="firstName"
           placeholder="First name"
           value={formData.firstName}
           onChange={handleChange}
           required
           className="w-full md:w-1/2 p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"
         />
         <input
           type="text"
           name="lastName"
           placeholder="Last name"
           value={formData.lastName}
           onChange={handleChange}
           required
           className="w-full md:w-1/2 p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"
         />
       </div>

       <input
         type="email"
         name="email"
         placeholder="E-mail"
         value={formData.email}
         onChange={handleChange}
         required
         className="w-full p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"
       />

       <input
         type="password"
         name="password"
         placeholder="Password"
         value={formData.password}
         onChange={handleChange}
         required
         className="w-full p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"
       />

       <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
         <select
           name="currency"
           value={formData.currency}
           onChange={handleChange}
           required
           className="w-full md:w-1/2 p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"
         >
           <option value="TRY">TRY</option>
           <option value="USD">USD</option>
           <option value="EUR">EUR</option>
         </select>

         <div className="flex w-full md:w-1/2 space-x-2">
           <select
             name="countryCode"
             value={formData.countryCode}
             onChange={handleChange}
             required
             className="w-1/3 p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"
           >
             <option value="+1">+1</option>
             <option value="+91">+91</option>
             <option value="+44">+44</option>
           </select>
           <input
             type="text"
             name="phoneNumber"
             placeholder="Phone number"
             value={formData.phoneNumber}
             onChange={handleChange}
             required
             className="w-2/3 p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"
           />
         </div>
       </div>

       <div className="flex flex-col space-y-2">
         <label className="flex items-center space-x-2">
           <input
             type="checkbox"
             name="isAdult"
             checked={formData.isAdult}
             onChange={() => setFormData({ ...formData, isAdult: !formData.isAdult })}
             required
             className="w-4 h-4"
           />
           <span>I confirm that I'm 18 years or older</span>
         </label>

         <label className="flex items-center space-x-2">
           <input
             type="checkbox"
             name="termsAccepted"
             checked={formData.termsAccepted}
             onChange={() => setFormData({ ...formData, termsAccepted: !formData.termsAccepted })}
             required
             className="w-4 h-4"
           />
           <span>
             I have read and accepted the{" "}
             <a href="#" className="text-yellow-400 hover:underline">
               Terms and Conditions
             </a>
           </span>
         </label>
       </div>

       <button className="w-full py-2 bg-yellow-500 rounded-md text-black font-semibold hover:bg-yellow-600 transition-all">
         REGISTER
       </button>
     </form>
      ) : (
        <form onSubmit={handleLogin} className="space-y-4 px-6">
          {error && <p className="text-red-500">{error}</p>}
          <input type="email" name="email" placeholder="E-mail" value={loginData.email} onChange={handleChangeLogin} required className="w-full p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"/>
          <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleChangeLogin} required className="w-full p-2 rounded-md bg-white border text-black border-gray-700 focus:ring-2 focus:ring-yellow-400"/>
          <button className="w-full py-2 bg-yellow-500 rounded-md text-black font-semibold hover:bg-yellow-600 transition-all">LOGIN</button>
        </form>
      )}
    </div>
  );
};

export default Registration;
