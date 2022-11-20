import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import style from "../../assets/style/style.module.css";

const CustomerRegister = () => {
	return (
		<Fragment>
			<form className="col-12 col-md-8">
				<div className="mb-3">
					<input
						type="text"
						className={`form-control ${style.buttons}`}
						id="nameInput"
						placeholder="Name"
					/>
				</div>
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
				<button
					type="submit"
					className={`col-12 mt-4 mb-3 ${style.buttonsActive}`}>
					Register
				</button>
			</form>
			<div className="text-center">
				<p>
					Already have a Blanja account?{" "}
					<span>
						<Link className={`${style.links} text-danger`}> Log In</Link>
					</span>
				</p>
			</div>
		</Fragment>
	);
};

export default CustomerRegister;
