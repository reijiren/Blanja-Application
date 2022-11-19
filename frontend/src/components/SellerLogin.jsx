import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import style from "../assets/style/style.module.css";

const SellerLogin = () => {
	return (
		<Fragment>
			<form className="col-12 col-md-8">
				<div className="mb-3">
					<input
						type="email"
						className={`form-control ${style.buttons}`}
						id="emailInput"
						placeholder="Email"
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						className={`form-control ${style.buttons}`}
						id="passwordInput"
						placeholder="Password"
					/>
				</div>
				<div className="d-flex flex-row-reverse mb-3">
					<Link className={`${style.links}`}>
						<p className="text-danger">Forget Password?</p>
					</Link>
				</div>
				<button type="submit" className={`col-12 mb-3 ${style.buttonsActive}`}>
					Log in
				</button>
			</form>
			<div className="text-center">
				<p>
					Don't have a Blanja account?{" "}
					<span>
						<Link className={`${style.links} text-danger`}> Register</Link>
					</span>
				</p>
			</div>
		</Fragment>
	);
};

export default SellerLogin;
