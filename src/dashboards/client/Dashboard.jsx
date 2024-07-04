import React from 'react'
import Sidebar from '../../layout/Sidebar/Sidebar';
// import Sidebar from './layout/Sidebar/Sidebar';
import Content from '../../layout/Content/Content';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='app'>
    <Sidebar />
    <Outlet />
    {/* <Content /> */}
  </div>
  )
}

export default Dashboard