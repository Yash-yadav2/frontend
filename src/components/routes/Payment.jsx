import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const paymentData = location.state || {};
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };

    updateTime(); 
    const timer = setInterval(updateTime, 60000); // Update time every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-full">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-blue-600 text-2xl font-bold">
            Tüm Bankalar <span className="text-green-500">fast</span>
          </h2>
          <div className="flex items-center text-green-500 font-bold text-lg">
            <span className="material-icons">schedule</span>
            <span className="ml-1">{currentTime}</span>
          </div>
        </div>

        <div className="mt-4 border border-gray-300 p-6 rounded-lg">
          <h3 className="text-green-600 font-bold text-lg">Deposit Info</h3>
          <div className="mt-2 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
            <p>⚠ You can only invest with a bank account in your own name.</p>
          </div>
          <div className="mt-2 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
            <p>⚠ Please invest using the new account information provided for each new investment transaction.</p>
          </div>

          <div className="mt-6">
            <label className="text-gray-700 font-semibold text-sm">Full Name</label>
            <input
              type="text"
              value={paymentData.accountHolderName || "N/A"}
              readOnly
              className="w-full p-3 bg-gray-200 border border-gray-300 rounded-lg mt-1 text-black font-semibold text-lg"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-semibold text-sm">Account Number</label>
            <input
              type="text"
              value={paymentData.accountNumber || "N/A"}
              readOnly
              className="w-full p-3 bg-gray-200 border border-gray-300 rounded-lg mt-1 text-black font-semibold text-lg"
            />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-semibold text-sm">Deposit Amount</label>
            <div className="flex justify-between items-center bg-gray-200 p-3 border border-gray-300 rounded-lg mt-1 text-lg font-semibold">
              <span className="text-black">₺ {paymentData.withdrawalAmount || "0"}</span>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-semibold text-sm">Payment Gateway</label>
            <div className="flex justify-between items-center bg-gray-200 p-3 border border-gray-300 rounded-lg mt-1 text-lg font-semibold">
              <span className="text-black">{paymentData.paymentMethod || "Unknown"}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowSuccess(true)}
          className="mt-6 p-4 bg-green-500 text-white rounded-lg w-full text-lg font-bold hover:bg-green-600 shadow-md"
        >
          Confirm that money is already transferred →
        </button>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-center">
            <div className="text-green-500 text-6xl">✔</div>
            <h2 className="text-xl font-bold mt-4">Your request has been received successfully! 🚀</h2>
            <p className="text-gray-600 mt-2">Your transfer amount will be transferred to your account shortly.</p>
            <p className="text-gray-800 font-semibold mt-2">
              Payment Method: {paymentData.paymentMethod || "Unknown"}
            </p>
            <p className="text-gray-800 font-semibold">Transaction Time: {currentTime}</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 p-4 bg-green-500 text-white rounded-lg w-full text-lg font-bold hover:bg-green-600 shadow-md"
            >
              Back to website →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
