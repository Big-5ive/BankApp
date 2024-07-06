import React from 'react';

const TransferForm = () => {
  return (
    <>
     {/* Bank Form */}
     <div>
              <div className="text-blue-800 font-bold uppercase">wire transfer FORM</div>
              <div className="mt-2 p-6 -bg--clr-primary rounded shadow-md">
                <form className="">
                  <div className="mb-4 md:flex md:items-center">
                    <label className="block -text--clr-silver-v1 text-sm font-bold mb-2 md:mb-0 md:w-1/3" htmlFor="amount">
                      Amount:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 -text--clr-silver-v1 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 bg-transparent -border--clr-silver-v1"
                      id="amount"
                      type="text"
                      placeholder="Eg 35678"
                    />
                  </div>
                  <div className="mb-4 md:flex md:items-center">
                    <label className="block -text--clr-silver-v1 text-sm font-bold mb-2 md:mb-0 md:w-1/3" htmlFor="beneficiaryName">
                      Beneficiary Account Name:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 -text--clr-silver-v1 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 bg-transparent -border--clr-silver-v1"
                      id="beneficiaryName"
                      type="text"
                      placeholder="Beneficiary Name"
                    />
                  </div>
                  <div className="mb-4 md:flex md:items-center">
                    <label className="block -text--clr-silver-v1 text-sm font-bold mb-2 md:mb-0 md:w-1/3" htmlFor="beneficiaryNumber">
                      Beneficiary Account Number:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 -text--clr-silver-v1 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 bg-transparent -border--clr-silver-v1"
                      id="beneficiaryNumber"
                      type="text"
                      placeholder="2"
                    />
                  </div>
                  <div className="mb-4 md:flex md:items-center">
                    <label className="block -text--clr-silver-v1 text-sm font-bold mb-2 md:mb-0 md:w-1/3" htmlFor="bankName">
                      Bank Name:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 -text--clr-silver-v1 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 bg-transparent -border--clr-silver-v1"
                      id="bankName"
                      type="text"
                      placeholder="Bank Name"
                    />
                  </div>
                  <div className="mb-4 md:flex md:items-center">
                    <label className="block -text--clr-silver-v1 text-sm font-bold mb-2 md:mb-0 md:w-1/3" htmlFor="swiftCode">
                      SWIFT Code:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 -text--clr-silver-v1 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 bg-transparent -border--clr-silver-v1"
                      id="swiftCode"
                      type="text"
                      placeholder="Enter SWIFT code"
                    />
                  </div>
                  <div className="mb-4 md:flex md:items-center">
                    <label className="block -text--clr-silver-v1 text-sm font-bold mb-2 md:mb-0 md:w-1/3" htmlFor="routingNumber">
                      ROUTING Number:
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 -text--clr-silver-v1 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 bg-transparent -border--clr-silver-v1"
                      id="routingNumber"
                      type="text"
                      placeholder="Routing Num."
                    />
                  </div>
                  <div className="mb-4 md:flex md:items-center">
                    <label className="block -text--clr-silver-v1 text-sm font-bold mb-2 md:mb-0 md:w-1/3" htmlFor="description">
                      Description:
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 -text--clr-silver-v1 leading-tight focus:outline-none focus:shadow-outline md:w-2/3 bg-transparent -border--clr-silver-v1"
                      id="description"
                      placeholder="Description"
                    ></textarea>
                  </div>
                  <div className="mb-4 md:flex md:items-center">
                    <label className="block -text--clr-silver-v1 text-sm font-bold mb-2 md:mb-0 md:w-1/3">
                      Account Type: <span className="text-red-500">*</span>
                    </label>
                    <div className="md:w-2/3">
                      <div className="flex items-center mb-2">
                        <input className="mr-2 leading-tight" type="radio" id="personal" name="accountType" value="personal" />
                        <label className="-text--clr-silver-v1" htmlFor="personal">Personal (Savings)</label>
                      </div>
                      <div className="flex items-center mb-2">
                        <input className="mr-2 leading-tight" type="radio" id="current" name="accountType" value="current" />
                        <label className="-text--clr-silver-v1" htmlFor="current">Current</label>
                      </div>
                      <div className="flex items-center">
                        <input className="mr-2 leading-tight" type="radio" id="checking" name="accountType" value="checking" />
                        <label className="-text--clr-silver-v1" htmlFor="checking">Checking</label>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
    </>
  );
};

export default TransferForm;

