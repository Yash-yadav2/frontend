export default function Sidebar({ setActiveTab }) {
  return (
    <aside className="w-64 bg-gray-800 p-6">
      <h2 className="text-xl font-bold mb-4">My Account</h2>
      <ul className="space-y-3">
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("edit-profile")}>Edit Profile</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("history")}>History</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("verifications")}>Verifications</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("messages")}>Messages</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-4">Bonuses</h2>
      <ul className="space-y-3">
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("offers")}>Offers</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("active-bonuses")}>Active</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("bonus-history")}>History</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("vouchers")}>Vouchers</li>
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-4">Cash</h2>
      <ul className="space-y-3">
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("deposit")}>Deposit</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("withdrawal")}>Withdrawal</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("transaction-history")}>Transaction History</li>
        <li className="cursor-pointer hover:text-yellow-400" onClick={() => setActiveTab("cashback")}>Cashback</li>
      </ul>
    </aside>
  );
}
