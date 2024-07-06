import React from 'react'

const CreditDebit = () => {
  return (
   <>
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
   </>
  )
}

export default CreditDebit