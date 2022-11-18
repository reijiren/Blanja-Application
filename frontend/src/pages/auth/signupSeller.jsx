import React from 'react';
import { Link } from 'react-router-dom';
import '../auth/auth.css';
import logo from '../../assets/images/icon/blanja_icon.png';

const signupSeller = () => {
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
          <input type="text" className="inputAuth" placeholder="Name" />
          <input type="email" className="inputAuth" placeholder="Email" />
          <input type="number" className="inputAuth" placeholder="Phone Number" />
          <input type="text" className="inputAuth" placeholder="Store Name" />
          <input type="password" className="inputAuth" placeholder="Password" />
          <div className="forgotPass d-flex justify-content-end">
            <Link>Forgot password?</Link>
          </div>
          <input type="button" className="buttonAuth" value="Signup" />
          <div className="infoHaveAcc d-flex justify-content-center">
            <Link>
              Already have a Belanja account?<span>Login</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default signupSeller;
