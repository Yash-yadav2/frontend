import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../redux/transactionSlice";

export default function PaparaLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paymentData = location.state || {};
  const { user: logedinUser } = useSelector((state) => state.auth);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [countdown, setCountdown] = useState(5); // Countdown set to 5 seconds


  useEffect(() => {
    if (showSuccess) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        navigate("/");
      }, 5000); // Redirect after 5 seconds

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [showSuccess, navigate]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleConfirmTransaction = () => {
    if (!logedinUser || !logedinUser.user || !logedinUser.user._id) {
      alert("You need to be logged in to confirm a transaction.");
      return;
    }

    // Build the transaction data object using all relevant depositData
    const transactionData = {
      user: logedinUser.user._id,
      amount: paymentData.withdrawalAmount,
      paymentType: paymentData.paymentType || "bank",
      paymentMethod: paymentData.paymentMethod || "tum banker",
      companyAccountHolderName: paymentData.accountHolderName,
      companyAccountNumber: paymentData.accountNumber,
      bankName: paymentData.bankName,
      // Optional fields if applicable
      WalletAddress: paymentData.WalletAddress,
      QRcode: paymentData.QRcode,
      image: paymentData.image,
      min: paymentData.min,
      max: paymentData.max,
      bonus: paymentData.bonus,
      updatedAt: paymentData.updatedAt,
    };


    dispatch(createTransaction(transactionData))
      .unwrap()
      .then(() => setShowSuccess(true))
      .catch((err) => alert("Transaction failed frontend: " + err));
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        {/* Logo */}
        <h1 className="text-4xl font-bold text-center mb-6">papara</h1>
        
        {/* Step 1 */}
        <div>
          <h2 className="text-lg font-semibold">1. Papara Giriş</h2>
          <p className="text-gray-500 text-sm">Papara hesabınıza giriş yapın</p>
          
          {/* Email Input */}
          <label className="text-gray-700 font-semibold text-sm">
              Full Name
            </label>
          <input
            type="text"
            placeholder="accountHolderName"
            className="w-full p-3 border border-gray-300 rounded-lg mt-4"
            value={paymentData.accountHolderName}
            readOnly
          />
          
          {/* Password Input */}
          <label className="text-gray-700 font-semibold text-sm">
              Account Number
            </label>
          <input
            type="text"
            placeholder="accountNumber"
            className="w-full p-3 border border-gray-300 rounded-lg mt-4"
            value={paymentData.accountNumber}
            readOnly
          />
        </div>
        

        <div className="mt-4 p-3 bg-gray-100 border rounded-lg">
          <p className="text-sm text-gray-500">Yatırılacak Tutar</p>
          <p className="text-xl font-bold">$ {paymentData.amount}</p>
        </div>
        
        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button onClick={() => navigate("/")} className="bg-red-500 text-white px-6 py-3 rounded-lg">İptal</button>
          <button onClick={handleConfirmTransaction}
            className= 'px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-500 bg-gray-300'
           
          >
            Onayla
          </button>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl text-center">
            <div className="text-green-500 text-6xl">✔</div>
            <h2 className="text-xl font-bold mt-4">
              Your request has been received successfully! 🚀
            </h2>
            <p className="text-gray-600 mt-2">
              Your transfer amount will be transferred to your account shortly.
            </p>
            <p className="text-gray-800 font-semibold">
              Transaction Time: {currentTime}
            </p>
            <p className="text-gray-500 mt-2">
              Redirecting in casibom.com 
              <span className="font-bold text-green-600">{countdown}s</span>...
            </p>
            <button
             onClick={() => window.open("https://casibom.com/", "_blank")}
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
