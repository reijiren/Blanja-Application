import React, { useState } from "react";
import "./style.css";
// import image
import johanesMikael from "../../../assets/images/johanes mikael.png";
// component consumer
import MainContentCust from "../../../components/customer/MainContent/MainContentCust";
// component seller
import MainContentSeller from "../../../components/seller/MainContent/MainContentSeller";

const Profile = () => {
  /**
   * dummy level
   * 1 = customer
   * 2 = seller
   */
  const [userLevel, setUserLevel] = useState("1");
  return (
    <div className="vw-100 vh-100">
      {/* navbar */}
      <div
        className="navbar bg-primary d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <div className="title">
          <p className={`fontBold h1`}>navbar</p>
        </div>
      </div>
      {/* end of navbar */}
      <div className="container-profile h-100 w-100">
        {userLevel == 1 ? <MainContentCust/> : <></> }
        {userLevel == 2 ? <MainContentSeller/> : <></>}
      </div>
    </div>
  );
};

export default Profile;