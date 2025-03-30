import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Withdrawal from "./Withdrawal";
import TransactionHistory from "./TransactionHistory";
import Cashback from "./Cashback";

const paymentMethods = [
  { 
    name: "Bank Transfer", 
    image: "/images/bank.png", 
    min: 10, 
    max: 5000, 
    paymentType: "Bank",
    accountHolderName: "John Doe", 
    accountNumber: "1234567890" 
  },
  { 
    name: "USDT (TRC20)", 
    image: "/images/usdt.png", 
    min: 20, 
    max: 10000, 
    paymentType: "Bank",
    accountHolderName: "Alice Smith", 
    accountNumber: "USDT-9876543210" 
  },
  { 
    name: "Bitcoin", 
    image: "/images/btc.png", 
    min: 50, 
    max: 50000, 
    paymentType: "crypto",
    accountHolderName: "Bob Johnson", 
    accountNumber: "BTC-1234-5678-9012" 
  }
];

export default function TransactionPopup() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Deposit");
  const [formData, setFormData] = useState({
    bonus: "Don't want bonus",
    paymentMethod: "",
    withdrawalAmount: "",
  });
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    navigate("/edit-profile");
  };

  const handlePaymentMethodClick = () => {
    setShowPaymentPopup(true);
  };

  const handleSelectPaymentMethod = (method) => {
    setFormData({ ...formData, paymentMethod: method.name, withdrawalAmount: "" });
    setSelectedMethod(method);
    setShowPaymentPopup(false);
  };

  const handleDeposit = () => {
    navigate("/payment", { 
      state: { 
        paymentMethod: formData.paymentMethod, 
        withdrawalAmount: formData.withdrawalAmount, 
        bonus: formData.bonus, 
        accountHolderName: selectedMethod?.accountHolderName, 
        accountNumber: selectedMethod?.accountNumber 
      } 
    });
  };
  

  const isAmountValid = () => {
    if (!selectedMethod) return false;
    const amount = Number(formData.withdrawalAmount);
    return amount >= selectedMethod.min && amount <= selectedMethod.max;
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Deposit":
        return (
          <>
            <h3 className="text-yellow-400 text-lg">Step 1</h3>
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
            <button
              onClick={handlePaymentMethodClick}
              className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white mt-2"
            >
              {formData.paymentMethod || "Show all methods"}
            </button>

            {selectedMethod && (
              <>
                <h3 className="text-yellow-400 text-lg mt-4">Step 3</h3>
                <p className="text-gray-300 text-sm">Enter Amount ({`Min: $${selectedMethod.min} - Max: $${selectedMethod.max}`})</p>
                <input
                  type="number"
                  name="withdrawalAmount"
                  value={formData.withdrawalAmount}
                  onChange={handleChange}
                  className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white mt-2"
                  placeholder="Enter amount"
                  min={selectedMethod.min}
                  max={selectedMethod.max}
                />
                <button
                  onClick={handleDeposit}
                  className={`w-full p-2 mt-4 rounded text-white ${isAmountValid() ? "bg-green-500" : "bg-gray-500 cursor-not-allowed"}`}
                  disabled={!isAmountValid()}
                >
                  Add Deposit
                </button>
              </>
            )}
          </>
        );
      case "Withdrawal":
        return <Withdrawal />;
      case "Transaction History":
        return <TransactionHistory />;
      case "Cashback":
        return <Cashback />;
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
          <button onClick={handleClose} className="text-white text-xl">&times;</button>
        </div>
        <div className="mt-4">{renderContent()}</div>
      </div>

      {showPaymentPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-[400px]">
            <h3 className="text-yellow-400 text-lg">Select Payment Method</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <li
                  key={method.name}
                  className="p-2 bg-gray-700 rounded cursor-pointer text-white flex flex-col items-center text-center"
                  onClick={() => handleSelectPaymentMethod(method)}
                >
                  <img src={method.image} alt={method.name} className="h-12 mb-2" />
                  <span>{method.name}</span>
                  <span className="text-xs text-gray-400">{`Min: $${method.min} - Max: $${method.max}`}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowPaymentPopup(false)}
              className="mt-4 p-2 bg-red-500 text-white rounded w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
