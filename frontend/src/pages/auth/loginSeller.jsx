import React from 'react';
import { Link } from 'react-router-dom';
import '../auth/auth.css';
import logo from '../../assets/images/icon/blanja_icon.png';

const loginSeller = () => {
  return (
    <>
      <div className="wrapper">
        <div className="title d-flex justify-content-center align-items-center">
          <img src={logo} alt="logo belanja"></img>
          <h1>Belanja</h1>
        </div>
        <h4 className="d-flex justify-content-center">Please login with your account</h4>
        <div className="d-flex justify-content-center mb-5">
          <div className="boxInactiveSell">Costumer</div>
          <div className="boxActiveSell">Seller</div>
        </div>
        <form action="#">
          <div className="">
            <input type="email" className="inputAuth" placeholder="Email" />
          </div>
          <div className="">
            <input type="password" className="inputAuth" placeholder="Password" />
          </div>
          <div className="">
            <div className="forgotPass d-flex justify-content-end">
              <Link to="">Forgot password?</Link>
            </div>
            <input type="button" className="buttonAuth" value="Login" />
            <div className="infoHaveAcc d-flex justify-content-center">
              <Link to="">
                Don't have a Belanja account?<span> Register</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default loginSeller;
