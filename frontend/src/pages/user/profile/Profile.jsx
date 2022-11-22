import React, { useState, useEffect } from 'react';
import './style.css';
// import image
import johanesMikael from '../../../assets/images/johanes mikael.png';
// component consumer
import MainContentCust from '../../../components/customer/MainContent/MainContentCust';
// component seller
import MainContentSeller from '../../../components/seller/MainContent/MainContentSeller';
import Navbar from '../../../components/NavbarLogin';

const Profile = () => {
  /**
   * dummy level
   * 1 = customer
   * 2 = seller
   */
  const [userLevel, setUserLevel] = useState('1');
  
  const [dataLogin, setDataLogin] = useState([]);
  
  
  return (
    <div className="vw-100 vh-100">
      {/* navbar */}
      <Navbar />
      {/* end of navbar */}
      <div className="container-profile h-100 w-100">
        {userLevel == 1 ? <MainContentCust /> : <></>}
        {userLevel == 2 ? <MainContentSeller /> : <></>}
      </div>
    </div>
  );
};

export default Profile;
