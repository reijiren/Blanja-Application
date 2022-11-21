import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';

import Login from '../pages/login/login';
import Product from '../pages/product/product';
import Register from '../pages/register/register';
import MyBag from '../pages/myBag/myBag';
import Tshirt from '../pages/t-shirt/tshirt';
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
          <Route path="myBag" element={<MyBag />} />
          <Route path="tshirt" element={<Tshirt />} />
          <Route path="chat" element={<Chat />} />
          <Route path="landing" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
