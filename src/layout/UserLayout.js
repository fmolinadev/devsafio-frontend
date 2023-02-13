import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../components/User/Dashboard';



const UserLayout = () => {
  return (
    <div className="flex">
    <div className="lg:w-72 lg:pt-10 h-screen my-5 bg-fill-light rounded-tr-3xl">
      <Dashboard />
    </div>
    <Outlet />
  </div>
);
};

export default UserLayout;