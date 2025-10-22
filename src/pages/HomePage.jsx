import React from "react";
import CategoryNews from "./CategoryNews";
import { Navigate } from "react-router";

const HomePage = () => {
  return <Navigate to="/category/0"></Navigate>;
};

export default HomePage;
