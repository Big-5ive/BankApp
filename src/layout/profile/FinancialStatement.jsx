import React from 'react';
import { financialData } from './data';

const FinancialStatement = () => {
  return (
    <>
      {/* Financial Statement Review */}
      <div className="-bg--clr-primary p-6 rounded shadow-md">
        <div className="text-blue-800 font-bold mb-3">
          YOUR FINANCIAL STATEMENT REVIEW
        </div>

        <div className="p-5 h-max">
          <h1 className="text-lg mb-2 -text--clr-silver-v1">
            (WIRE AND DOMESTIC TRANSFERS)
          </h1>

          <div className="overflow-auto rounded-lg shadow-custom hidden md:block">
            <table className="w-full">
              <thead className="border-b-2 -border--clr-silver-v1">
                <tr className="-text--clr-silver-v1">
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">No.</th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">BENEFICIARY BANK</th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">BENEFICIARY ACCOUNT</th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">AMOUNT</th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left uppercase">Status</th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">DESCRIPTION</th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left uppercase">Date/time</th>
                </tr>
              </thead>
              <tbody className="divide-y -divide--clr-silver-v1">
                {financialData.map((data) => (
                  <tr key={data.id} className="-text--clr-silver-v1">
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                      <a href="#" className="font-bold text-blue-500 hover:underline">{data.id}</a>
                    </td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{data.bank}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{data.account}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{data.amount}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">
                      <span className={`p-1.5 text-xs font-medium uppercase tracking-wider text-${data.status === 'Delivered' ? 'green' : data.status === 'Pending' ? 'yellow' : 'gray'}-800 bg-${data.status === 'Delivered' ? 'green' : data.status === 'Pending' ? 'yellow' : 'gray'}-200 rounded-lg bg-opacity-50`}>
                        {data.status}
                      </span>
                    </td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{data.description}</td>
                    <td className="p-3 text-sm -text--clr-silver-v1 whitespace-nowrap">{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {financialData.map((data) => (
              <div key={data.id} className="-bg--clr-secondary space-y-3 p-4 rounded-lg shadow">
                <div className="flex items-center space-x-2 text-sm">
                  <div>
                    <a href="#" className="text-blue-500 font-bold hover:underline">#{data.id}</a>
                  </div>
                  <div className="text-gray-500">{data.date.split(' ')[0]}</div>
                  <div>
                    <span className={`p-1.5 text-xs font-medium uppercase tracking-wider text-${data.status === 'Delivered' ? 'green' : data.status === 'Pending' ? 'yellow' : 'gray'}-800 bg-${data.status === 'Delivered' ? 'green' : data.status === 'Pending' ? 'yellow' : 'gray'}-200 rounded-lg bg-opacity-50`}>
                      {data.status}
                    </span>
                  </div>
                </div>
                <div className="text-sm -text--clr-silver-v1">
                  {data.bank} <br /> {data.account}
                </div>
                <div className="text-sm font-medium -text--clr-silver-v1">{data.amount}</div>
                <div className="text-sm font-medium -text--clr-silver-v1">{data.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialStatement;
