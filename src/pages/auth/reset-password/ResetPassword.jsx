// ResetPassword.jsx
import React, { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle reset password logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white p-8 rounded-lg shadow-lg sm:w-[50%] sm:shadow-none">
        <h1 className="text-3xl font-bold text-center mb-6">Trust Finance</h1>
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-6">
          <div className="flex items-center border-b-2 border-gray-300 py-2 relative">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
              required
            />
            <div
              className="absolute right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </div>
          </div>
          <div className="flex items-center border-b-2 border-gray-300 py-2 relative">
            <FaLock className="text-gray-500 mr-3" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
              required
            />
            <div
              className="absolute right-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset Password
            </button>
            <Link to="/" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
