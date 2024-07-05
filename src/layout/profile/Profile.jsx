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
          <div className="-bg--clr-primary p-6 rounded shadow-md">
            <div className="text-blue-800 font-bold mb-3">
              YOUR FINANCIAL STATEMENT REVIEW
            </div>
            {/* <div className="mt-4 text-gray-600">
              (WIRE AND DOMESTIC TRANSFERS)
            </div> */}

            <div className="p-5 h-max">
              <h1 className="text-lg mb-2 -text--clr-silver-v1">
                (WIRE AND DOMESTIC TRANSFERS)
              </h1>

              <div className="overflow-auto rounded-lg shadow-custom hidden md:block">
                <table className="w-full">
                  <thead className="border-b-2 -border--clr-silver-v1 ">
                    <tr className="-text--clr-silver-v1">
                      <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                        No.
                      </th>
                      <th className="p-3 text-sm font-semibold tracking-wide text-left ">
                        BENEFICIARY BANK
                      </th>
                      <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                        BENEFICIARY ACCOUNT
                      </th>
                      <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                        AMOUNT
                      </th>
                      <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left uppercase">
                        Status
                      </th>
                      <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                        DESCRIPTION
                      </th>
                      <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left uppercase">
                        Date/time
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y -divide--clr-silver-v1">
                    <tr className="-text--clr-silver-v1">
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          10001
                        </a>
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        Marvins Bank
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        31122334
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        $300.00
                      </td>

                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                          Delivered
                        </span>
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        This is for School Fees
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        16/10/2021 05:22
                      </td>
                    </tr>
                    <tr className="">
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          10002
                        </a>
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        Marvins Bank
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        31122343
                      </td>

                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        $200.001
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                          PENDING
                        </span>
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        This is for School Fees
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        16/10/2021 05:22
                      </td>
                    </tr>
                    <tr className="">
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        <a
                          href="#"
                          className="font-bold text-blue-500 hover:underline"
                        >
                          10002
                        </a>
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        Marvins Bank
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        311433356
                      </td>

                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        $200.00
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                          Cancelled
                        </span>
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        This is for School Fees
                      </td>
                      <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                        16/10/2021 05:22
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                <div className="-bg--clr-secondary space-y-3 p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 text-sm">
                    <div>
                      <a
                        href="#"
                        className="text-blue-500 font-bold hover:underline"
                      >
                        #1000
                      </a>
                    </div>
                    <div className="text-gray-500">10/10/2021</div>
                    <div>
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                        Delivered
                      </span>
                    </div>
                  </div>
                  <div className="text-sm -text--clr-silver-v1">
                    Marvins Bank <br /> 31122334
                  </div>
                  <div className="text-sm font-medium -text--clr-silver-v1">
                    $300.00
                  </div>
                </div>
                <div className="-bg--clr-secondary space-y-3 p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 text-sm">
                    <div>
                      <a
                        href="#"
                        className="text-blue-500 font-bold hover:underline"
                      >
                        #1001
                      </a>
                    </div>
                    <div className="text-gray-500">10/10/2021</div>
                    <div>
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                        Pending
                      </span>
                    </div>
                  </div>
                  <div className="text-sm -text--clr-silver-v1">
                    Marvins Bank <br /> 31122343
                  </div>
                  <div className="text-sm font-medium -text--clr-silver-v1">
                    $200.001
                  </div>
                  <div className="text-sm font-medium -text--clr-silver-v1">
                    This is for School Fees
                  </div>
                </div>
                <div className="-bg--clr-secondary space-y-3 p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 text-sm">
                    <div>
                      <a
                        href="#"
                        className="text-blue-500 font-bold hover:underline"
                      >
                        #1002
                      </a>
                    </div>
                    <div className="text-gray-500">10/10/2021</div>
                    <div>
                      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                        Canceled
                      </span>
                    </div>
                  </div>
                  <div className="text-sm -text--clr-silver-v1">
                    Marvins Bank <br /> 311433356
                  </div>
                  <div className="text-sm font-medium -text--clr-silver-v1">
                    $200.001
                  </div>
                  <div className="text-sm font-medium -text--clr-silver-v1">
                    This is for School Fees
                  </div>
                </div>
              </div>
            </div>
          </div>

       {/* Financial Statement */}
<div className="-bg--clr-primary p-6 rounded shadow-md">
  <div className="text-blue-800 font-bold mb-3">
    YOUR FINANCIAL STATEMENT
  </div>
  <div className="p-5 h-max">
    <h1 className="text-lg mb-2 -text--clr-silver-v1">
      (CREDIT AND DEBIT STATEMENTS)
    </h1>
    <div className="overflow-auto rounded-lg shadow-custom hidden md:block">
      <table className="w-full">
        <thead className="border-b-2 -border--clr-silver-v1">
          <tr className="-text--clr-silver-v1">
            <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
              REF.NO
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              TYPE
            </th>
            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              AMOUNT
            </th>
            <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
              TO/FROM
            </th>
            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              DESCRIPTION
            </th>
            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              DATE/TIME
            </th>
            <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody className="divide-y -divide--clr-silver-v1">
          <tr className="-text--clr-silver-v1">
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              <a href="#" className="font-bold text-blue-500 hover:underline">
                20001
              </a>
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              Credit
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              $500.00
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              ABC Corp
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              Payment for Services
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              20/11/2021 14:30
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                Completed
              </span>
            </td>
          </tr>
          <tr className="">
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              <a href="#" className="font-bold text-blue-500 hover:underline">
                20002
              </a>
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              Debit
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              $250.00
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              XYZ Inc
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              Office Supplies
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              21/11/2021 09:15
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                Pending
              </span>
            </td>
          </tr>
          <tr className="">
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              <a href="#" className="font-bold text-blue-500 hover:underline">
                20003
              </a>
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              Credit
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              $150.00
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              John Doe
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              Freelance Work
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              22/11/2021 16:45
            </td>
            <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
              <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                Cancelled
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
      <div className="-bg--clr-secondary space-y-3 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" className="text-blue-500 font-bold hover:underline">
              #20001
            </a>
          </div>
          <div className="text-gray-500">20/11/2021</div>
          <div className="z-10">
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
              Completed
            </span>
          </div>
        </div>
        <div className="text-sm -text--clr-silver-v1">
          ABC Corp <br /> Credit
        </div>
        <div className="text-sm font-medium -text--clr-silver-v1">
          $500.00
        </div>
        <div className="text-sm font-medium -text--clr-silver-v1">
          Payment for Services
        </div>
      </div>
      <div className="-bg--clr-secondary space-y-3 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" className="text-blue-500 font-bold hover:underline">
              #20002
            </a>
          </div>
          <div className="text-gray-500">21/11/2021</div>
          <div className="z-10">
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50 z-10">
              Pending
            </span>
          </div>
        </div>
        <div className="text-sm -text--clr-silver-v1">
          XYZ Inc <br /> Debit
        </div>
        <div className="text-sm font-medium -text--clr-silver-v1">
          $250.00
        </div>
        <div className="text-sm font-medium -text--clr-silver-v1">
          Office Supplies
        </div>
      </div>
      <div className="-bg--clr-secondary space-y-3 p-4 rounded-lg shadow">
        <div className="flex items-center space-x-2 text-sm">
          <div>
            <a href="#" className="text-blue-500 font-bold hover:underline">
              #20003
            </a>
          </div>
          <div className="text-gray-500">22/11/2021</div>
          <div className="z-10">
            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
              Cancelled
            </span>
          </div>
        </div>
        <div className="text-sm -text--clr-silver-v1">
          John Doe <br /> Credit
        </div>
        <div className="text-sm font-medium -text--clr-silver-v1">
          $150.00
        </div>
        <div className="text-sm font-medium -text--clr-silver-v1">
          Freelance Work
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </>
  );
};

export default Profile;
