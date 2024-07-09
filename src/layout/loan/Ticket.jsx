import React from "react";

const Ticket = () => {
  return (
    <>
      <div>
        <div className="text-blue-800 font-bold">TICKETS</div>
        <div className="mt-2 p-6 -bg--clr-primary rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Open Ticket
            </button>
            <button className="text-blue-500">Discard</button>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="block -text--clr-silver-v1">To:</label>
              <input
                type="text"
                value="Customer Care"
                readOnly
                className="w-full p-2 border rounded bg-transparent -text--clr-silver-v1"
              />
            </div>
            <div className="space-y-1">
              <label className="block -text--clr-silver-v1">Loan Type:</label>
              <select className="w-full p-2 border rounded -bg--clr-primary -text--clr-silver-v1 outline-none">
                <option value="personal-loans">Personal Loans</option>
                <option value="mortgages">Mortgages</option>
                <option value="business-loans">Business Loans</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="block -text--clr-silver-v1">Amount:</label>
              <input
                type="number"
                name="number"
                placeholder="Amount"
                className="w-full p-2 border rounded bg-transparent -text--clr-silver-v1"
              />
            </div>
            <div className="space-y-1">
              <label className="block -text--clr-silver-v1">Loan Reason:</label>
              <textarea
                placeholder="description"
                name="description"
                className="w-full p-2 border rounded bg-transparent -text--clr-silver-v1"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
