import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

// admin
import HomeAdmin from "../pages/admin/home/adminHome";

// user dan seller
import Login from "../pages/login/login";
import Product from "../pages/product/product";
import Register from "../pages/register/register";

export default function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/">
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="product" element={<Product />} />
				</Route>
				<Route path="/admin/">
					<Route path="home" element={<HomeAdmin />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
