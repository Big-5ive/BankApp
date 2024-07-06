import React from 'react'

const FinancialStatement = () => {
  return (
    <>
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
    </>
  )
}

export default FinancialStatement