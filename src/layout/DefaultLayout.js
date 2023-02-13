import React from 'react';
import { Headers } from '../components/Headers/Index.jsx';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const DefaultLayout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
