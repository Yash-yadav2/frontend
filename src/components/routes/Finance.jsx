import { useState } from "react";
import { Card, CardContent } from "/src/components/ui/card";
import { Button } from "/src/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "/src/components/ui/table";
import { Input } from "/src/components/ui/input";
import Textarea from "/src/components/ui/textarea";

export default function FinanceAdminPanel() {
  const [financeUser] = useState({
    name: "Finance Manager",
    profilePic: "https://via.placeholder.com/40", // Replace with real profile pic
  });
  const [transactions, setTransactions] = useState([
    { id: 1, userId: "U123", firstName: "John", lastName: "Doe", amount: "$100", status: "Pending", accountNumber: "123456789", paymentGateway: "PayPal", dateTime: "2025-03-27 14:30", rejectionNote: "" },
    { id: 2, userId: "U456", firstName: "Jane", lastName: "Smith", amount: "$250", status: "Received", accountNumber: "987654321", paymentGateway: "Stripe", dateTime: "2025-03-26 10:15", rejectionNote: "" },
    { id: 3, userId: "U789", firstName: "Alice", lastName: "Johnson", amount: "$180", status: "Rejected", accountNumber: "456123789", paymentGateway: "Payoneer", dateTime: "2025-03-25 09:45", rejectionNote: "Insufficient funds" },
    { id: 4, userId: "U234", firstName: "Bob", lastName: "Williams", amount: "$320", status: "Pending", accountNumber: "321654987", paymentGateway: "Wise", dateTime: "2025-03-24 16:30", rejectionNote: "" },
    { id: 5, userId: "U567", firstName: "Charlie", lastName: "Brown", amount: "$50", status: "Received", accountNumber: "852963741", paymentGateway: "CashApp", dateTime: "2025-03-23 18:20", rejectionNote: "" },
    { id: 6, userId: "U678", firstName: "David", lastName: "Clark", amount: "$220", status: "Rejected", accountNumber: "741852963", paymentGateway: "Google Pay", dateTime: "2025-03-22 10:30", rejectionNote: "Payment verification failed" },
    { id: 7, userId: "U901", firstName: "Emma", lastName: "Lewis", amount: "$140", status: "Pending", accountNumber: "369258147", paymentGateway: "Amazon Pay", dateTime: "2025-03-21 12:10", rejectionNote: "" },
    { id: 8, userId: "U345", firstName: "Franklin", lastName: "Martin", amount: "$200", status: "Received", accountNumber: "258369147", paymentGateway: "Venmo", dateTime: "2025-03-20 15:50", rejectionNote: "" },
    { id: 9, userId: "U456", firstName: "Grace", lastName: "White", amount: "$90", status: "Rejected", accountNumber: "159753468", paymentGateway: "Apple Pay", dateTime: "2025-03-19 17:40", rejectionNote: "Card declined" },
    { id: 10, userId: "U678", firstName: "Henry", lastName: "Thompson", amount: "$260", status: "Received", accountNumber: "753159246", paymentGateway: "Bank Transfer", dateTime: "2025-03-18 11:25", rejectionNote: "" },
    { id: 11, userId: "U789", firstName: "Isabella", lastName: "Scott", amount: "$175", status: "Pending", accountNumber: "951753852", paymentGateway: "Crypto", dateTime: "2025-03-17 23:15", rejectionNote: "" },
    { id: 12, userId: "U890", firstName: "Jack", lastName: "Harris", amount: "$120", status: "Rejected", accountNumber: "456789123", paymentGateway: "PayPal", dateTime: "2025-03-16 08:50", rejectionNote: "Account limit reached" },
    { id: 13, userId: "U901", firstName: "Kelly", lastName: "Moore", amount: "$500", status: "Pending", accountNumber: "123987654", paymentGateway: "Stripe", dateTime: "2025-03-15 19:30", rejectionNote: "" },
    { id: 14, userId: "U234", firstName: "Liam", lastName: "Anderson", amount: "$330", status: "Received", accountNumber: "852741963", paymentGateway: "Google Pay", dateTime: "2025-03-14 13:10", rejectionNote: "" },
    { id: 15, userId: "U345", firstName: "Mia", lastName: "Thomas", amount: "$75", status: "Rejected", accountNumber: "456123789", paymentGateway: "Wise", dateTime: "2025-03-13 07:25", rejectionNote: "Suspicious activity detected" },
    { id: 16, userId: "U567", firstName: "Nathan", lastName: "Martinez", amount: "$145", status: "Pending", accountNumber: "159357486", paymentGateway: "Venmo", dateTime: "2025-03-12 21:40", rejectionNote: "" },
    { id: 17, userId: "U678", firstName: "Olivia", lastName: "King", amount: "$210", status: "Received", accountNumber: "357159486", paymentGateway: "Amazon Pay", dateTime: "2025-03-11 05:55", rejectionNote: "" },
    { id: 18, userId: "U789", firstName: "Paul", lastName: "Walker", amount: "$95", status: "Rejected", accountNumber: "951654357", paymentGateway: "Bank Transfer", dateTime: "2025-03-10 15:10", rejectionNote: "Incorrect account details" },
    { id: 19, userId: "U890", firstName: "Quinn", lastName: "Robinson", amount: "$275", status: "Pending", accountNumber: "321456987", paymentGateway: "Crypto", dateTime: "2025-03-09 10:20", rejectionNote: "" },
    { id: 20, userId: "U901", firstName: "Rachel", lastName: "Carter", amount: "$150", status: "Received", accountNumber: "654321789", paymentGateway: "Payoneer", dateTime: "2025-03-08 22:05", rejectionNote: "" }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [rejectionReason, setRejectionReason] = useState("");
  const [showRejectionModal, setShowRejectionModal] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // Mark as Received
  const markAsReceived = (id) => {
    setTransactions((prev) =>
      prev.map((txn) =>
        txn.id === id ? { ...txn, status: "Received", rejectionNote: "" } : txn
      )
    );
  };
  

  // Handle Payment Rejection
  const rejectPayment = () => {
    if (!rejectionReason.trim()) {
      alert("Please provide a reason for rejection.");
      return;
    }
    setTransactions((prev) =>
      prev.map((txn) =>
        txn.id === selectedTransaction.id ? { ...txn, status: "Rejected", rejectionNote: rejectionReason } : txn
      )
    );
    setShowRejectionModal(false);
    setRejectionReason("");
  };

  // Filter Transactions
  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = Object.values(txn).some((val) => val.toString().toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === "All" || txn.status === statusFilter;

    const txnDate = new Date(txn.dateTime);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    const matchesDate = (!start || txnDate >= start) && (!end || txnDate <= end);

    return matchesSearch && matchesStatus && matchesDate;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
     {/* Navbar with Finance Member Profile */}
     <div className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Finance Admin Panel</h1>
        <div className="relative">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
            <img src={financeUser.profilePic} alt="Finance User" className="w-10 h-10 rounded-full border border-white" />
            <span className="font-semibold">{financeUser.name}</span>
          </div>
           {/* Dropdown Menu */}
           {profileMenuOpen && (
            <div className="absolute z-10 right-0 mt-2 w-40 bg-white text-black shadow-md rounded-md py-2">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Profile</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Input type="text" placeholder="Search transactions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="p-3 border border-gray-300 rounded-md" />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="p-3 border border-gray-300 rounded-md">
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Received">Received</option>
          <option value="Rejected">Rejected</option>
        </select>
        <div className="flex gap-2">
          <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="p-3 border border-gray-300 rounded-md w-full" />
          <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="p-3 border border-gray-300 rounded-md w-full" />
        </div>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="min-w-full border border-gray-200">
              <TableHeader>
                <TableRow className="bg-gray-200 text-gray-700">
                  <TableHead className="border px-4 py-2">User ID</TableHead>
                  <TableHead className="border px-4 py-2">Name</TableHead>
                  <TableHead className="border px-4 py-2">Amount</TableHead>
                  <TableHead className="border px-4 py-2">Payment Gateway</TableHead>
                  <TableHead className="border px-4 py-2">Date & Time</TableHead>
                  <TableHead className="border px-4 py-2">Status</TableHead>
                  <TableHead className="border px-4 py-2">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((txn) => (
                  <TableRow key={txn.id} className="hover:bg-gray-50">
                    <TableCell className="border px-4 py-2">{txn.userId}</TableCell>
                    <TableCell className="border px-4 py-2">{txn.firstName} {txn.lastName}</TableCell>
                    <TableCell className="border px-4 py-2">{txn.amount}</TableCell>
                    <TableCell className="border px-4 py-2">{txn.paymentGateway}</TableCell>
                    <TableCell className="border px-4 py-2">{txn.dateTime}</TableCell>
                    <TableCell className={`border px-4 py-2 font-semibold ${txn.status === "Received" ? "text-green-600" : txn.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>
                      {txn.status} {txn.status === "Rejected" && <span className="text-sm text-gray-500">({txn.rejectionNote})</span>}
                    </TableCell>
                    <TableCell className="border px-4 py-2 flex gap-2">
                      {txn.status === "Pending" && (
                        <>
                          <Button onClick={() => markAsReceived(txn.id)} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                            Mark as Received
                          </Button>
                          <Button onClick={() => { setSelectedTransaction(txn); setShowRejectionModal(true); }} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                            Reject
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Rejection Reason Modal */}
      {showRejectionModal && selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={() => setShowRejectionModal(false)}>
              ✖
            </button>
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">Reject Payment</h2>
            <Textarea className="w-full p-2 border border-gray-300 rounded-md mt-4" placeholder="Enter rejection reason..." value={rejectionReason} onChange={(e) => setRejectionReason(e.target.value)} />
            <div className="mt-4 flex justify-end gap-2">
              <Button onClick={() => setShowRejectionModal(false)} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded">
                Cancel
              </Button>
              <Button onClick={rejectPayment} className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded">
                Reject Payment
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
