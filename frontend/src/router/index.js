import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import Login from '../pages/login/login';
import Profile from '../pages/user/profile/Profile';
import Register from '../pages/register/register';
import MyBag from '../pages/myBag/myBag';
import Category from '../pages/category/category';
import Product from '../pages/product/product';
import CheckOut from '../pages/user/checkout/CheckOut';
import Chat from '../pages/liveChat/chat';
import Landing from '../pages/landing/landing';
import ResetPass from '../pages/ResetPassword/index.js';

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="product" element={<Product />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mybag" element={<MyBag />} />
          <Route path="category" element={<Category />} />
          <Route path="chat" element={<Chat />} />
          <Route path="resetpass" element={<ResetPass />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
