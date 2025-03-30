import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../redux/transactionSlice";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paymentData = location.state || {};
  const user = useSelector((state) => state.auth.user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleConfirmTransaction = () => {
    if (!user) {
      alert("You need to be logged in to confirm a transaction.");
      return;
    }
    
    const transactionData = {
      user: user._id,
      amount: paymentData.withdrawalAmount,
      paymentType: paymentData.paymentType || 'bank',
      paymentMethod: paymentData.paymentMethod,
      companyAccountHolderName: paymentData.accountHolderName,
      companyAccountNumber: paymentData.accountNumber || '1234565886',
    };

    dispatch(createTransaction(transactionData))
      .unwrap()
      .then(() => setShowSuccess(true))
      .catch((err) => alert("Transaction failed: " + err));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-full">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-blue-600 text-2xl font-bold">
            {paymentData.paymentMethod || "Unknown"}
          </h2>
          <div className="flex items-center text-green-500 font-bold text-lg">
            <span>{currentTime}</span>
          </div>
        </div>

        <div className="mt-4 border border-gray-300 p-6 rounded-lg">
          <h3 className="text-green-600 font-bold text-lg">Deposit Info</h3>
          <div className="mt-2 p-3 bg-red-100 text-red-600 rounded-lg text-sm">
            <p>⚠ You can only invest with a bank account in your own name.</p>
          </div>

          <div className="mt-6">
            <label className="text-gray-700 font-semibold text-sm">Full Name</label>
            <input type="text" value={paymentData.accountHolderName || "N/A"} readOnly
              className="w-full p-3 bg-gray-200 border border-gray-300 rounded-lg mt-1 text-black font-semibold text-lg" />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-semibold text-sm">Account Number</label>
            <input type="text" value={paymentData.accountNumber || "N/A"} readOnly
              className="w-full p-3 bg-gray-200 border border-gray-300 rounded-lg mt-1 text-black font-semibold text-lg" />
          </div>

          <div className="mt-4">
            <label className="text-gray-700 font-semibold text-sm">Deposit Amount</label>
            <div className="flex justify-between items-center bg-gray-200 p-3 border border-gray-300 rounded-lg mt-1 text-lg font-semibold">
              <span className="text-black">₺ {paymentData.withdrawalAmount || "0"}</span>
            </div>
          </div>
        </div>

        <button onClick={handleConfirmTransaction} className="mt-6 p-4 bg-green-500 text-white rounded-lg w-full text-lg font-bold hover:bg-green-600 shadow-md">
          Confirm that money is already transferred →
        </button>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-center">
            <div className="text-green-500 text-6xl">✔</div>
            <h2 className="text-xl font-bold mt-4">Your request has been received successfully! 🚀</h2>
            <p className="text-gray-600 mt-2">Your transfer amount will be transferred to your account shortly.</p>
            <p className="text-gray-800 font-semibold mt-2">Payment Method: {paymentData.paymentMethod || "Unknown"}</p>
            <p className="text-gray-800 font-semibold">Transaction Time: {currentTime}</p>
            <button onClick={() => navigate("/")} className="mt-6 p-4 bg-green-500 text-white rounded-lg w-full text-lg font-bold hover:bg-green-600 shadow-md">
              Back to website →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
