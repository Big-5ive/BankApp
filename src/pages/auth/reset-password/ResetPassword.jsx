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
    <div className="flex justify-center items-center min-h-screen -bg--clr-secondary px-4">
      <div className="w-full max-w-md md:w-[40%] lg:max-w-xl lg:-bg--clr-primary p-8 rounded-lg shadow-lg sm:w-[60%] sm:shadow-none">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-4 -text--clr-pumpkin">Trust Finance</h1>
        <h2 className="text-xl lg:text-2xl font-bold mb-6 -text--clr-silver-v1">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-6 -text--clr-silver-v1">
          <div className="flex items-center border-b -border--clr-silver-v1 py-2 relative">
            <FaLock className="-text--clr-silver mr-3" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none bg-transparent border-none w-full leading-tight focus:outline-none"
              required
            />
            <div
              className="absolute right-3 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="-text--clr-silver" /> : <FaEye className="-text--clr-silver" />}
            </div>
          </div>
          <div className="flex items-center border-b -border--clr-silver-v1 py-2 relative">
            <FaLock className="-text--clr-silver mr-3" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="appearance-none bg-transparent border-none w-full -text--clr-silver-v1 leading-tight focus:outline-none"
              required
            />
            <div
              className="absolute right-3 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash className="-text--clr-silver" /> : <FaEye className="-text--clr-silver" />}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="-bg--clr-pumpkin hover:-bg--clr-pumpkin-light -text--clr-silver-v1 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Reset Password
            </button>
            <Link to="/" className="inline-block align-baseline font-bold text-sm -text--clr-pumpkin hover:-text--clr-pumpkin-light">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
