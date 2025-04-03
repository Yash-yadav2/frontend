import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../redux/transactionSlice";

export default function Superbank() {
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
      paymentMethod: paymentData.paymentMethod || "super bank",
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
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white  shadow-lg w-[700px] text-center">
        <div className="bg-lime-400 py-5 text-black text-2xl font-bold">
        {paymentData.paymentMethod || "Unknown"}
        </div>

        <div className="p-20">
          <p className="my-0 text-base">
            ParolaPara Giriş bilgilerinizi girerek yatırım yapabilirsiniz.
          </p>
          <p className="text-red-500 font-bold mb-6 text-lg">
            Kalan Süre : {currentTime}
          </p>
          <form >
            <div className=" flex flex-col items-start">
            <span>Account Holder Name</span>
            <input
              type="text"
              value={paymentData.accountHolderName}
              className="mb-4 w-full p-3 text-lg border rounded-lg"
            />
            </div>
            <div className=" flex flex-col items-start">
            <span> Account Number</span>
            <input
              type="text"
              value={paymentData.accountNumber}
              className="mb-6 w-full p-3 text-lg border rounded-lg"
            />
            </div>
            <div className=" flex flex-col items-start">
            <span>Amount</span>
            <input
              type="text"
              value={paymentData.withdrawalAmount}
              className="mb-6 w-full p-3 text-lg border rounded-lg"
            />
            </div>
            <div className="flex justify-between gap-2">
            <button onClick={() => navigate("/")} type="button" className="bg-red-500 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg rounded-lg w-1/2">İPTAL ET</button>
            <button onClick={handleConfirmTransaction} type="submit" className="bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-lg rounded-lg w-1/2">DEVAM ET</button>
          </div>
          </form>
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