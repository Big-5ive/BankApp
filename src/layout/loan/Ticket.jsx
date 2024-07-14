import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Ticket = () => {
  const [loanType, setLoanType] = useState("personal-loans");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleOpenTicket = () => {
    if (!amount || !description) {
      toast.error("Please fill in all the fields");
    } else {
      toast.success("Ticket opened successfully!");
      // Here, you can also add logic to handle the form submission
    }
  };

  const handleDiscard = () => {
    setLoanType("personal-loans");
    setAmount("");
    setDescription("");
  };

  return (
    <>
      <div>
        <ToastContainer />
        <div className="text-blue-800 font-bold">TICKETS</div>
        <div className="mt-2 p-6 -bg--clr-primary rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handleOpenTicket}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Open Ticket
            </button>
            <button
              onClick={handleDiscard}
              className="text-blue-500"
            >
              Discard
            </button>
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
              <select
                value={loanType}
                onChange={(e) => setLoanType(e.target.value)}
                className="w-full p-2 border rounded -bg--clr-primary -text--clr-silver-v1 outline-none"
              >
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
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
                className="w-full p-2 border rounded bg-transparent -text--clr-silver-v1"
              />
            </div>
            <div className="space-y-1">
              <label className="block -text--clr-silver-v1">Loan Reason:</label>
              <textarea
                placeholder="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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










// import React from "react";

// const Ticket = () => {
//   return (
//     <>
//       <div>
//         <div className="text-blue-800 font-bold">TICKETS</div>
//         <div className="mt-2 p-6 -bg--clr-primary rounded shadow-md">
//           <div className="flex justify-between items-center mb-4">
//             <button className="px-4 py-2 bg-blue-500 text-white rounded">
//               Open Ticket
//             </button>
//             <button className="text-blue-500">Discard</button>
//           </div>
//           <div className="space-y-4">
//             <div className="space-y-1">
//               <label className="block -text--clr-silver-v1">To:</label>
//               <input
//                 type="text"
//                 value="Customer Care"
//                 readOnly
//                 className="w-full p-2 border rounded bg-transparent -text--clr-silver-v1"
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="block -text--clr-silver-v1">Loan Type:</label>
//               <select className="w-full p-2 border rounded -bg--clr-primary -text--clr-silver-v1 outline-none">
//                 <option value="personal-loans">Personal Loans</option>
//                 <option value="mortgages">Mortgages</option>
//                 <option value="business-loans">Business Loans</option>
//               </select>
//             </div>
//             <div className="space-y-1">
//               <label className="block -text--clr-silver-v1">Amount:</label>
//               <input
//                 type="number"
//                 name="number"
//                 placeholder="Amount"
//                 className="w-full p-2 border rounded bg-transparent -text--clr-silver-v1"
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="block -text--clr-silver-v1">Loan Reason:</label>
//               <textarea
//                 placeholder="description"
//                 name="description"
//                 className="w-full p-2 border rounded bg-transparent -text--clr-silver-v1"
//               ></textarea>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Ticket;
