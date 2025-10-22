import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="w-11/12 mx-auto py-4 ">
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
