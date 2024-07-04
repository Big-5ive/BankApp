import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from '../../layout/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import ChatButton from './ChatButton';
import ContactFormModal from './ContactFormModal';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = () => {
    toast.success('Form submitted successfully!');
  };

  return (
    <div className='app'>
      <Sidebar />
      <Outlet />
      <ChatButton onClick={() => setIsModalOpen(true)} />
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleFormSubmit}
      />
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
