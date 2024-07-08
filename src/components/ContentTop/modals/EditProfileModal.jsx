import React from 'react';

const EditProfileModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center -bg--clr-secondary  bg-opacity-50 z-50">
      <div className="-bg--clr-primary -text--clr-silver-v1 p-6 rounded-lg w-full max-w-md mx-4 sm:mx-auto relative">
        <span className="cursor-pointer float-right text-[40px] -text--clr-silver hover:-text--clr-light-gray absolute right-5 top-2 " onClick={onClose}>&times;</span>
        <h2 className="text-2xl mb-4">Edit Profile</h2>
        <form className="grid grid-cols-1 gap-4">
          <label htmlFor="name" className="block text-sm font-medium -text--clr-silver-v1">Name:</label>
          <input type="text" id="name" name="name" placeholder='Name' className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-transparent outline-none" />
          <label htmlFor="email" className="block text-sm font-medium -text--clr-silver-v1">Email:</label>
          <input type="email" id="email" name="email" placeholder='Email' className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-transparent outline-none" />
          <label htmlFor="phone" className="block text-sm font-medium -text--clr-silver-v1">Phone Number:</label>
          <input type="text" id="phone" name="phone" placeholder='Number' className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-transparent outline-none" />
          <label htmlFor="marital-status" className="block text-sm font-medium -text--clr-silver-v1">Marital Status:</label>
          <select id="marital-status" name="marital-status" className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-transparent outline-none">
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
          <label htmlFor="address" className="block text-sm font-medium -text--clr-silver-v1">Address:</label>
          <input type="text" id="address" name="address" placeholder='Address' className="mt-1 block w-full border border-gray-300 rounded-md p-2 bg-transparent outline-none" />
          <button type="submit" className="mt-4 w-full -bg--clr-pumpkin text-white py-2 rounded-md">Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
