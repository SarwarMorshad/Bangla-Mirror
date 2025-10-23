import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();

    // const name = event.target.name.value;
    // const photoUrl = event.target.photoUrl.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        setUser(createdUser);
        alert("Registration Successful");
        // You can add additional logic here, such as updating the user profile with name and photoUrl
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Register your account</h2>

          {/* Divider */}
          <div className="divider"></div>

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700 mb-4">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full bg-base-200 mb-4"
                required
              />
            </div>
            {/* Photo Url Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-gray-700 mb-4">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full bg-base-200 mb-4"
                required
              />
            </div>
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

            {/* Terms and Conditions */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input type="checkbox" className="checkbox" required />
                <span className="label-text">
                  Accept{" "}
                  <a href="/terms" className="font-semibold text-gray-700 hover:underline">
                    Term & Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* Login Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral w-full">
                Register
              </button>
            </div>

            {/* Register Link */}
            <p className="text-center text-gray-600 pt-4 font-semibold">
              Already Have An Account?{" "}
              <Link to="/auth/login" className="text-error font-semibold hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
