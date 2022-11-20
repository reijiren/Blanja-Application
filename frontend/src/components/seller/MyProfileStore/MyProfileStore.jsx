import React from "react";
// images
import johanesMikael from "../../../assets/images/johanes mikael.png";

const MyProfileStore = () => {
  return (
    <div className="w-90 m-3 mt-5">
      <div className="wrapper m-4">
        <div className="title mb-3">
          <p className="fontBold h4">My Profile</p>
        </div>
        <div className="desc mb-3">
          <p className="fontMedium h6 text-muted">
            Manage your profile information
          </p>
        </div>
        <div className="break-line mb-5"></div>

        <div className="form-wrapper mx-5">
          <form>
            <div className="wrapper-form-image row">
              {/* form aside left */}
              <div className="wrapper-side-form-input col-8 col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
                <div className="mb-3 row">
                  <label
                    htmlFor="store_name"
                    className="col-4 col-form-label d-flex "
                  >
                    <p className="fontMedium h6 text-muted">Store Name</p>
                  </label>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control"
                      id="store_name"
                    />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="email"
                    className="col-4 col-form-label d-flex "
                  >
                    <p className="fontMedium h6 text-muted">Email</p>
                  </label>
                  <div className="col-8">
                    <input type="text" className="form-control" id="email" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="phone"
                    className="col-4 col-form-label d-flex "
                  >
                    <p className="fontMedium h6 text-muted">Phone number</p>
                  </label>
                  <div className="col-8">
                    <input type="phone" className="form-control" id="phone" />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="store_description"
                    className="col-4 col-form-label d-flex "
                  >
                    <p className="fontMedium h6 text-muted">
                      Store Description
                    </p>
                  </label>
                  <div className="col-8 d-flex gap-3">
                    <textarea
                      className="form-control w-100"
                      id="store_description"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label
                    htmlFor="-"
                    className="col-4 col-form-label d-flex "
                  ></label>
                  <div className="col-8 d-flex gap-3">
                    <button
                      type="submit"
                      className="button-submit-profile fontMedium bgRedPucat h6 textWhiteBening button-submit-responsive"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
              {/* end of form aside left */}

              {/* form aside right */}
              <div className="wrapper-side-form-image col-4 col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 d-flex flex-column">
                <div className="img-form  d-flex justify-content-center align-items-center mb-3">
                  <img
                    src={johanesMikael}
                    alt="photo-user"
                    style={{
                      width: "100px",
                      heith: "100px",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="desc-form-img mb-3">
                  <label
                    className="fontMedium text-muted text-center"
                    style={{
                      border: "2px solid #9B9B9B",
                      borderRadius: "25px",
                      width: "100%",
                    }}
                    htmlFor="photo"
                  >
                    select Image
                  </label>
                </div>
                <div>
                  <input type="file" name="photo" id="photo" />
                </div>
              </div>
              {/* end of form aside right */}
            </div>
            <div className="mb-3 mt-3 row">
              <div className="col-12 d-flex justify-content-center gap-3">
                <button
                  type="submit"
                  className="button-submit-profile fontMedium bgRedPucat h6 textWhiteBening button-submit-responsive-2"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfileStore;
