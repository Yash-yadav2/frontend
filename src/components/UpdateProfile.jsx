import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/authSlice";

export default function EditProfile() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthdate: "",
    gender: "Not Selected",
    location: "",
    address: "",
  });

  useEffect(() => {
    if (user.user) {
      setFormData({
        firstName: user.user.firstName || "",
        lastName: user.user.lastName || "",
        email: user.user.email || "",
        phone: user.user.phone || "",
        birthdate: user.user.birthdate || "",
        gender: user.user.gender || "Not Selected",
        location: user.user.location || "",
        address: user.user.address || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };

  return (
    <div className="bg-[#1b1817] p-8 rounded-lg shadow-md w-full max-w-6xl">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Edit Profile</h2>
      {loading && <p className="text-yellow-400">Updating profile...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 bg-white border border-gray-600 rounded text-black" />
          </div>
          <div>
            <label className="block text-gray-300">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 bg-white border border-gray-600 rounded text-black" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300">Email</label>
            <input type="email" name="email" value={formData.email} readOnly className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-400" />
          </div>
          <div>
            <label className="block text-gray-300">Mobile Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 bg-white border border-gray-600 rounded text-black" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-300">Birthdate</label>
            <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} className="w-full p-2 bg-white border border-gray-600 rounded text-black" />
          </div>
          <div>
            <label className="block text-gray-300">Sex</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 bg-white border border-gray-600 rounded text-black">
              <option>Not Selected</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-gray-300">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 bg-white border border-gray-600 rounded text-black" />
        </div>
        <div className="mt-4">
          <label className="block text-gray-300">Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 bg-white border border-gray-600 rounded text-black" />
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button type="button" className="bg-gray-500 px-4 py-2 rounded text-white">
            Cancel
          </button>
          <button onClick={handleSubmit} type="submit" className="bg-yellow-500 px-4 py-2 rounded text-black">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
