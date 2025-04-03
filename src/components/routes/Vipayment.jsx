import bankIcon from "../../assets/bank.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../redux/transactionSlice";

const Vipayment = () => {
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
      paymentMethod: paymentData.paymentMethod || "vip payment",
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
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        {/* Bank Transfer Logo */}
        <div className="text-center mb-4 flex justify-center items-center gap-2">
        <img src={bankIcon} alt={paymentData.paymentMethod} className="h-14 mr-4" />
          <h2 className="text-orange-500 text-xl font-bold">{paymentData.bankName}</h2>
        </div>

        {/* Header Navigation */}
        <div className="flex items-center justify-between mb-4 bg-purple-600 text-white">
          <span className=" font-semibold">● Ödeme</span>
          <span className="">{">"}</span>
          <span className=" font-semibold">● Hesap</span>
          <span className="">{">"}</span>
          <span className=" font-semibold">● Tamamlandı</span>
        </div>

        {/* Alerts */}
        <div className="bg-red-500 text-white text-sm p-2 rounded mb-2">
          Hesaplar anlık olarak güncellenmektedir. Lütfen her yatırım öncesinde
          yeni hesap bilgisini alınız.
        </div>

        {/* Bank Selection */}
        <label className="block text-gray-700 font-semibold mb-1">Banka</label>
        <input
          type="text"
          className="w-full p-2 border rounded bg-gray-200"
          value={paymentData.accountHolderName}
          readOnly
        />

        {/* Name Field */}
        <div className="bg-red-500 text-white text-sm p-2 rounded mb-2">
          İşlemlerin anlık onaylanması için hesap ismini tam ve eksiksiz olarak
          doldurmanız gerekmektedir.
        </div>
        <label className="block text-gray-700 font-semibold mb-1">
          Ad Soyad
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded bg-gray-200"
          value={paymentData.accountNumber}
          readOnly
        />

        {/* Amount Input */}
        <label className="block text-gray-700 font-semibold mt-3 mb-1">
          Yatırılacak Miktar (₺)
        </label>
        <div className="flex items-center border rounded overflow-hidden">
         
          <input
            type="number"
            className="w-full p-2 text-center"
            value={paymentData.withdrawalAmount}
            readOnly
          />
        </div>

        {/* Information Alert */}
        <div className="bg-yellow-500 text-white text-sm p-2 rounded mt-3">
          Bu ödeme yöntemi sadece 1000 TL ile 5000 TL arasındaki Banka Havalesi
          transferleri içindir. Diğer tutarlardaki transferleriniz için lütfen
          diğer ödeme yöntemlerini kullanınız.
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-4 gap-2">
          <button onClick={() => navigate("/")} className="bg-purple-600 text-white py-2 px-4 rounded w-32 md:w-40">
            Siteye Dön
          </button>
          <button onClick={handleConfirmTransaction} className="bg-green-600 text-white py-2 px-4 rounded w-40 md:w-60">
            Sonraki Adım
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
};

export default Vipayment;