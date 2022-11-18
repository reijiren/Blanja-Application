import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import LoginCostumer from '../views/auth/loginCostumer';

import LoginSeller from '../views/auth/loginSeller';
import SignUpSeller from '../views/auth/signupSeller';
import SignUpCostumer from '../views/auth/signupCustomer';

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"></Route>
        <Route path="loginCostumer" element={<LoginCostumer />} />
        <Route path="loginseller" element={<LoginSeller />} />
        <Route path="signUpCostumer" element={<SignUpCostumer />} />
        <Route path="signUpSeller" element={<SignUpSeller />} />
      </Routes>
    </BrowserRouter>
  );
}
