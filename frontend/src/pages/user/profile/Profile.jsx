import React, { useState, useEffect } from "react";
import "./style.css";
// import image
import johanesMikael from "../../../assets/images/johanes mikael.png";
// component consumer
import MainContentCust from "../../../components/customer/MainContent/MainContentCust";
// component seller
import MainContentSeller from "../../../components/seller/MainContent/MainContentSeller";
import NavbarLogin from "../../../components/NavbarLogin";
import Navbar from "../../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { detailById } from "../../../redux/action/user";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  /**
   * dummy level
   * 1 = customer
   * 2 = seller
   */

  const navigate = useNavigate();
  const [userType, setUserType] = useState(null);
  const [id, setId] = useState(null);
  const [dataLogin, setDataLogin] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    
    // console.log(data)
    if(!data) {
      alert("please login first")
      return navigate('/login')
    }
    setDataLogin(data);
    setUserType(data.user_type);

  }, []);
  
  // for loading
  // if (loading) {
  //   return (
  //     <div className="middle">
  //       <div className="bar bar1"></div>
  //       <div className="bar bar2"></div>
  //       <div className="bar bar3"></div>
  //       <div className="bar bar4"></div>
  //       <div className="bar bar5"></div>
  //       <div className="bar bar6"></div>
  //       <div className="bar bar7"></div>
  //       <div className="bar bar8"></div>
  //     </div>
  //   );
  // }
  return (
    <div className="vw-100 vh-100">
      {/* navbar */}
      { userType !== null ? <NavbarLogin/> : <></> }
      {/* end of navbar */}
      <div className="container-profile h-100 w-100">
        {userType == 1 ? <MainContentCust /> : <></>}
        {userType == 2 ? <MainContentSeller /> : <></>}
      </div>
    </div>
  );
};

export default Profile;
