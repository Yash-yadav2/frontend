import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulating API call with temporary data
    setUsers([
      { id: 1, name: "Yash Yadav", email: "yaduwanshiyash11@gmail.com", phone: "7470419477" },
      { id: 2, name: "John Doe", email: "johndoe@example.com", phone: "9876543210" },
      { id: 3, name: "Jane Smith", email: "janesmith@example.com", phone: "9123456789" },
    ]);
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h2>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden border border-gray-200">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-6 py-3">Avatar</th>
              <th className="px-6 py-3">Username</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="border-t hover:bg-gray-100 transition">
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 bg-blue-500 flex items-center justify-center rounded-full text-lg font-semibold text-white">
                      {user.name.charAt(0)}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 text-gray-700">{user.email}</td>
                  <td className="px-6 py-4 text-gray-700">{user.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
