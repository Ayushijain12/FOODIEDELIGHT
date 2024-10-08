import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('user'); 
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const userAuthenticated = isAuthenticated();


  if (userAuthenticated && location.pathname === '/login') {
    return <Navigate to="/dashboard" replace />;
  }
  
  return isAuthenticated() ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
