import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../assets/style/style.module.css";
import axios from "axios";

const ResetPassword = () => {
    const [form, setForm] = useState({
        email: ""
      });
      const onSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        
        axios
          .get(`${process.env.REACT_APP_BACKEND_URL}/user/email/${form.email}`, form)
          .then((response) => {
            // console.log(response.data)
            // console.log(response.data.data[0].email)
            localStorage.setItem("data1",JSON.stringify(response.data.data[0].id_user));  
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
    <Fragment>
      <form className="col-12 col-md-8" onSubmit={(e) => onSubmit(e)} >
        <div className="mb-3">
          <input
            type="email"
            className={`form-control ${style.buttons}`}
            id="emailInput"
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className="d-flex flex-row-reverse mb-3">
          <Link className={`${style.links}`}>
            <p className="text-danger">Forget Password?</p>
          </Link>
        </div>
        <button type="submit" className={`col-12 mb-3 ${style.buttonsActive}`}>
          Reset Password
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

export default ResetPassword;
