import React, { useState } from "react";
import "./style.css"
// components
import MyProfile from "../../../components/customer/MyProfile/MyProfile";
import ShippingAddress from "../ShippingAddress/ShippingAddress";
import MyOrder from "../MyOrder/MyOrder";
// images
import johanesMikael from "../../../assets/images/johanes mikael.png";

const MainContentCust = () => {
  const [showMyProfile, setShowMyProfile] = useState(false);
  const [showShippingAddress, setShowShippingAddress] = useState(false)
  const [showMyOrder, setShowMyOrder] = useState(false)
  
  const editProfileShow = () => {
    setShowMyProfile(true);
    setShowShippingAddress(false);
    setShowMyOrder(false)
  };

  const editShippingShow = () => {
    setShowMyProfile(false);
    setShowShippingAddress(true);
    setShowMyOrder(false)
  };

  const editMyOrderShow = () => {
    setShowMyProfile(false);
    setShowShippingAddress(false);
    setShowMyOrder(true)
  }


  

  return (
    <div className="wrapper-content row">
      <div className="aside-nav col-4 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
        <div className="wrapperr-content-aside-nav d-flex flex-column align-items-center">
          <div className="space-empty" style={{ height: "50px" }}></div>
          <div className="d-flex flex-row">
            <div className="image-content">
              <img
                src={johanesMikael}
                alt="avatar_user"
                style={{
                  borderRadius: "50%",
                  width: "75px",
                  height: "75px",
                }}
              />
            </div>
            <div className="name-info-edit d-flex flex-column justify-content-center align-items-center ms-3">
              <div className="name">
                <p className="fontBold h5">Johanes Mikael</p>
              </div>
              <div className="edit-profile-button">
                <button
                  className="btn d-flex flex-row gap-2"
                  type="button"
                  onClick={editProfileShow}
                >
                  <div className="icon fontBold text-muted h6">
                    <i className="bi bi-pencil-fill"></i>
                  </div>
                  <div>
                    <p className="fontBold text-muted h6">Ubah profile</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="space-empty" style={{ height: "50px" }}></div>
          <div className="navigation-side mb-3 w-100 d-flex flex-column align-items-center gap-5 justify-content-center ">
            <div className="wrapper w-70 row ">
              <div className="col-12 row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <div
                    className="icon-my-account bgBiruMyAccount d-flex justify-content-center align-items-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="textWhiteBening bi bi-person"></i>
                  </div>
                </div>
                <div className="col-8 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn"
                    style={
                      showMyProfile
                        ? {
                            background: "none",
                            borderRadius: "0%",
                            fontWeight: "bolder",
                          }
                        : {}
                    }
                    onClick={editProfileShow}
                  >
                    <div className="my-account-button fontRegular">
                      My Account
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="wrapper w-70 row ">
              <div className="col-12 row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <div
                    className="icon-my-account bgOrenShippingAddress d-flex justify-content-center align-items-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="textWhiteBening bi bi-geo-alt"></i>
                  </div>
                </div>
                <div className="col-8 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn"
                    style={
                      showShippingAddress
                        ? {
                            background: "none",
                            borderRadius: "0%",
                            fontWeight: "bolder",
                          }
                        : {}
                    }
                    onClick={editShippingShow}
                  >
                    <div className="my-account-button fontRegular">
                      Shipping Address
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="wrapper w-70 row ">
              <div className="col-12 row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <div
                    className="icon-my-account bgMerahMyOrder d-flex justify-content-center align-items-center"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="textWhiteBening bi bi-bag"></i>
                  </div>
                </div>
                <div className="col-8 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn"
                    style={
                      showMyOrder
                        ? {
                            background: "none",
                            borderRadius: "0%",
                            fontWeight: "bolder",
                          }
                        : {}
                    }
                    onClick={editMyOrderShow}
                  >
                    <div className="my-account-button fontRegular">
                      My order
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aside-content col-8 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 d-flex justify-content-center">
        {showMyProfile ? <MyProfile /> : <></>}
        {showShippingAddress ? <ShippingAddress /> : <></>}
        {showMyOrder ? <MyOrder /> : <></>}
      </div>
    </div>
  );
};

export default MainContentCust;