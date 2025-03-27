import { useState } from "react";
import Withdrawal from "./Withdrawal";
import TransactionHistory from "./TransactionHistory";
import Cashback from "./Cashback";
import { useNavigate } from "react-router-dom";

export default function TransactionPopup({ onClose }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Deposit");
  const [formData, setFormData] = useState({
    bonus: "Don't want bonus",
    paymentMethod: "Show all methods",
    withdrawalMethod: "Show all methods",
    withdrawalAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    navigate("/edit");
  };
  
  const renderContent = () => {
    switch (activeTab) {
      case "Deposit":
        return (
          <>
            <h3 className="text-yellow-400 text-lg">Stepper 1</h3>
            <p className="text-gray-300 text-sm">Select a bonus</p>
            <select
              name="bonus"
              value={formData.bonus}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white mt-2"
            >
              <option>Don't want bonus</option>
              <option>Bonus 10%</option>
              <option>Bonus 20%</option>
            </select>
            <h3 className="text-yellow-400 text-lg mt-4">Step 2</h3>
            <p className="text-gray-300 text-sm">Select a payment method</p>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white mt-2"
            >
              <option>Show all methods</option>
              <option>Bank Transfer</option>
              <option>Crypto (USDT, BTC, ETH)</option>
              <option>E-Wallet (PayPal, Paytm)</option>
            </select>
          </>
        );
      case "Withdrawal":
        return (
          <>
           <Withdrawal/>
          </>
        );
      case "Transaction History":
        return (
          <>
           <TransactionHistory/>
          </>
        );
      case "Cashback":
        return (
          <>
           <Cashback/>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-[500px]">
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <div className="flex gap-4">
            {["Deposit", "Withdrawal", "Transaction History", "Cashback"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-white px-2 pb-2 border-b-2 ${activeTab === tab ? "border-yellow-400" : "border-transparent"}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button onClick={handleClose} className="text-white   p-2 text-xl">&times;</button>
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>
    </div>
  );
}
