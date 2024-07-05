import React from 'react';
import 'tailwindcss/tailwind.css';
import bar from "../../assets/icons/barChart.svg"

const Profile = () => {
  return (
    <div className="p-6 space-y-6 -bg--clr-primary">
      {/* Header */}
      <div className="text-2xl font-bold">Hi, Audrey Jerome Welcome back!</div>
      <div className="text-gray-600">Banking Like Never Before.</div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="bg-white p-6 rounded shadow-md space-y-6">
          {/* Available Balance */}
          <div className="flex justify-between items-center">
            <div>
              <div className="text-gray-600">Available Balance</div>
              <div className="text-3xl font-bold">$900,000.00</div>
            </div>
            <div className="text-blue-500">VISA</div>
          </div>
          
          {/* Bar Chart */}
          <div className="mt-4">
            <img src={bar} alt="Bar Chart" className="w-full h-auto"/>
          </div>

          {/* Account Details */}
          <div className="space-y-2">
            <div className="text-gray-600">Your Account Number</div>
            <div className="text-2xl font-bold">3112384778</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-gray-600">Account Holder</div>
              <div className="font-bold">Audrey Micha Jerome</div>
            </div>
            <div>
              <div className="text-gray-600">Account Type</div>
              <div className="font-bold">Savings</div>
            </div>
            <div>
              <div className="text-gray-600">Account Status</div>
              <div className="font-bold">Active</div>
            </div>
          </div>
        </div>

        {/* Middle Side */}
        <div className="space-y-6">
          {/* Total Book Balance */}
          <div className="bg-white p-6 rounded shadow-md space-y-2">
            <div className="text-gray-600">Total Book Balance</div>
            <div className="text-3xl font-bold">$1,200,000.00</div>
            <div className="text-gray-600">as at July 4, 2024</div>
            
            {/* Bar Chart */}
            <div className="mt-4">
              <img src={bar} alt="Bar Chart" className="w-full h-auto"/>
            </div>
          </div>

          {/* Registered Email */}
          <div className="bg-white p-6 rounded shadow-md">
            <div className="text-gray-600">Registered Email</div>
            <div className="text-xl font-bold">archillesmr@gmail.com</div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white p-6 rounded shadow-md">
          <div className="text-gray-600">ATM Card Details</div>
          <div className="mt-4 space-y-2">
            <div className="p-2 border rounded">Card Number: 4257 9801 21190 XXXX</div>
            <div className="flex space-x-2">
              <div className="flex-1">
                <div className="text-gray-600">Ex.Date</div>
                <div className="p-2 border rounded">06/21</div>
              </div>
              <div className="flex-1">
                <div className="text-gray-600">Csv</div>
                <div className="p-2 border rounded">268</div>
              </div>
              <div className="flex-1">
                <div className="text-gray-600">Pin</div>
                <div className="p-2 border rounded">5460</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Statement Review */}
      <div className="bg-white p-6 rounded shadow-md">
        <div className="text-gray-800 font-bold">YOUR FINANCIAL STATEMENT REVIEW</div>
        <div className="mt-4 text-gray-600">(WIRE AND DOMESTIC TRANSFERS)</div>
        <div className="mt-2 grid grid-cols-7 gap-2 text-gray-600">
          <div>BENEFICIARY BANK</div>
          <div>BENEFICIARY ACCOUNT</div>
          <div>AMOUNT</div>
          <div>STATUS</div>
          <div>DESCRIPTION</div>
          <div>DATE/TIME</div>
        </div>
      </div>

      {/* Financial Statement */}
      <div className="bg-white p-6 rounded shadow-md">
        <div className="text-gray-800 font-bold">YOUR FINANCIAL STATEMENT</div>
        <div className="mt-4 text-gray-600">(CREDIT AND DEBIT STATEMENTS)</div>
        <div className="mt-2 grid grid-cols-7 gap-2 text-gray-600">
          <div>REF.NO</div>
          <div>TYPE</div>
          <div>AMOUNT</div>
          <div>TO/FROM</div>
          <div>DESCRIPTION</div>
          <div>DATE/TIME</div>
          <div>STATUS</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
