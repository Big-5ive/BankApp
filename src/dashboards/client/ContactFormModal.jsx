import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactFormModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    onClose();
    setFormData({ name: '', email: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center z-40'>
      <div className='p-6 -bg--clr-primary rounded-lg shadow-lg w-full max-w-md -border--clr-silver-v1 border-2 max-[700px]:m-4'>
        <h2 className='text-lg font-semibold mb-4 -text--clr-silver-v1'>
          Kindly fill the form below and one of our agents will attend to you shortly
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block -text--clr-silver-v1 text-sm font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block -text--clr-silver-v1 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 -text--clr-silver-v1 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block -text--clr-silver-v1 text-sm font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='-bg--clr-pumpkin hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center'
            >
              <FaPaperPlane className='mr-2' />
              Submit
            </button>
            <button
              type='button'
              onClick={onClose}
              className='-text--clr-silver-v1 underline hover:-text--clr-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
