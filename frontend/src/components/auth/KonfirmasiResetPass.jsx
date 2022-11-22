import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../../assets/style/style.module.css";
import axios from "axios";

const ConfirmResetPass = () => {
  const navigate=useNavigate()
  const [update, setUpdate] = useState({
    password:"",
    newPassword:""
  });
  const handlePost = (e) => {
    e.preventDefault();
    if(update.password.length >= 6 || update.newPassword >= 6){
    if(update.password===update.newPassword){
    const data1 = JSON.parse(localStorage.getItem("data1"));
    console.log(data1)
    const form = {
      password: update.password
    };
    axios
      .put(`${process.env.REACT_APP_BACKEND_URL}/customer/${data1}`, form)
      .then((res) => {
        console.log(res);
        alert("Update Success");
        return navigate('/login');
      })
      .catch((err) => {
        console.log(err);
        alert("Update Failed");
      });
    }else{
      alert("password tidak sama")
    }
  }else{
    alert ("Jumlah karakter untuk password minimal 7")
  }
  };
  return (
    <Fragment>
      <form className="col-12 col-md-8" onSubmit={(e) => handlePost(e)} >
        <div className="mb-3">
          <input
            type="password"
            className={`form-control ${style.buttons}`}
            id="passwordInput"
            placeholder="Password"
            onChange={(e) =>setUpdate({ ...update, password: e.target.value })}
          />
          
        </div>
        <div className="mb-3">
        <input
            type="password"
            className={`form-control ${style.buttons}`}
            id="confirmpasswordInput"
            placeholder="Confirmation New Password"
            onChange={(e) =>setUpdate({ ...update, newPassword: e.target.value })}
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

export default ConfirmResetPass;
