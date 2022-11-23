import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../assets/style/style.module.css";
import axios from "axios";
import { login } from "../../redux/action/user";
import { useDispatch } from "react-redux";

const SellerLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  
  const onSubmit = (e) => {
    e.preventDefault();

    const handleSuccess = (data) => {
      if(data.data.status !== "success"){
        alert(data.data.message);
      } else {
        const user = data.data.data.user_type;

        if (user === 2) {
          
          localStorage.setItem("token", data.data.token);
          localStorage.setItem("data", JSON.stringify(data.data.data));
          alert("Login Success");
          return navigate('/')
        } else {
          alert("This user is not registered as a seller");
        }
      }
    }
    dispatch(login(form, handleSuccess));
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
          <Link className={`${style.links}`} to="/resetpass">
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
            <Link className={`${style.links} text-danger`} to="/register"> Register</Link>
          </span>
        </p>
      </div>
    </Fragment>
  );
};

export default SellerLogin;
