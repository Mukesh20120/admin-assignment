import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({children}) => {
 const {user, accessToken} = useAuth();

  if(!user && !accessToken ) {
    return <Navigate to="/"/>
  }
  return children ?  children : <Outlet/>;
}

export default AdminRoute