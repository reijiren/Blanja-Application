import React from 'react'
// images
import menFormalSuit from "../../../../assets/images/men jacket jeans.png";
import jacketJeans from "../../../../assets/images/men formal suit.png";

const Packed = () => {
  return (
    <>
      {/* head */}
      <div className="table-head row">
        <div className="head-image col-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center">
          <p className="fontBold text-muted h5">Image</p>
        </div>
        <div className="head-desc-item col-6 d-flex align-items-center">
          <p className="fontBold text-muted h5">Item - name</p>
        </div>
        <div className="head-price col-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex justify-content-center">
          <p className="fontBold text-muted h5">Price</p>
        </div>
        <div className="head-price col-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex justify-content-center">
          <p className="fontBold text-muted h5">Status</p>
        </div>
      </div>
      {/* head */}

      <div className="wrapper-item-co row">
        <div className="content-img col-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center pt-1 pb-1">
          <img
            src={menFormalSuit}
            alt="item co"
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "15px",
            }}
          />
        </div>
        <div className="content-desc-item col-6 d-flex flex-column justify-content-center">
          <div className="name-item">
            <p className={`fontBold h5`}>
              Mens formal suit - <span className="color">Black</span>
            </p>
          </div>
          <div className="brand-item">
            <p className={`fontRegular text-muted h6`}>Zalora Cloth</p>
          </div>
        </div>
        <div className="col-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center">
          <p className={`fontBold h5`}>
            <span>$</span> 20.0{" "}
          </p>
        </div>
        <div className="col-2 d-flex align-items-center">
        <div className="status-wrapper d-flex flex-column align-items-center">
            <p className="fontBold h">Packed</p>
            <button
              type="button"
              className="fontBold text-white"
              style={{
                border: "none",
                outline: "none",
                borderRadius: "25px",
                background: "#F01F0E",
              }}
            >
              Cancel Order
            </button>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default Packed