import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { adminLogin } from "../../redux/action/user";

const LoginAdmin = () => {
	return (
		<div className="container-fluid row">
			<div className="text-center mb-3">
				<h1>
					Welcome to admin page
					<br />
					Ankasa Ticketing
				</h1>
				<p>Please Log In to continue</p>
			</div>
			<div className="d-flex justify-content-center align-items-center">
				<div className="card">
					<div className="card-body">
						<form>
							{/* <form onSubmit={(e) => onSubmit(e)}> */}
							{/* <form> */}
							<div className="form-group mb-3">
								<label htmlFor="username"></label>
								<input
									type="text"
									placeholder="Username or Email"
									className="form-control"
									// onChange={(e) => setForm({ ...form, email: e.target.value })}
								/>
							</div>

							<div className="form-group mb-3">
								<label htmlFor="password"></label>
								<input
									type="password"
									placeholder="Password"
									className="form-control"
									// onChange={(e) =>
									// 	setForm({ ...form, password: e.target.value })
									// }
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Log In
							</button>
						</form>
						<div className="text-center">
							<Link>Forgot Password</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginAdmin;
