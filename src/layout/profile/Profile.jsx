import React from "react";
import "tailwindcss/tailwind.css";
import bar from "../../assets/icons/barChart.svg";
import ContentTop from "../../components/ContentTop/ContentTop";

const Profile = () => {
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
                <div className="text-blue-500">VISA</div>
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

          {/* Financial Statement Review */}
          <div className="bg-white p-6 rounded shadow-md">
            <div className="text-gray-800 font-bold">
              YOUR FINANCIAL STATEMENT REVIEW
            </div>
            <div className="mt-4 text-gray-600">
              (WIRE AND DOMESTIC TRANSFERS)
            </div>

            <div class="p-5 h-max bg-gray-100">
              <h1 class="text-xl mb-2">Your orders</h1>

              <div class="overflow-auto rounded-lg shadow hidden md:block">
                <table class="w-full">
                  <thead class="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                        No.
                      </th>
                      <th class="p-3 text-sm font-semibold tracking-wide text-left">
                        BENEFICIARY BANK
                      </th>
                      <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                        BENEFICIARY ACCOUNT
                      </th>
                      <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                        AMOUNT
                      </th>
                      <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left uppercase">
                        Status
                      </th>
                      <th class="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                        DESCRIPTION
                      </th>
                      <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left uppercase">
                        Date/time
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr class="bg-white">
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <a
                          href="#"
                          class="font-bold text-blue-500 hover:underline"
                        >
                          10001
                        </a>
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        Marvins Bank
                      </td>
                      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        31122334
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        $200.00
                      </td>

                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                          Delivered
                        </span>
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        This is for School Fees
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        16/10/2021 05:22
                      </td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <a
                          href="#"
                          class="font-bold text-blue-500 hover:underline"
                        >
                          10002
                        </a>
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        Marvins Bank
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        31122343
                      </td>

                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        $200.001
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                          PENDING
                        </span>
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        This is for School Fees
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        16/10/2021 05:22
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <a
                          href="#"
                          class="font-bold text-blue-500 hover:underline"
                        >
                          10002
                        </a>
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        Marvins Bank
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        311433356
                      </td>

                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        $200.00
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                          Cancelled
                        </span>
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        This is for School Fees
                      </td>
                      <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                        16/10/2021 05:22
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                  <div class="flex items-center space-x-2 text-sm">
                    <div>
                      <a
                        href="#"
                        class="text-blue-500 font-bold hover:underline"
                      >
                        #1000
                      </a>
                    </div>
                    <div class="text-gray-500">10/10/2021</div>
                    <div>
                      <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                        Delivered
                      </span>
                    </div>
                  </div>
                  <div class="text-sm text-gray-700">Marvins Bank</div>
                  <div class="text-sm font-medium text-black">$200.00</div>
                </div>
                <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                  <div class="flex items-center space-x-2 text-sm">
                    <div>
                      <a
                        href="#"
                        class="text-blue-500 font-bold hover:underline"
                      >
                        #1001
                      </a>
                    </div>
                    <div class="text-gray-500">10/10/2021</div>
                    <div>
                      <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                        Shipped
                      </span>
                    </div>
                  </div>
                  <div class="text-sm text-gray-700">Marvins Bank</div>
                  <div class="text-sm font-medium text-black">$200.00</div>
                </div>
                <div class="bg-white space-y-3 p-4 rounded-lg shadow">
                  <div class="flex items-center space-x-2 text-sm">
                    <div>
                      <a
                        href="#"
                        class="text-blue-500 font-bold hover:underline"
                      >
                        #1002
                      </a>
                    </div>
                    <div class="text-gray-500">10/10/2021</div>
                    <div>
                      <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                        Canceled
                      </span>
                    </div>
                  </div>
                  <div class="text-sm text-gray-700">Marvins Bank</div>
                  <div class="text-sm font-medium text-black">$200.00</div>
                  <div class="text-sm font-medium text-black max-w-[50px]">
                    This is for School Fees
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Statement */}
          <div className="-bg--clr-primary p-6 rounded shadow-md">
            <div className="text-blue-800 font-bold">
              YOUR FINANCIAL STATEMENT
            </div>
            <div className="mt-4 -text--clr-silver-v1">
              (CREDIT AND DEBIT STATEMENTS)
            </div>
            <div className="mt-2 grid grid-cols-7 gap-2 -text--clr-silver-v1">
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
      </div>
    </>
  );
};

export default Profile;
