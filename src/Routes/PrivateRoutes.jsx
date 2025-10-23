import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loader></Loader>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/auth/login" state={location?.pathname}></Navigate>;
};

export default PrivateRoutes;
