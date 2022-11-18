import React from 'react';
import { Link } from 'react-router-dom';
import '../auth/auth.css';
import logo from '../../assets/images/icon/blanja_icon.png';

const loginCostumer = () => {
  return (
    <>
      <div className="wrapper">
        <div className="title d-flex justify-content-center align-items-center">
          <img src={logo} alt="logo belanja"></img>
          <h1>Belanja</h1>
        </div>
        <h4 className="d-flex justify-content-center">Please login with your account</h4>
        <div className="d-flex justify-content-center mb-5">
          <div className="boxActive">Costumer</div>
          <div className="boxInactive">Seller</div>
        </div>
        <form>
          <input type="email" className="inputAuth" placeholder="Email" />
          <input type="password" className="inputAuth" placeholder="Password" />
          <div className="forgotPass d-flex justify-content-end">
            <Link to="">Forgot password?</Link>
          </div>
          <input type="button" className="buttonAuth" value="Login" />
        </form>
      </div>
    </>
  );
};

export default loginCostumer;
