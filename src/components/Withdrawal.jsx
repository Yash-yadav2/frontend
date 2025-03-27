import React from 'react'
import { useState } from "react";

const Withdrawal = () => {
  const [formData, setFormData] = useState({
    bonus: "Don't want bonus",
    paymentMethod: "Show all methods",
    withdrawalMethod: "Show all methods",
    withdrawalAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div> <h3 className="text-yellow-400 text-lg">Withdrawable ₹0.00</h3>
    <h3 className="text-yellow-400 text-lg mt-2">Step 1</h3>
    <p className="text-gray-300 text-sm">Select a withdraw method</p>
    <select
      name="withdrawalMethod"
      value={formData.withdrawalMethod}
      onChange={handleChange}
      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white mt-2"
    >
      <option>Show all methods</option>
      <option>Bank Transfer</option>
      <option>Crypto (USDT, BTC, ETH)</option>
      <option>E-Wallet (PayPal, Paytm)</option>
    </select>
    <h3 className="text-yellow-400 text-lg mt-4">Step 2</h3>
    <p className="text-gray-300 text-sm">Enter withdrawal amount</p>
    <input
      type="number"
      name="withdrawalAmount"
      value={formData.withdrawalAmount}
      onChange={handleChange}
      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white mt-2"
      placeholder="Enter amount"
    />
    <div className="mt-6 flex justify-center">
      <button className="bg-white text-black px-6 py-2 rounded">Withdraw</button>
    </div>
    </div>
  )
}

export default Withdrawal