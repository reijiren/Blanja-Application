import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import Login from '../pages/login/login';
import Product from '../pages/product/product';
import Register from '../pages/register/register';
import MyBag from '../pages/myBag/myBag';
import Category from '../pages/category/category';
import Chat from '../pages/liveChat/chat';
import Landing from '../pages/landing/landing';

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="product" element={<Product />} />
          <Route path="mybag" element={<MyBag />} />
          <Route path="category" element={<Category />} />
          <Route path="chat" element={<Chat />} />
          <Route path="landing" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
