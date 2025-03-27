import { useState, useEffect } from "react";

export default function EditProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    userId: "",
    mobile: "",
    birthdate: "",
    sex: "Not Selected",
    pep: "Not Selected",
    location: "",
    address: "",
  });

  useEffect(() => {
    // Simulate fetching user data from API
    const fetchUserData = async () => {
      const userData = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve({
              firstName: "Arin",
              lastName: "Bagul",
              email: "yashyada20023@gmail.com",
              userId: "298436142",
              mobile: "9098273132",
              birthdate: "2007-01-02",
              sex: "Not Selected",
              pep: "Not Selected",
              location: "India",
              address: "Nasrullaganj",
            }),
          1000
        )
      );
      setFormData(userData);
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-4xl">
      <h2 className="text-2xl font-bold text-yellow-400 mb-4">Edit Profile</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300">First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white" />
        </div>
        <div>
          <label className="block text-gray-300">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300">Email</label>
          <input type="email" name="email" value={formData.email} readOnly className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white" />
        </div>
        <div>
          <label className="block text-gray-300">User ID</label>
          <input type="text" name="userId" value={formData.userId} readOnly className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-gray-400" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300">Mobile Number</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white" />
        </div>
        <div>
          <label className="block text-gray-300">Birthdate</label>
          <input type="date" name="birthdate" value={formData.birthdate} onChange={handleChange} className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white" />
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300">Sex</label>
          <select name="sex" value={formData.sex} onChange={handleChange} className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white">
            <option>Not Selected</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-300">PEP (Politically Exposed Person)</label>
          <select name="pep" value={formData.pep} onChange={handleChange} className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white">
            <option>Not Selected</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-gray-300">Location</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white" />
      </div>
      <div className="mt-4">
        <label className="block text-gray-300">Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white" />
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <button className="bg-gray-500 px-4 py-2 rounded text-white">Cancel</button>
        <button className="bg-yellow-500 px-4 py-2 rounded text-black">Save Changes</button>
      </div>
    </div>
  );
}
