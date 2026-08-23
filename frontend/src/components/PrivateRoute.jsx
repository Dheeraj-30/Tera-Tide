import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  // If there is no user logged in, instantly redirect to the Auth page
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // If the user exists, render the protected component (like the Dashboard)
  return children;
};

export default PrivateRoute;