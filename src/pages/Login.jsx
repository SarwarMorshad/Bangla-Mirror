import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    login(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        alert("Login Successful");
        event.target.reset();
        navigate(location?.state || "/");
        // You can add additional logic here, such as redirecting the user
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Login your account</h2>

          {/* Divider */}
          <div className="divider"></div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700 mb-4">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full bg-base-200 mb-4"
                required
              />
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700 mb-4">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full bg-base-200 mb-4"
                required
              />
            </div>
            <div>
              <a href="" className="link link-hover">
                Forgot Password?
              </a>
            </div>
            {/* Login Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
            </div>
          </form>
          {/* Register Link */}
          <p className="text-center text-gray-600 pt-4 font-semibold">
            Don't Have An Account?{" "}
            <Link to="/auth/register" className="text-error font-semibold hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
