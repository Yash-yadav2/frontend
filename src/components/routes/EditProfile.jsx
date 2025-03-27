import { useState } from "react";
import Sidebar from "../Sidebar";
import EditProfile from "../UpdateProfile";
import History from "../History";
import Verifications from "../Verifications";
import Messages from "../Messages";
import Offers from "../Offers";
import ActiveBonuses from "../ActiveBonuses";
import BonusHistory from "../BonusHistory";
import Vouchers from "../Vouchers";
import Deposit from "../Deposit";
import Withdrawal from "../Withdrawal";
import TransactionHistory from "../TransactionHistory";
import Cashback from "../Cashback";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("edit-profile");

  const renderContent = () => {
    switch (activeTab) {
      case "edit-profile":
        return <EditProfile />;
      case "history":
        return <History />;
      case "verifications":
        return <Verifications />;
      case "messages":
        return <Messages />;
      case "offers":
        return <Offers />;
      case "active-bonuses":
        return <ActiveBonuses />;
      case "bonus-history":
        return <BonusHistory />;
      case "vouchers":
        return <Vouchers />;
      case "deposit":
        return <Deposit />;
      case "withdrawal":
        return <Withdrawal />;
      case "transaction-history":
        return <TransactionHistory />;
      case "cashback":
        return <Cashback />;
      default:
        return <EditProfile />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-8">{renderContent()}</div>
    </div>
  );
}
