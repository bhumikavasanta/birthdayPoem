import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function ProtectedOutlet() {
  const { user } = useUserAuth();
  const location = useLocation();

  return (
    user ? <Outlet /> : <Navigate to="/signup" state={{ from: location }} />
  );
}

export default ProtectedOutlet;
