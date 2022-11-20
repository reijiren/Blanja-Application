import React from "react";
// style
import "./style.css";
// images
import sampleImage from "../../../assets/images/sample-image.png";
import dummyTools from "../../../assets/images/dummy-tools.png";

const SellingProduct = () => {
  return (
    <div className="w-90 m-3 mt-5">
      <div className="wrapper m-4">
        <form className="selling-product d-flex flex-column gap-5">
          <div className="wrapper-invent">
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
            <div className="title m-3">
              <p className="fontBold h4">Inventory</p>
            </div>
            <div className="break-line mb-3"></div>
            <div className="label ms-3 mb-3">
              <label htmlFor="name_product" className="text-muted">
                Name of goods
              </label>
            </div>
            <div className="input-invent ms-3 ">
              <input
                type="text"
                id="inputPassword5"
                className="form-control w-50"
                style={{
                  height: "50px",
                  width: "100%",
                }}
              />
            </div>
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
          </div>
          <div className="wrapper-item-details">
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
            <div className="title m-3">
              <p className="fontBold h4">Item details</p>
            </div>
            <div className="break-line mb-3"></div>
            <div className="label ms-3 mb-3">
              <label htmlFor="price" className="text-muted">
                Unit price
              </label>
            </div>
            <div className="input-price ms-3 mb-3">
              <input
                type="text"
                id="price"
                className="form-control w-50"
                style={{
                  height: "50px",
                  width: "100%",
                }}
              />
            </div>

            <div className="label ms-3 mb-3">
              <label htmlFor="stock" className="text-muted">
                Stock
              </label>
            </div>
            <div className="input-condition ms-3 mb-3">
              <input
                type="text"
                id="stock"
                className="form-control w-50"
                style={{
                  height: "50px",
                  width: "100%",
                }}
                placeholder="ex : 5"
              />
            </div>

            <div className="label ms-3 mb-3">
              <label htmlFor="kondisi" className="text-muted">
                Kondisi
              </label>
            </div>
            <div className="radio-menu d-flex flex-row ms-3 gap-5">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="condition"
                  id="flexRadioDefault1"
                  value="baru"
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Baru
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="condition"
                  id="flexRadioDefault2"
                  value="bekas"
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Bekas
                </label>
              </div>
            </div>

            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
          </div>
          <div className="wrapper-photo-of-goods">
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
            <div className="title m-3">
              <p className="fontBold h4">Photo of goods</p>
            </div>
            <div className="break-line mb-3"></div>
            <div className="input-photo row bg-warning mx-3">
              <div className="col-4 bg-light d-flex flex-column">
                <div className="img-review-1 d-flex justify-content-center mb-3">
                  <img
                    src={sampleImage}
                    alt="sample image"
                    style={{ height: "200px", width: "200px" }}
                  />
                </div>
                <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div>
                <div className="text-center">
                  <p className="text-muted">Foto utama</p>
                </div>
              </div>
              <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
                <div className="img-review-1 d-flex justify-content-center align-items-center mb-3">
                  <img
                    src={sampleImage}
                    alt="sample image"
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                {/* <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div> */}
              </div>
              <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
                <div className="img-review-1 d-flex justify-content-center align-items-center mb-3">
                  <img
                    src={sampleImage}
                    alt="sample image"
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                {/* <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div> */}
              </div>
              <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
                <div className="img-review-1 d-flex justify-content-center align-items-center mb-3">
                  <img
                    src={sampleImage}
                    alt="sample image"
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                {/* <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div> */}
              </div>
              <div className="col-2 bg-light d-flex justify-content-center align-items-center flex-column">
                <div className="img-review-1 d-flex justify-content-center align-items-center mb-3">
                  <img
                    src={sampleImage}
                    alt="sample image"
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                {/* <div className="input-photo-1 mx-3 mb-3">
                  <input type="file" name="photo_product_1" value="" />
                </div> */}
              </div>
            </div>
            <div className="break-line mb-3"></div>
            <div className="d-flex justify-content-center">
              <p
                className="text-muted text-center"
                style={{
                  borderRadius: "15px",
                  border: "2px solid #D4D4D4",
                  width: "300px",
                  height: "30px",
                }}
              >
                Upload foto
              </p>
            </div>
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
          </div>
          <div className="wrapper-description">
            <div className="space-empty mb-3" style={{ height: "30px" }}></div>
            <div className="title m-3">
              <p className="fontBold h4">Description</p>
            </div>
            <div className="break-line mb-3"></div>
            <div className="input-description mx-3">
              <div
                className="dummy-img w-100 "
                style={{ border: "2px solid #D4D4D4 " }}
              >
                <img src={dummyTools} alt="asdasda" className="ms-3" />
              </div>
              <div
                className="input-text-area w-100"
                style={{ border: "2px solid #D4D4D4 " }}
              >
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row-reverse">
            <button
              type="submit"
              className="bgRedPucat fontBold text-white"
              style={{ height: "50px", width: "150px", outline:"none",border:"none",borderRadius:"25px" }}
            >
              Jual
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SellingProduct;
