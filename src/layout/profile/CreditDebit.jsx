// CreditDebit.js
import React from 'react';
import { transactions } from './data';

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
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">REF.NO</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">TYPE</th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">AMOUNT</th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">TO/FROM</th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">DESCRIPTION</th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">DATE/TIME</th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y -divide--clr-silver-v1">
                {transactions.map((transaction, index) => (
                  <tr key={index} className="-text--clr-silver-v1">
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                      <a href="#" className="font-bold text-blue-500 hover:underline">{transaction.refNo}</a>
                    </td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{transaction.type}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{transaction.amount}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{transaction.toFrom}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{transaction.description}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{transaction.dateTime}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                      <span className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${
                        transaction.status === 'Completed'
                          ? 'text-green-800 bg-green-200'
                          : transaction.status === 'Pending'
                          ? 'text-yellow-800 bg-yellow-200'
                          : 'text-gray-800 bg-gray-200'
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {transactions.map((transaction, index) => (
              <div key={index} className="-bg--clr-secondary space-y-3 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-2 text-sm">
                  <div>
                    <a href="#" className="text-blue-500 font-bold hover:underline">#{transaction.refNo}</a>
                  </div>
                  <div className="text-gray-500">{transaction.dateTime.split(' ')[0]}</div>
                  <div className="z-10">
                    <span className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${
                      transaction.status === 'Completed'
                        ? 'text-green-800 bg-green-200'
                        : transaction.status === 'Pending'
                        ? 'text-yellow-800 bg-yellow-200'
                        : 'text-gray-800 bg-gray-200'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
                <div className="text-sm -text--clr-silver-v1">
                  {transaction.toFrom} <br /> {transaction.type}
                </div>
                <div className="text-sm font-medium -text--clr-silver-v1">{transaction.amount}</div>
                <div className="text-sm font-medium -text--clr-silver-v1">{transaction.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreditDebit;
