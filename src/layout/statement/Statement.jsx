import React from "react";
import "tailwindcss/tailwind.css";
import bar from "../../assets/icons/barChart.svg";
import FinancialStatement from "../profile/FinancialStatement";
import CreditDebit from "../profile/CreditDebit";
import ContentTop from "../../components/ContentTop/ContentTop";

const Statement = () => {
  return (
    <>
      <div className="main-content">
        <ContentTop />
        <div className="p-6 space-y-6 -bg--clr-secondary">
          {/* Header */}
          <div className="text-2xl font-bold -text--clr-white">
            Hi, Audrey Jerome Welcome back!
          </div>
          <div className="-text--clr-silver-v1">Banking Like Never Before.</div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Side */}
            <div className="-bg--clr-primary p-6 rounded shadow-md space-y-6">
              {/* Available Balance */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="-text--clr-silver">Available Balance</div>
                  <div className="text-3xl font-bold -text--clr-silver-v1">
                    $900,000.00
                  </div>
                </div>
                <div className="-text--clr-white font-bold ml-1 bg-blue-800 py-1 px-2 rounded ">VISA</div>
              </div>

              {/* Bar Chart */}
              <div className="mt-4">
                <img src={bar} alt="Bar Chart" className="w-[100px] h-auto" />
              </div>

              {/* Account Details */}
              <div className="space-y-2 -text--clr-silver-v1">
                <div className="">Your Account Number</div>
                <div className="text-2xl font-bold">3112384778</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <div className="-text--clr-silver">Account Holder</div>
                  <div className="font-bold -text--clr-silver-v1">
                    Audrey Micha Jerome
                  </div>
                </div>
                <div>
                  <div className="-text--clr-silver">Account Type</div>
                  <div className="font-bold -text--clr-silver-v1">Savings</div>
                </div>
                <div>
                  <div className="-text--clr-silver">Account Status</div>
                  <div className="font-bold -text--clr-silver-v1">Active</div>
                </div>
              </div>
            </div>

            {/* Middle Side */}
            <div className="space-y-6">
              {/* Total Book Balance */}
              <div className="-bg--clr-primary p-6 rounded shadow-md space-y-2">
                <div className="-text--clr-silver">Total Book Balance</div>
                <div className="text-3xl font-bold -text--clr-silver-v1">
                  $1,200,000.00
                </div>
                <div className="-text--clr-silver-v1">as at July 4, 2024</div>

                {/* Bar Chart */}
                <div className="mt-4">
                  <img src={bar} alt="Bar Chart" className="w-[100px] h-auto" />
                </div>
              </div>

              {/* Registered Email */}
              <div className="-bg--clr-primary p-6 rounded shadow-md">
                <div className="-text--clr-silver">Registered Email</div>
                <div className="text-xl font-bold -text--clr-silver-v1">
                  archillesmr@gmail.com
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="-bg--clr-primary p-6 rounded shadow-md">
              <div className="-text--clr-silver-v1 font-bold">
                ATM Card Details
              </div>
              <div className="mt-4 space-y-2">
                <div className="p-2 border rounded -text--clr-silver">
                  Card Number: 4257 9801 21190 XXXX
                </div>
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <div className="-text--clr-silver-v1 font-bold">
                      Ex.Date
                    </div>
                    <div className="p-2 border rounded -text--clr-silver">
                      06/21
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="-text--clr-silver-v1 font-bold">Csv</div>
                    <div className="p-2 border rounded -text--clr-silver">
                      268
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="-text--clr-silver-v1 font-bold">Pin</div>
                    <div className="p-2 border rounded -text--clr-silver">
                      5460
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FinancialStatement />

          <CreditDebit />
        </div>
      </div>
    </>
  );
};

export default Statement;