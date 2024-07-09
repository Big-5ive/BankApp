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
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white p-8 rounded-lg shadow-lg sm:w-[50%] sm:shadow-none">
        <h1 className="text-3xl font-bold text-center mb-6">Trust Finance</h1>
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleForgotPassword} className="space-y-6">
          <div className="flex items-center border-b-2 border-gray-300 py-2">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
              required
            />
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

export default ForgotPassword;
