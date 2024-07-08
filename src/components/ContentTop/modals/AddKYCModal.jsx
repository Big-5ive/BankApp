import React from 'react';

const AddKYCModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center -bg--clr-secondary bg-opacity-50 z-50 -text--clr-silver-v1">
      <div className="-bg--clr-primary p-6 rounded-lg w-full max-w-md mx-4 sm:mx-auto relative">
        <span className="-text--clr-silver hover:-text--clr-light-gray absolute right-5 top-2 text-[30px] cursor-pointer float-right" onClick={onClose}>&times;</span>
        <h2 className="text-2xl mb-4">Add KYC Document</h2>
        <form>
          <label htmlFor="document" className="block text-sm font-medium text-gray-700">Upload Document:</label>
          <input type="file" id="document" name="document" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
          <button type="submit" className="mt-4 w-full -bg--clr-pumpkin text-white py-2 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddKYCModal;
