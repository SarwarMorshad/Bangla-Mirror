import { Link, NavLink } from "react-router";
import userImg from "../../assets/user.png";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        alert("Logged out successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-6 text-lg text-accent font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={`${user?.photoURL || userImg}`} alt="User Icon" className="w-8 mr-2" />
        {user ? (
          <button onClick={handleLogout} className="btn btn-primary px-6">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
