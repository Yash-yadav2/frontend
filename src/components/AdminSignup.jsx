import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "/src/components/ui/input";
import { Button } from "/src/components/ui/button";
import { loginUser, registerUser } from "../redux/authSlice";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    role: "user", // ✅ Default role selection
  });

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error: authError } = useSelector((state) => state.auth);

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      dispatch(loginUser(formData))
        .unwrap()
        .then((res) => {
          if (res.user.role === "admin") navigate("/admin");
          else if (res.user.role === "finance") navigate("/finance");
          else navigate("/");
        })
        .catch((err) => setError(err.message || "Login failed"));
    } else {
      dispatch(registerUser(formData))
        .unwrap()
        .then(() => navigate("/")) // Default redirect after signup
        .catch((err) => setError(err.message || "Signup failed"));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center">
          {isLogin ? "Login" : "Signup"}
        </h2>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        {authError && <p className="text-red-500 text-center mt-2">{authError}</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mt-5 flex space-x-2">
                <Input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                />
              </div>
            </>
          )}

          <div className="mt-5">
            <label className="block font-semibold">Role</label>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="finance">Finance Admin</option>
            </select>
          </div>

          <div className="mt-5">
            <label className="block font-semibold">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="mt-5">
            <label className="block font-semibold">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg"
            disabled={loading}
          >
            {loading ? "Processing..." : isLogin ? "Login" : "Signup"}
          </Button>
        </form>

        <p className="text-center mt-6 text-gray-500 cursor-pointer hover:underline" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Don't have an account? Signup" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}
