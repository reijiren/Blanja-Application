import React from "react";
import {
	BrowserRouter,
	Navigate,
	Outlet,
	Route,
	Routes,
} from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

import Login from "../pages/login/login";
import Profile from "../pages/user/profile/Profile";
import Register from "../pages/register/register";
import MyBag from "../pages/myBag/myBag";
import Category from "../pages/category/category";
import Product from "../pages/product/product";
import CheckOut from "../pages/user/checkout/CheckOut";
import Chat from "../pages/liveChat/chat";
import Landing from "../pages/landing/landing";
import ResetPass from "../pages/ResetPassword/index";
import LoginAdmin from "../pages/admin/login/adminLogin";
import HomeAdmin from "../pages/admin/home/adminHome";
import Order from "../pages/admin/order/order";
import SearchOrder from "../pages/admin/searchOrder/searchOrder";

const AdminRoute = () => {
	const level = localStorage.getItem("level");

	if (level == 0) {
		return <Outlet />;
	} else {
		alert("You have no access to this site");
		return <Navigate to="/admin" />;
	}
};

export default function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/">
					<Route index element={<Landing />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="product/:id_product" element={<Product />} />
					<Route path="checkout" element={<CheckOut />} />
					<Route path="profile" element={<Profile />} />
					<Route path="mybag" element={<MyBag />} />
					<Route path="category" element={<Category />} />
					<Route path="chat" element={<Chat />} />
					<Route path="resetpass" element={<ResetPass />} />
				</Route>
				<Route path="/admin/">
					<Route index element={<LoginAdmin />} />
					<Route path="home" element={<AdminRoute />}>
						<Route index element={<HomeAdmin />} />
					</Route>
					<Route path="order" element={<AdminRoute />}>
						<Route index element={<Order />} />
					</Route>
					<Route path="search-order" element={<AdminRoute />}>
						<Route index element={<SearchOrder />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
