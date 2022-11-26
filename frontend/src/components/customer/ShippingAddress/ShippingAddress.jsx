import React from "react";
import AddNewAddress from "../../AddNewAddress/AddNewAddress";
import ChangeAddress from "../../ChangeAddress/ChangeAddress";
import { useSelector } from "react-redux";

const ShippingAddress = () => {
  const {address, isLoading, isError} = useSelector((state) => {
    return state.address;
  });

  console.log(address);
  return (
    <>
      {isLoading ? (
        <>Loading...</>
      ) : isError ? (
        <>Error</>
      ) : (
        address.map((item, index) => (
          <div key={index} className="w-90 m-3 mt-5">
            <div className="wrapper m-4">
              <div className="title mb-3">
                <p className="fontBold h4">Choose another address</p>
              </div>
              <div className="desc mb-3">
                <p className="fontMedium h6 text-muted">
                  Manage your shipping address
                </p>
              </div>
              <div className="break-line mb-5"></div>
              <div className="choose-another-address-wrapper">
                <div className="button-add-new-address w-100 mb-5 d-flex justify-content-center align-items-center">
                  {/* bana stand for button add new address */}
                  <button
                    type="button"
                    className={`fontRegular h3 text-muted bana-customize w-80 h-100`}
                    data-bs-toggle="modal"
                    data-bs-target="#addNewAddress"
                  >
                    Add new address
                  </button>
                </div>
                {/* modal add new addres */}
                <div
                  className="modal fade"
                  id="addNewAddress"
                  tabIndex="-1"
                  aria-labelledby="addNewAddressLabel"
                  aria-hidden="true"
                >
                  <AddNewAddress />
                </div>
                {/* end of modal add new addres */}
                <div className="address-content d-flex w-100 justify-content-center align-items-center">
                  <div className="container-content w-80">
                    <div className="wrapper-content m-5">
                      <div className="recipient's-name mb-3">
                        <p className={`fontBold h5`}>{item.name}</p>
                      </div>
                      <div className="recipient-address mb-3">
                        <p className={`fontRegular h5`}>
                          <span className="address">
                            {item.address}
                          </span>{" "}<br />
                          <span className="city-or-subdistric">
                            Kota/kab {item.city}
                          </span>{" "} <br />
                          <span className="postal-code">Kode pos: {item.post_code}</span>{" "}<br />
                          <span className="tokopaedi-note">
                            [Tokopaedi Note: {item.address}] {item.city},
                          </span>{" "}<br />
                          {/* <span className="postal-code">{item.post_code}</span> */}
                        </p>
                      </div>
                      <div className="recipient-change-address mb-3">
                        {/* ca stand for change address */}
                        <button
                          type="button"
                          className={`textRedPucat button-ca fontBold h5`}
                          data-bs-toggle="modal"
                          data-bs-target="#changeAddress"
                        >
                          Change address
                        </button>
                      </div>
                      {/* modal change Address */}
                      <div
                        className="modal fade"
                        id="changeAddress"
                        tabIndex="-1"
                        aria-labelledby="changeAddressLabel"
                        aria-hidden="true"
                      >
                        <ChangeAddress />
                      </div>
                      {/* end of modal change Address */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default ShippingAddress;
