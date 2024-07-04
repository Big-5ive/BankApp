import React from "react";
import ContentTop from "../../components/ContentTop/ContentTop";

const Loan = () => {
  return (
    <>
      <div className="main-content">
   <ContentTop />
      <div className="flex flex-col lg:flex-row -bg--clr-secondary w-full">
        {/* Left Side */}
        <div className="flex-1 p-6 space-y-6">
          {/* Balances */}
          <div className="flex space-x-6 max-[700px]:flex-col max-[700px]:space-y-5 max-[700px]:items-center max-[700px]:justify-center max-[700px]:space-x-0 ">
            <div className="p-4 -bg--clr-primary rounded shadow-md text-center max-[700px]:w-[95%] ">
              <div className="-text--clr-silver-v1">Book Balance</div>
              <div className="text-2xl text-orange-500 font-bold">
                $1,200,000.00
              </div>
            </div>
            <div className="p-4 -bg--clr-primary rounded shadow-md text-center max-[700px]:w-[95%]">
              <div className="-text--clr-silver-v1">Available Balance</div>
              <div className="text-2xl text-green-500 font-bold">
                $900,000.00
              </div>
            </div>
          </div>

          {/* Tickets */}
          <div>
            <div className="text-gray-800 font-bold">TICKETS</div>
            <div className="mt-2 p-6 -bg--clr-primary rounded shadow-md">
              <div className="flex justify-between items-center mb-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Open Ticket
                </button>
                <button className="text-blue-500">Discard</button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700">To:</label>
                  <input
                    type="text"
                    value="Customer Care"
                    readOnly
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Amount:</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-gray-700">Loan Reason:</label>
                  <textarea className="w-full p-2 border rounded"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/3 p-6 space-y-6">
          <div className="-bg--clr-primary p-4 rounded shadow-md">
            <div className="-text--clr-silver-v1">Thurs 4 July 2024</div>
            <div className="text-2xl font-bold -text--clr-silver-v1">
              19:8:54
            </div>
          </div>
          <div className="-bg--clr-primary p-4 rounded shadow-md">
            <div className="-text--clr-silver-v1">ATM Card Details</div>
            <div className="mt-4 space-y-2">
              <div className="p-2 border rounded">
                Card Number: 4257 9801 21190 XXXX
              </div>
              <div className="flex space-x-2">
                <div className="flex-1">
                  <div className="-text--clr-silver-v1">Ex.Date</div>
                  <div className="p-2 border rounded">06/2</div>
                </div>
                <div className="flex-1">
                  <div className="-text--clr-silver-v1">Csv</div>
                  <div className="p-2 border rounded">268</div>
                </div>
                <div className="flex-1">
                  <div className="-text--clr-silver-v1">Pin</div>
                  <div className="p-2 border rounded">5460</div>
                </div>
              </div>
            </div>
          </div>
          <div className="-bg--clr-primary p-4 rounded shadow-md">
            <div className="text-gray-800 font-bold">TIPS</div>
            <div className="mt-4 -text--clr-silver-v1">
              YOUR TRANSFER IS PROCESSING!
              <br />
              DO YOU HAVE ISSUES REGARDING TRANSFER? FEEL FREE TO CONTACT
              CUSTOMER CARE
            </div>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
              Contact Customer care
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Loan;
