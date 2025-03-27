import { useState } from "react";
import { Input } from "/src/components/ui/input";
import { Button } from "/src/components/ui/button";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "", role: "admin" });
  const [error, setError] = useState("");

  const toggleAuthMode = () => setIsLogin(!isLogin);

  // Basic input validation
  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Invalid email format");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    alert(`${isLogin ? "Logged In" : "Signed Up"} successfully!`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">{isLogin ? "Admin Login" : "Admin Signup"}</h2>

        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <label className="block text-gray-700 font-semibold">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-5">
            <label className="block text-gray-700 font-semibold">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {!isLogin && (
            <div className="mt-5">
              <label className="block text-gray-700 font-semibold">Role</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:ring-2 focus:ring-blue-500"
              >
                <option value="admin">Main Admin</option>
                <option value="finance">Finance Admin</option>
              </select>
            </div>
          )}

          <Button type="submit" className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
            {isLogin ? "Login" : "Signup"}
          </Button>
        </form>

        <p className="text-center mt-6 text-gray-500 cursor-pointer hover:underline" onClick={toggleAuthMode}>
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
