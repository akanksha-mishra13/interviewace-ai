import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./protectedroute.css";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>

        <h2>Loading Dashboard...</h2>

        <p>Please wait while we verify your account.</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;