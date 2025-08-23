import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = false; // change this to true to simulate login

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
