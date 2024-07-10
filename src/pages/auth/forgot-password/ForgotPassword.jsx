// ForgotPassword.jsx
import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic
    setMessage('A reset link has been sent to your email address.');
  };

  return (
    <div className="flex justify-center items-center min-h-screen -bg--clr-secondary px-4">
      <div className="w-full max-w-md md:max-w-lg lg:w-[40%] lg:-bg--clr-primary p-8 rounded-lg lg:shadow-lg sm:w-[60%] sm:shadow-none">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-3 -text--clr-pumpkin">Trust Finance</h1>
        <h2 className="text-xl lg:text-2xl font-bold mb-6 -text--clr-silver-v1">Forgot Password</h2>
        {message && <p className="text-green-500 font-bold text-center mb-4">{message}</p>}
        <form onSubmit={handleForgotPassword} className="space-y-6">
          <div className="flex items-center border-b -border--clr-silver-v1 py-2">
            <FaEnvelope className="-text--clr-silver-v1 mr-3" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none bg-transparent border-none w-full -text--clr-silver-v1 leading-tight focus:outline-none"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="-bg--clr-pumpkin hover:-bg--clr-pumpkin-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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

export default ForgotPassword;
