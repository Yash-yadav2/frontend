import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Withdrawal from "./Withdrawal";
import TransactionHistory from "./TransactionHistory";
import Cashback from "./Cashback";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyAccounts } from "../redux/companyAccountSlice";

export default function TransactionPopup(onClose) {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const dispatch = useDispatch();
  const { data: accounts, loading, error } = useSelector(
    (state) => state.companyAccounts
  );
  // Assuming your user information is stored in state.auth.user.
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Deposit");
  const [formData, setFormData] = useState({
    bonus: "Don't want bonus",
    paymentMethod: "",
    withdrawalAmount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    dispatch(fetchCompanyAccounts());
  }, [dispatch]);

  const handleClose = () => {
    navigate(-1); 
  };

  const handlePaymentMethodClick = () => {
    setShowPaymentPopup(true);
  };

  const handleSelectPaymentMethod = (method) => {
    console.log("Selected method:", method);
    // Use paymentMethod field as the display name
    setFormData({
      ...formData,
      paymentMethod: method.paymentMethod || "Unknown Method",
      withdrawalAmount: "",
    });
    setSelectedMethod(method);
    setShowPaymentPopup(false);
  };

  const handleDeposit = () => {
    if (!selectedMethod) {
      console.error("No payment method selected.");
      return;
    }

    // Determine payment type (assumed to be lowercase for routing logic)
    const paymentType = (selectedMethod.paymentType || "").toLowerCase();
    if (!paymentType) {
      console.error("Payment type not found on selected method:", selectedMethod);
      return;
    }

    // Include all desired data from the selected method and the user
    const depositData = {
      paymentMethod: formData.paymentMethod,
      withdrawalAmount: formData.withdrawalAmount,
      bonus: formData.bonus,
      accountHolderName: selectedMethod.accountHolderName,
      accountNumber: selectedMethod.accountNumber,
      bankName: selectedMethod.bankName,
      paymentType: selectedMethod.paymentType,
      min: selectedMethod.min,
      max: selectedMethod.max,
      updatedAt: selectedMethod.updatedAt,
      QRcode: selectedMethod.QRcode,
      image: selectedMethod.image,
      // Include crypto-specific fields if applicable
      ...(paymentType === "crypto" && { WalletAddress: selectedMethod.WalletAddress }),
      // Include user information
      user: user || {},
    };

    // Navigate based on the payment type
    if (paymentType === "crypto") {
      navigate("/crypto", { state: depositData });
    } else if (paymentType === "bank") {
      navigate("/payment", { state: depositData });
    } else if (paymentType === "vipbank") {
      navigate("/vipayment", { state: depositData });
    } else if (paymentType === "super") {
      navigate("/superbank", { state: depositData });
    } else {
      console.error("Unknown payment type:", paymentType);
    }
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
              className="w-full p-2 bg-[#151211] border border-gray-300 rounded text-white mt-2"
            >
              <option>Don't want bonus</option>
            </select>

            <h3 className="text-yellow-400 text-lg mt-4">Step 2</h3>
            <p className="text-gray-300 text-sm">Select a payment method</p>
            <button
              onClick={handlePaymentMethodClick}
              className="w-full p-2 bg-[#151211] border border-gray-300 rounded text-white mt-2"
            >
              {formData.paymentMethod || "Show all methods"}
            </button>

            {selectedMethod && (
              <>
                <h3 className="text-yellow-400 text-lg mt-4">Step 3</h3>
                <p className="text-gray-300 text-sm">
                  Enter Amount ({`Min: $${selectedMethod.min} - Max: $${selectedMethod.max}`})
                </p>
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
                  className={`w-full p-2 mt-4 rounded text-white ${
                    isAmountValid() ? "bg-green-500" : "bg-gray-500 cursor-not-allowed"
                  }`}
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
    <div className="fixed z-50 inset-0 flex justify-center items-center bg-black bg-opacity-60">
      <div className="bg-[#151211] p-0 rounded-lg shadow-lg w-[600px]">
        <div className="h-10 w-full rounded-t-lg bg-[#fbb203]"></div>
        <div className="flex justify-between p-6 items-center border-b border-gray-700 pb-3">
          <div className="flex gap-4">
            {["Deposit", "Withdrawal", "Transaction History", "Cashback"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-white px-3 py-1 border-b-2 ${
                  activeTab === tab ? "border-yellow-400" : "border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button onClick={handleClose} className="text-white text-xl">
            &times;
          </button>
        </div>
        <div className="mt-4 p-6">{renderContent()}</div>
      </div>

      {showPaymentPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-[#151211] p-0 rounded-2xl shadow-2xl w-[90%] max-w-lg transform transition-all duration-300">
            <h3 className="text-black p-3 rounded-t-2xl bg-[#FACC15] text-xl text-center">
              Select Payment Method
            </h3>
            <div className="mt-6 flex flex-col gap-4 max-h-64 overflow-y-auto pr-2">
              {loading && <p className="text-white text-center">Loading methods...</p>}
              {error && <p className="text-red-500 text-center">{error}</p>}
              {!loading && accounts && accounts.length > 0 ? (
                accounts.map((method) => (
                  <div
                    key={method.accountNumber}
                    onClick={() => handleSelectPaymentMethod(method)}
                    className="p-4 bg-[#151211] border-b-2 border-[#fff] hover:border-2 hover:border-[#FACC15] cursor-pointer text-white transition-colors duration-200 flex items-center"
                  >
                    {/* Display image if available; fallback to QRcode if provided */}
                    {method.image ? (
                      <img src={method.image} alt={method.paymentMethod} className="h-14 mr-4" />
                    ) : method.QRcode ? (
                      <img src={method.QRcode} alt={method.paymentMethod} className="h-14 mr-4" />
                    ) : (
                      <div className="h-14 w-14 mr-4 bg-gray-700 flex items-center justify-center">
                        N/A
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="font-semibold">{method.paymentMethod}</span>
                      <span className="text-lg text-[#FACC15]">{`Min: $${method.min} - Max: $${method.max}`}</span>
                    </div>
                  </div>
                ))
              ) : (
                !loading && <p className="text-white text-center">No payment methods available.</p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() => setShowPaymentPopup(false)}
                className="mt-6 px-5 py-2 bg-[#FACC15] text-black rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
