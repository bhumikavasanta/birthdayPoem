import React from 'react';
import {
  Routes as ViewsRoutes, BrowserRouter, Route, Navigate,
} from 'react-router-dom';

import { Main as MainLayout } from '../layouts';
import ProtectedOutlet from './ProtectedOutlet';
import { UserAuthContextProvider } from '../context/UserAuthContext';

const LazySignup = React.lazy(() => import('../views/Auth'));
const LazyLogin = React.lazy(() => import('../views/Auth/components/Login'));
const LazyForgotPassword = React.lazy(() => import('../views/Auth/components/ForgotPassword'));
const LazyAllLoans = React.lazy(() => import('../views/AllLoans'));
const LazyLoanDetails = React.lazy(() => import('../views/LoanDetails'));

function Routes() {
  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <ViewsRoutes>
          {/* Public Routes */}
          <Route path="*" element={<Navigate to="/signup" />} />
          {/* <Route
            path="error"
            element={<Error />}
          />
          <Route
            path="unauthorized"
            element={<Unauthorized />}
          /> */}

          <Route
            path="/signup"
            element={(
              <React.Suspense fallback={<>...</>}>
                <LazySignup />
              </React.Suspense>
            )}
          />
          <Route
            path="/login"
            element={(
              <React.Suspense fallback={<>...</>}>
                <LazyLogin />
              </React.Suspense>
            )}
          />
          <Route
            path="/forgot-password"
            element={(
              <React.Suspense fallback={<>...</>}>
                <LazyForgotPassword />
              </React.Suspense>
          )}
          />

          {/* Protected Routes */}
          <Route element={<ProtectedOutlet />}>
            <Route path="/" element={<MainLayout />}>
              <Route
                path="/main"
                element={(
                  <React.Suspense fallback={<>...</>}>
                    <LazyAllLoans />
                  </React.Suspense>
                )}
              />
              <Route
                path="/main2"
                element={(
                  <React.Suspense fallback={<>...</>}>
                    <LazyLoanDetails />
                  </React.Suspense>
                )}
              />
            </Route>
          </Route>
        </ViewsRoutes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
}
export default Routes;
