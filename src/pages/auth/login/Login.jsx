// Login.jsx
import React, { useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    nav("/dashboard");
    // Handle login logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen -bg--clr-secondary px-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl -bg--clr-primary p-8 rounded-lg shadow-lg sm:w-[50%] sm:shadow-none -text--clr-silver-v1">
        <h1 className="text-3xl font-bold text-center mb-6 ">Trust Finance</h1>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="flex items-center border-b -border--clr-silver-v1 py-2 -text--clr-silver-v1">
            <FaEnvelope className="-text--clr-silver-v1 mr-3" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none bg-transparent border-none w-full -text--clr-silver-v1 leading-tight focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center border-b -border--clr-silver-v1 py-2 relative">
            <FaLock className="-text--clr-silver-v1 mr-3" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none bg-transparent border-none w-full -text--clr-silver-v1 leading-tight focus:outline-none"
              required
            />
            <div
              className="absolute right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="-bg--clr-pumpkin hover:-bg--clr-pumpkin-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              // onClick={handleLogin}
            >
              Login
            </button>
            <Link
              to="/forgot-password"
              className="inline-block align-baseline font-bold text-sm -text--clr-pumpkin hover:-text--clr-pumpkin-light"
            >
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="text-center mt-6">
          Don't have an account?{" "}
          <Link
            to="/create-account"
            className="-text--clr-pumpkin hover:-text--clr-pumpkin-light"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
