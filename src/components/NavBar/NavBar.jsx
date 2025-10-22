import React from "react";
import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className=""></div>
      <div className="nav flex gap-6 text-lg text-accent font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={user} alt="User Icon" className="w-8 mr-2" />
        <Link to="/auth/login" className="btn btn-primary px-6">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
