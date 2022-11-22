import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../assets/style/style.module.css";
import axios from "axios";

const CustomerLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/login`, form)
      .then((response) => {
        // console.log(response.data.token.data)
        // console.log(response.data.data.user_type)
        // localStorage.setItem("data",JSON.stringify(response.data));

        if (response.data.status !== "success") {
          alert(response.data.message);
        } else {
          const user = response.data.data.user_type;
          console.log(user);
          if (user === 1) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("data", JSON.stringify(response.data));
			localStorage.setItem("data1", JSON.stringify(response.data.data.email));
            alert("Berhasil Login");
            return navigate('/LandingPage')
          } else {
            alert("maaf anda terdaftar sebagai seller");
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      <form className="col-12 col-md-8" onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${style.buttons}`}
            id="emailInput"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className={`form-control ${style.buttons}`}
            id="passwordInput"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
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

export default CustomerLogin;
