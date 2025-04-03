import { useState, useEffect } from "react";
import { Card, CardContent } from "/src/components/ui/card";
import { Button } from "/src/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "/src/components/ui/table";
import { Input } from "/src/components/ui/input";

export default function AdminPanel() {
  const [admin] = useState({
    name: "Admin",
    profilePic: "https://via.placeholder.com/40",
  });

  const [activeTab, setActiveTab] = useState("users");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "9876543210",
      depositMoney: "$1000",
      age: 28,
      birthDate: "1996-05-12",
      joiningDate: "2023-02-10",
      ipAddress: "192.168.1.1",
    },
    // ... other users
    {
      id: 22,
      name: "Sophia Nelson",
      email: "sophia@example.com",
      phone: "9876543231",
      depositMoney: "$690",
      age: 24,
      birthDate: "2000-05-05",
      joiningDate: "2023-08-07",
      ipAddress: "192.168.1.22",
    },
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      user: "John Doe",
      amount: "$100",
      date: "2023-01-01",
      accountNumber: "123456789",
      transactionId: "TX1001",
      ipAddress: "192.168.1.101",
      paymentMethod: "Credit Card",
      paymentType: "Online",
      paymentStatus: "Pending",
      rejectionNote: "",
    },
    {
      id: 2,
      user: "Jane Smith",
      amount: "$200",
      date: "2023-01-02",
      accountNumber: "987654321",
      transactionId: "TX1002",
      ipAddress: "192.168.1.102",
      paymentMethod: "Debit Card",
      paymentType: "Offline",
      paymentStatus: "Received",
      rejectionNote: "",
    },
    {
      id: 3,
      user: "Alice Johnson",
      amount: "$150",
      date: "2023-01-03",
      accountNumber: "456789123",
      transactionId: "TX1003",
      ipAddress: "192.168.1.103",
      paymentMethod: "PayPal",
      paymentType: "Online",
      paymentStatus: "Pending",
      rejectionNote: "",
    },
  ]);

  const [winners, setWinners] = useState([
    { id: 1, user: "Alice Johnson", prize: "$500", date: "2023-01-03", imageUrl: "https://via.placeholder.com/40" },
    { id: 2, user: "Bob Williams", prize: "$300", date: "2023-01-04", imageUrl: "https://via.placeholder.com/40" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // Winner Modal state: when adding a new winner
  const [isWinnerModalOpen, setIsWinnerModalOpen] = useState(false);
  const [newWinner, setNewWinner] = useState({
    user: "",
    prize: "",
    date: "",
    imageUrl: "",
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedUser(null);
        setSelectedTransaction(null);
        setIsWinnerModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.id.toString().includes(searchQuery) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery) ||
      user.ipAddress.includes(searchQuery)
  );

  const handleTransactionUpdate = () => {
    setTransactions((prevTransactions) =>
      prevTransactions.map((tx) =>
        tx.id === selectedTransaction.id ? selectedTransaction : tx
      )
    );
    setSelectedTransaction(null);
  };

  const handleAddWinner = () => {
    const newId = winners.length > 0 ? winners[winners.length - 1].id + 1 : 1;
    setWinners([...winners, { id: newId, ...newWinner }]);
    // Reset modal values and close it
    setNewWinner({ user: "", prize: "", date: "", imageUrl: "" });
    setIsWinnerModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-900 text-white px-6 py-4 shadow-md sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="relative">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
              <img src={admin.profilePic} alt="Admin" className="w-10 h-10 rounded-full border border-white" />
              <span className="font-semibold">{admin.name}</span>
            </div>
            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded-md py-2">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Profile</button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
        {/* Tabs Navigation */}
        <div className="flex gap-4 mb-6">
          <Button onClick={() => setActiveTab("users")} className={activeTab === "users" ? "bg-blue-600 text-white" : "bg-gray-200"}>
            Users
          </Button>
          <Button onClick={() => setActiveTab("transactions")} className={activeTab === "transactions" ? "bg-blue-600 text-white" : "bg-gray-200"}>
            Transactions
          </Button>
          <Button onClick={() => setActiveTab("winners")} className={activeTab === "winners" ? "bg-blue-600 text-white" : "bg-gray-200"}>
            Winners
          </Button>
        </div>

        {activeTab === "users" && (
          <>
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Search by ID, Name, Email, Phone, or IP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
              />
            </div>
            <Card>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table className="min-w-full border border-gray-200">
                    <TableHeader>
                      <TableRow className="bg-gray-200 text-gray-700">
                        <TableHead className="border px-4 py-2">ID</TableHead>
                        <TableHead className="border px-4 py-2">Name</TableHead>
                        <TableHead className="border px-4 py-2">Email</TableHead>
                        <TableHead className="border px-4 py-2">Phone</TableHead>
                        <TableHead className="border px-4 py-2">IP Address</TableHead>
                        <TableHead className="border px-4 py-2">Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                          <TableRow key={user.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => setSelectedUser(user)}>
                            <TableCell className="border px-4 py-2">{user.id}</TableCell>
                            <TableCell className="border px-4 py-2">{user.name}</TableCell>
                            <TableCell className="border px-4 py-2">{user.email}</TableCell>
                            <TableCell className="border px-4 py-2">{user.phone}</TableCell>
                            <TableCell className="border px-4 py-2">{user.ipAddress}</TableCell>
                            <TableCell className="border px-4 py-2">
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setUsers((prev) => prev.filter((u) => u.id !== user.id));
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                              >
                                Delete
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan="6" className="text-center py-4 text-gray-500">
                            No users found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === "transactions" && (
          <Card className="mt-6">
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Transactions</h2>
              <div className="overflow-x-auto">
                <Table className="min-w-full border border-gray-200">
                  <TableHeader>
                    <TableRow className="bg-gray-200 text-gray-700">
                      <TableHead className="border px-4 py-2">Transaction ID</TableHead>
                      <TableHead className="border px-4 py-2">Account Number</TableHead>
                      <TableHead className="border px-4 py-2">User</TableHead>
                      <TableHead className="border px-4 py-2">Amount</TableHead>
                      <TableHead className="border px-4 py-2">Date</TableHead>
                      <TableHead className="border px-4 py-2">IP Address</TableHead>
                      <TableHead className="border px-4 py-2">Payment Method</TableHead>
                      <TableHead className="border px-4 py-2">Payment Type</TableHead>
                      <TableHead className="border px-4 py-2">Payment Status</TableHead>
                      <TableHead className="border px-4 py-2">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactions.length > 0 ? (
                      transactions.map((tx) => (
                        <TableRow key={tx.id} className="hover:bg-gray-50">
                          <TableCell className="border px-4 py-2">{tx.transactionId}</TableCell>
                          <TableCell className="border px-4 py-2">{tx.accountNumber}</TableCell>
                          <TableCell className="border px-4 py-2">{tx.user}</TableCell>
                          <TableCell className="border px-4 py-2">{tx.amount}</TableCell>
                          <TableCell className="border px-4 py-2">{tx.date}</TableCell>
                          <TableCell className="border px-4 py-2">{tx.ipAddress}</TableCell>
                          <TableCell className="border px-4 py-2">{tx.paymentMethod}</TableCell>
                          <TableCell className="border px-4 py-2">{tx.paymentType}</TableCell>
                          <TableCell className="border px-4 py-2">{tx.paymentStatus}</TableCell>
                          <TableCell className="border px-4 py-2">
                            <Button
                              onClick={() => setSelectedTransaction(tx)}
                              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                            >
                              Update
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan="10" className="text-center py-4 text-gray-500">
                          No transactions found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "winners" && (
          <Card className="mt-6">
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Winners</h2>
                <Button onClick={() => setIsWinnerModalOpen(true)} className="bg-blue-600 text-white px-3 py-1 rounded">
                  Add Winner
                </Button>
              </div>
              <div className="overflow-x-auto">
                <Table className="min-w-full border border-gray-200">
                  <TableHeader>
                    <TableRow className="bg-gray-200 text-gray-700">
                      <TableHead className="border px-4 py-2">ID</TableHead>
                      <TableHead className="border px-4 py-2">Image</TableHead>
                      <TableHead className="border px-4 py-2">User</TableHead>
                      <TableHead className="border px-4 py-2">Prize</TableHead>
                      <TableHead className="border px-4 py-2">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {winners.length > 0 ? (
                      winners.map((winner) => (
                        <TableRow key={winner.id} className="hover:bg-gray-50">
                          <TableCell className="border px-4 py-2">{winner.id}</TableCell>
                          <TableCell className="border px-4 py-2">
                            <img src={winner.imageUrl} alt={winner.user} className="w-10 h-10 rounded-full" />
                          </TableCell>
                          <TableCell className="border px-4 py-2">{winner.user}</TableCell>
                          <TableCell className="border px-4 py-2">{winner.prize}</TableCell>
                          <TableCell className="border px-4 py-2">{winner.date}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan="5" className="text-center py-4 text-gray-500">
                          No winners found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" onClick={() => setSelectedUser(null)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={() => setSelectedUser(null)}>
              ✖
            </button>
            <h2 className="text-2xl font-semibold text-center">{selectedUser.name}</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700 mt-4">
              <p><strong>ID:</strong> {selectedUser.id}</p>
              <p><strong>Email:</strong> {selectedUser.email}</p>
              <p><strong>Phone:</strong> {selectedUser.phone}</p>
              <p><strong>Deposit:</strong> {selectedUser.depositMoney}</p>
              <p><strong>Age:</strong> {selectedUser.age}</p>
              <p><strong>Birth Date:</strong> {selectedUser.birthDate}</p>
              <p><strong>Joining Date:</strong> {selectedUser.joiningDate}</p>
              <p><strong>IP Address:</strong> {selectedUser.ipAddress}</p>
            </div>
            <div className="mt-6 flex justify-center">
              <Button onClick={() => setSelectedUser(null)} className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg">
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Transaction Update Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" onClick={() => setSelectedTransaction(null)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={() => setSelectedTransaction(null)}>
              ✖
            </button>
            <h2 className="text-2xl font-semibold text-center mb-4">Update Transaction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Transaction ID</label>
                <Input
                  type="text"
                  value={selectedTransaction.transactionId}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, transactionId: e.target.value })
                  }
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Account Number</label>
                <Input
                  type="text"
                  value={selectedTransaction.accountNumber}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, accountNumber: e.target.value })
                  }
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">User</label>
                <Input
                  type="text"
                  value={selectedTransaction.user}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, user: e.target.value })
                  }
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Amount</label>
                <Input
                  type="text"
                  value={selectedTransaction.amount}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, amount: e.target.value })
                  }
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <Input
                  type="text"
                  value={selectedTransaction.date}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, date: e.target.value })
                  }
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">IP Address</label>
                <Input
                  type="text"
                  value={selectedTransaction.ipAddress}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, ipAddress: e.target.value })
                  }
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                <Input
                  type="text"
                  value={selectedTransaction.paymentMethod}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, paymentMethod: e.target.value })
                  }
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Type</label>
                <Input
                  type="text"
                  value={selectedTransaction.paymentType}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, paymentType: e.target.value })
                  }
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Payment Status</label>
                <select
                  value={selectedTransaction.paymentStatus}
                  onChange={(e) =>
                    setSelectedTransaction({ ...selectedTransaction, paymentStatus: e.target.value })
                  }
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="Pending">Pending</option>
                  <option value="Received">Received</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              {selectedTransaction.paymentStatus === "Rejected" && (
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Rejection Note</label>
                  <Input
                    type="text"
                    value={selectedTransaction.rejectionNote}
                    onChange={(e) =>
                      setSelectedTransaction({ ...selectedTransaction, rejectionNote: e.target.value })
                    }
                    placeholder="Enter rejection note..."
                    className="mt-1 block w-full"
                  />
                </div>
              )}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={handleTransactionUpdate} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Save
              </Button>
              <Button onClick={() => setSelectedTransaction(null)} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Winner Add Modal */}
      {isWinnerModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4" onClick={() => setIsWinnerModalOpen(false)}>
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-900" onClick={() => setIsWinnerModalOpen(false)}>
              ✖
            </button>
            <h2 className="text-2xl font-semibold text-center mb-4">Add Winner</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Winner Name</label>
                <Input
                  type="text"
                  value={newWinner.user}
                  onChange={(e) => setNewWinner({ ...newWinner, user: e.target.value })}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Prize</label>
                <Input
                  type="text"
                  value={newWinner.prize}
                  onChange={(e) => setNewWinner({ ...newWinner, prize: e.target.value })}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <Input
                  type="text"
                  value={newWinner.date}
                  onChange={(e) => setNewWinner({ ...newWinner, date: e.target.value })}
                  className="mt-1 block w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <Input
                  type="text"
                  value={newWinner.imageUrl}
                  onChange={(e) => setNewWinner({ ...newWinner, imageUrl: e.target.value })}
                  className="mt-1 block w-full"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Button onClick={handleAddWinner} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Add Winner
              </Button>
              <Button onClick={() => setIsWinnerModalOpen(false)} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
