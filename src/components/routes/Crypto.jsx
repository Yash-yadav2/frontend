import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../redux/transactionSlice";

export default function Crypto() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paymentData = location.state || {};
  const { user: logedinUser } = useSelector((state) => state.auth);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [countdown, setCountdown] = useState(5); 

  
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
    
    const transactionData = {
      user: logedinUser.user._id,
      amount: paymentData.withdrawalAmount,
      paymentType: paymentData.paymentType || "crypto",
      paymentMethod: paymentData.paymentMethod || "crypto",
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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#151211] bg-opacity-60 z-50">
      <div className="relative bg-[#151211] w-full max-w-md rounded-lg shadow-lg text-white p-6">
        {/* Close button */}
        <button
          onClick={() => navigate("/")}
          className="absolute top-3 right-3 text-gray-300 hover:text-white"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-yellow-400 mb-6">
          Payment
        </h2>

        {/* Amount Info */}
        <div className="text-center mb-4">
          <p className="text-lg mb-2">
            <strong>Amount: ₺</strong> {paymentData.withdrawalAmount}
          </p>
          <p className="text-sm">
            To replenish the account balance by{" "}
            <span className="font-semibold"> {paymentData.paymentMethod}</span>
          </p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-4">
          {/* Replace this placeholder with your QR code image/component */}
          <div className="w-40 h-40  flex items-center justify-center">
           <img className="h-full object-fill w-full " src={paymentData.QRcode} alt="sada" />
          </div>
        </div>

        {/* Copyable Fields */}
        <div className="flex flex-col space-y-2 mb-4">
          {/* Amount to send */}
          <div className="bg-[#151211] rounded px-3 py-2 flex-col items-start flex  justify-between">
            <span className="text-sm">Amount to send:</span>
            <div className="flex items-center justify-between gap-2  border-2 border-gray-700 w-full">
              <span className="px-2 py-0 ">{paymentData.accountHolderName}</span>
              <button
                onClick={() =>
                  copyToClipboard(`${paymentData.accountHolderName} ${paymentData.accountHolderName}`)
                }
                className="text-xs bg-yellow-500 hover:bg-yellow-600 text-black px-2 py-1 rounded"
              >
                COPY
              </button>
            </div>
          </div>

          {/* Wallet Address */}
          <div className="bg-[#151211] rounded px-3 py-2  flex flex-col items-start justify-between">
            <span className="text-sm">Wallet Address:</span>
            <div className="flex items-center border-2 border-gray-700 gap-2  w-full justify-between">
              <span className="px-2 py-0 ">{paymentData.WalletAddress}</span>
              <button
                onClick={() => copyToClipboard(paymentData.WalletAddress)}
                className="text-xs bg-yellow-500 hover:bg-yellow-600 text-black px-2 py-1 rounded"
              >
                COPY
              </button>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="bg-[#151211] p-3 rounded text-sm mb-6">
          <p className=" text-center">
            This is the deposit address generated for you. Any deposit made to
            this address will appear on the balance after several transaction
            confirmations.
          </p>
        </div>

        {/* Got It Button */}
        <div className=" flex justify-center items-center">
        <button onClick={handleConfirmTransaction}
          className="bg-yellow-500 hover:bg-yellow-600  py-1 px-3 text-black rounded font-semibold"
        >
          GOT IT
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
              Redirecting in{" "}
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
