import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/auth/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoutes;
