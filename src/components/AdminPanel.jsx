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
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "9876543211",
        depositMoney: "$500",
        age: 25,
        birthDate: "1999-07-08",
        joiningDate: "2024-01-15",
        ipAddress: "192.168.1.2",
      },
      {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        phone: "9876543212",
        depositMoney: "$1200",
        age: 30,
        birthDate: "1994-03-21",
        joiningDate: "2022-06-18",
        ipAddress: "192.168.1.3",
      },
      {
        id: 4,
        name: "Bob Williams",
        email: "bob@example.com",
        phone: "9876543213",
        depositMoney: "$800",
        age: 27,
        birthDate: "1997-09-15",
        joiningDate: "2023-08-22",
        ipAddress: "192.168.1.4",
      },
      {
        id: 5,
        name: "Charlie Brown",
        email: "charlie@example.com",
        phone: "9876543214",
        depositMoney: "$1500",
        age: 35,
        birthDate: "1989-11-30",
        joiningDate: "2021-05-10",
        ipAddress: "192.168.1.5",
      },
      {
        id: 6,
        name: "David Clark",
        email: "david@example.com",
        phone: "9876543215",
        depositMoney: "$700",
        age: 22,
        birthDate: "2002-07-14",
        joiningDate: "2024-02-05",
        ipAddress: "192.168.1.6",
      },
      {
        id: 7,
        name: "Emma Lewis",
        email: "emma@example.com",
        phone: "9876543216",
        depositMoney: "$1800",
        age: 29,
        birthDate: "1995-04-27",
        joiningDate: "2022-12-01",
        ipAddress: "192.168.1.7",
      },
      {
        id: 8,
        name: "Franklin Martin",
        email: "franklin@example.com",
        phone: "9876543217",
        depositMoney: "$600",
        age: 31,
        birthDate: "1993-06-19",
        joiningDate: "2021-09-17",
        ipAddress: "192.168.1.8",
      },
      {
        id: 9,
        name: "Grace White",
        email: "grace@example.com",
        phone: "9876543218",
        depositMoney: "$1400",
        age: 26,
        birthDate: "1998-12-11",
        joiningDate: "2023-03-29",
        ipAddress: "192.168.1.9",
      },
      {
        id: 10,
        name: "Henry Thompson",
        email: "henry@example.com",
        phone: "9876543219",
        depositMoney: "$900",
        age: 24,
        birthDate: "2000-08-05",
        joiningDate: "2024-01-20",
        ipAddress: "192.168.1.10",
      },
      {
        id: 11,
        name: "Isabella Scott",
        email: "isabella@example.com",
        phone: "9876543220",
        depositMoney: "$2000",
        age: 33,
        birthDate: "1991-05-23",
        joiningDate: "2020-11-10",
        ipAddress: "192.168.1.11",
      },
      {
        id: 12,
        name: "Jack Harris",
        email: "jack@example.com",
        phone: "9876543221",
        depositMoney: "$1100",
        age: 21,
        birthDate: "2003-02-18",
        joiningDate: "2024-03-15",
        ipAddress: "192.168.1.12",
      },
      {
        id: 13,
        name: "Kelly Moore",
        email: "kelly@example.com",
        phone: "9876543222",
        depositMoney: "$500",
        age: 27,
        birthDate: "1997-10-30",
        joiningDate: "2022-07-22",
        ipAddress: "192.168.1.13",
      },
      {
        id: 14,
        name: "Liam Anderson",
        email: "liam@example.com",
        phone: "9876543223",
        depositMoney: "$1600",
        age: 29,
        birthDate: "1995-08-02",
        joiningDate: "2023-05-09",
        ipAddress: "192.168.1.14",
      },
      {
        id: 15,
        name: "Mia Thomas",
        email: "mia@example.com",
        phone: "9876543224",
        depositMoney: "$750",
        age: 23,
        birthDate: "2001-11-12",
        joiningDate: "2024-04-01",
        ipAddress: "192.168.1.15",
      },
      {
        id: 16,
        name: "Nathan Martinez",
        email: "nathan@example.com",
        phone: "9876543225",
        depositMoney: "$1350",
        age: 32,
        birthDate: "1992-06-25",
        joiningDate: "2020-08-15",
        ipAddress: "192.168.1.16",
      },
      {
        id: 17,
        name: "Olivia King",
        email: "olivia@example.com",
        phone: "9876543226",
        depositMoney: "$950",
        age: 28,
        birthDate: "1996-01-14",
        joiningDate: "2021-10-05",
        ipAddress: "192.168.1.17",
      },
      {
        id: 18,
        name: "Paul Walker",
        email: "paul@example.com",
        phone: "9876543227",
        depositMoney: "$1150",
        age: 26,
        birthDate: "1998-03-09",
        joiningDate: "2022-09-30",
        ipAddress: "192.168.1.18",
      },
      {
        id: 19,
        name: "Quinn Robinson",
        email: "quinn@example.com",
        phone: "9876543228",
        depositMoney: "$890",
        age: 30,
        birthDate: "1994-12-02",
        joiningDate: "2023-06-18",
        ipAddress: "192.168.1.19",
      },
      {
        id: 20,
        name: "Rachel Carter",
        email: "rachel@example.com",
        phone: "9876543229",
        depositMoney: "$1300",
        age: 25,
        birthDate: "1999-07-28",
        joiningDate: "2022-01-10",
        ipAddress: "192.168.1.20",
      },
      {
        id: 21,
        name: "Samuel Adams",
        email: "samuel@example.com",
        phone: "9876543230",
        depositMoney: "$1750",
        age: 31,
        birthDate: "1993-09-21",
        joiningDate: "2020-12-15",
        ipAddress: "192.168.1.21",
      },
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

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // Close Modal on ESC Key Press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedUser(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filter Users Based on Search Query
  const filteredUsers = users.filter(
    (user) =>
      user.id.toString().includes(searchQuery) ||
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.includes(searchQuery) ||
      user.ipAddress.includes(searchQuery)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Navbar with Admin Profile */}
      <div className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
        <div className="relative">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
            <img src={admin.profilePic} alt="Admin" className="w-10 h-10 rounded-full border border-white" />
            <span className="font-semibold">{admin.name}</span>
          </div>

          {/* Dropdown Menu */}
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-md rounded-md py-2">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Profile</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Search Filter */}
      <div className="mt-4 mb-4">
        <Input
          type="text"
          placeholder="Search by ID, Name, Email, Phone, or IP..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500"
        />
      </div>

      {/* User Table */}
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
              <Button onClick={() => setSelectedUser(null)} className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg">Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
