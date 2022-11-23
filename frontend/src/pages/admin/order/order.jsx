import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavAdmin from "../../../components/NavAdmin";

const Order = () => {
	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/order`)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return (
		<Fragment>
			<NavAdmin />
			<div className={`container-fluid row`}>
				<div className="d-flex justify-content-center align-items-center mt-5">
					<div className="col-8">
						<h1 className="text-center">Order list</h1>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Order;
