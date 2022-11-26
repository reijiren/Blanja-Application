
import React,{useState, useEffect} from 'react';
import './style.css';
import { Link} from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

// image
import menFormalSuit from "../../../assets/images/men jacket jeans.png";

// end of import image
import ChoseAnotherAddress from "../../../components/ChooseAnotherAddress/ChoseAnotherAddress";
import AddNewAddress from "../../../components/AddNewAddress/AddNewAddress";
import SelectPayment from "../../../components/SelectPayment/SelectPayment";
import ChangeAddress from "../../../components/ChangeAddress/ChangeAddress";
import Navs from "../../../components/Navs";

const CheckOut = () => {
  const [data2, setData2] = useState([]);
  let total = 0;
  const id = useSelector((state) => state.user.user.id_user)
  
  useEffect(() => {
    if(id){
      axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/order/user/${id}`)
      .then((response) => {
        setData2(response.data.data);
        localStorage.setItem('data5', JSON.stringify(response.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);

  const add = (num) => {
    total += num;
  }

  return (
    <div className={`vw-100 vh-100`}>
			<Navs />
      <div className={`content-wrapper row`}>
        <div className="content-aside-left col-8 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 col-xxl-8 d-flex justify-content-center align-items-center ">
          <div className="wrapper d-flex flex-column w-75">
            <div className="title mt-5 mb-3">
              <p className={`fontBold h1`}>Checkout</p>
            </div>
            <div className="title-desc mb-3">
              <p className={`fontRegular fw-bold h5`}>Shipping Address</p>
            </div>
            <div className={`address-desc mb-3`}>
              <div className="wrapper m-4">
                <div className="name-user ">
                  <p className={`fontRegular fw-bold h5`}>Andreas Jane</p>
                </div>
                <div className="address-user">
                  <p className={`fontRegular h5`}>
                    <span className="address">
                      Perumahan Sapphire Mediterania, wradadi. Kec. Sokaraja
                    </span>{" "}
                    <span className="city-or-subdistric">
                      Kabupaten Banyumas, Jawa Tengah.
                    </span>{" "}
                    <span className="postal-code">53181</span>{" "}
                    <span className="tokopaedi-note">
                      [Tokopaedi Note: blok c 16] Sokaraja. Kab. Banyumas,
                    </span>{" "}
                    <span className="postal-code">53181</span>
                  </p>
                </div>
                <div className="button-change-address">
                  <button
                    type="button"
                    className="btn button-custom-address text-muted"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Choose another address
                  </button>
                </div>
                {/*  Modal */}
                <div
                  className="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <ChoseAnotherAddress />
                </div>
                {/*  end of Modal */}
                {/* modal 2 */}
                <div
                  className="modal fade"
                  id="addNewAddress"
                  tabIndex="-1"
                  aria-labelledby="addNewAddressLabel"
                  aria-hidden="true"
                >
                  <AddNewAddress />
                </div>
                {/* end of modal 2 */}

                {/* modal 3 */}
                <div
                  className="modal fade"
                  id="changeAddress"
                  tabIndex="-1"
                  aria-labelledby="changeAddressLabel"
                  aria-hidden="true"
                >
                  <ChangeAddress />
                </div>
                {/* end of modal 3 */}
              </div>
            </div>
            {/* item check out user session */}
            {data2 &&
              data2.length === 0 ? (
                <div>Orders not found</div>
              ) :
              data2.map((item, index) => (
                <div key={index}>
                  {/* dari sini */}
                  <div className="item-co-user mb-3">
                    <div className="wrapper m-4">
                      <div className="wrapper-item-co row">
                        <div className="content-img col-2 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center pt-1 pb-1">
                          <img
                            src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`}
                            alt="item co"
                            style={{
                              height: "100px",
                              width: "100px",
                              borderRadius: "15px",
                            }}
                          />
                        </div>
                        <div className="content-desc-item col-8 d-flex flex-column justify-content-center">
                          <div className="name-item">
                            <p className={`fontBold h5`}>
                              {item.product_name} -{" "}
                              <span className="color">{item.item_color}</span>
                            </p>
                          </div>
                          <div className="brand-item">
                            <p className={`fontRegular text-muted h6`}>
                            {item.seller}
                            </p>
                          </div>
                        </div>
                        <div className="col-2 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-center">
                          <p className={`fontBold h5`}>
                            <span>$ </span>{item.quantity*item.price}{" "}{add(item.quantity * item.price)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* sampe sini */}
                </div>
              ))}
            {/* end of item check out user session */}
          </div>
        </div>
        <div className="content-aside-right col-4 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 col-xxl-4">
          <div className="wrapper m-5">
            <div
              className="space-empty mt-5 mb-5"
              style={{ height: "30px" }}
            ></div>
            <div className="summary-wrapper">
              <div className="summary-wrapper-inside m-3">
                <div className="title mb-5">
                  <p className={`fontBold h5`}>Shooping summary</p>
                </div>
                <div className="order row mb-3">
                  <div className="col-8">
                    <p className={`fontRegular text-muted h5`}>Order</p>
                  </div>
                  <div className="col-4 d-flex justify-content-center align-items-center">
                    <p className={`fontBold h5`}>
                      <span>$ </span>{total}.0
                    </p>
                  </div>
                </div>
                <div className="delivery row mb-3">
                  <div className="col-8">
                    <p className={`fontRegular text-muted h5`}>Delivery</p>
                  </div>
                  <div className="col-4 d-flex justify-content-center align-items-center">
                    <p className={`fontBold h5`}>
                      <span>$ </span>{total * 5/100}
                    </p>
                  </div>
                </div>
                <div className="break-line mb-3"></div>
                <div className="shopping-sum mb-3 row">
                  <div className="col-8">
                    <p className={`fontBold h5`}>Shopping summary</p>
                  </div>
                  <div className="col-4 d-flex justify-content-center align-items-center">
                    <p className={`fontBold textRedPucat h5`}>
                      <span>$ </span>{total + (total * 5/100)}
                    </p>
                  </div>
                </div>
                <div className="select-payment-button">
                  <button
                    type="button"
                    className={`w-100 bgRedPucat button-custom-payment d-flex justify-content-center align-items-center fontBold h5`}
                    style={{ height: "50px" }}
                    data-bs-toggle="modal"
                    data-bs-target="#selectPayment"
                    disabled={total === 0 ? true : false}
                  >
                    Select payment
                  </button>
                </div>
                {/* modal 4 */}
                <div
                  className="modal fade"
                  id="selectPayment"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabIndex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <SelectPayment />
                </div>
                {/* end of modal 4 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
