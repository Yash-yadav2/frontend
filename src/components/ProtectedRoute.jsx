import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) return <p>Loading...</p>;

  return user && user.user.role === "user" ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
  