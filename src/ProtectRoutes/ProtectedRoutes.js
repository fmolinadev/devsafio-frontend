import React from 'react'; 
import { Navigate, Outlet } from 'react-router-dom';


const ProtectedRoutes = ({ isAllowed, children }) => {

  if ( !isAllowed ) {
    return ( 
      <Navigate  to='/login' replace/>
    );
  } 

  return  children ? children : <Outlet/>

};

export default ProtectedRoutes;