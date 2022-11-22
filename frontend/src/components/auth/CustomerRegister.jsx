import React, { Fragment,useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import style from "../../assets/style/style.module.css";
import axios from "axios";

const CustomerRegister = () => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
		phone:"08....",
		user_type:1
	  });
	  const navigate = useNavigate();
	  const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(form);
		if (form.name === "" || form.password === "") {
		  alert("Data tidak boleh kosong");
		}else if(form.password.length <= 6){
			alert("Password tidak boleh kurang dari 6 karakter")
		}else{
		  const body = {
			name: form.name,
			email: form.email,
			password: form.password,
			phone: form.phone,
			user_type:form.user_type
		  };
		  axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/register`, body)
			.then((res) => {
			  console.log(res.data);
			  alert("Register Succes");
			  return navigate("/login");
			})
			.catch((err) => {
			  console.log(err);
			});
		}
	  };

	return (
		<Fragment>
			<form className="col-12 col-md-8" onSubmit={(e) => onSubmitHandler(e)}>
				<div className="mb-3">
					<input
						type="text"
						className={`form-control ${style.buttons}`}
						id="nameInput"
						placeholder="Name"
						onChange={(e) => setForm({...form,name: e.target.value})}
					/>
				</div>
				<div className="mb-3">
					<input
						type="email"
						className={`form-control ${style.buttons}`}
						id="emailInput"
						placeholder="Email"
						onChange={(e) => setForm({...form,email: e.target.value})}
					/>
				</div>
				<div className="mb-3">
					<input
						type="password"
						className={`form-control ${style.buttons}`}
						id="passwordInput"
						placeholder="Password"
						onChange={(e) => setForm({...form,password: e.target.value})}
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
