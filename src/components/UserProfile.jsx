import React, { useState, useEffect } from "react";
import axios from "../axios";  // Import axios instance


const UserProfile = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const res = await axios.get("/user/profile");
                setUser(res.data);
            } catch (err) {
                setError("Failed to load profile. Please log in.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get("/auth/logout");
            alert("Logged out successfully!");
            window.location.href = "/"; // Redirect to login page
        } catch (err) {
            alert("Logout failed!");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Profile</h2>
    <p><strong>First Name:</strong> {user.firstName}</p>
    <p><strong>Last Name:</strong> {user.lastName}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <p><strong>Phone:</strong> {user.countryCode} {user.phoneNumber}</p>
    <p><strong>Currency:</strong> {user.currency}</p>
    <p><strong>Role:</strong> {user.role}</p>

    <button 
        onClick={handleLogout} 
        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
        Logout
    </button>
</div>
  )
}

export default UserProfile