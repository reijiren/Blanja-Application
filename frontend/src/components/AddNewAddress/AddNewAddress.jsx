import React from "react";

const AddNewAddress = () => {
  return (
    <div class="modal-dialog" style={{ maxWidth: "80%" }}>
      <div class="modal-content">
        <div class="modal-header" style={{ height: "150px" }}>
          <h5
            class="modal-title w-100 text-center"
            id="exampleModalLabel"
          >
            <p className={`fontBold h2`}>Add new address</p>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div className="form-wrapper mx-5">
            <form>
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class={`form-label fontRegular text-muted`}
                >
                  Save address as (ex: home address, office address){" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Rumah"
                  style={{ height: "50px" }}
                />
              </div>
              <div className="duo-input-row row">
                <div className="wrapper-duo-input col-12 row">
                  <div className="col-6">
                    <div class="mb-3">
                      <label
                        for="name"
                        class={`form-label fontRegular text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        Recipient's name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder=""
                        style={{ height: "50px" }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="mb-3">
                      <label
                        for="phone"
                        class={`form-label fontRegular text-muted text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        Recipient's telephone number
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="phone"
                        placeholder=""
                        style={{ height: "50px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="duo-input-row-sect-2 row">
                <div className="wrapper-duo-input col-12 row">
                  <div className="col-6">
                    <div class="mb-3">
                      <label
                        for="address"
                        class={`form-label fontRegular text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder=""
                        style={{ height: "50px" }}
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div class="mb-3">
                      <label
                        for="postal_code"
                        class={`form-label fontRegular text-muted text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        Postal code
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="postal_code"
                        placeholder=""
                        style={{ height: "50px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="duo-input-row-sect-2 row">
                <div className="wrapper-duo-input col-12 row">
                  <div className="col-6">
                    <div class="mb-3">
                      <label
                        for="address"
                        class={`form-label fontRegular text-muted d-flex align-items-center`}
                        style={{ height: "70px" }}
                      >
                        City or Subdistrict
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="address"
                        placeholder=""
                        style={{ height: "50px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label
                  class={`form-check-label fontRegular text-muted`}
                  for="exampleCheck1"
                >
                  Make it the primary address
                </label>
              </div>
              <div className="button-submit-section">
                <div className="wrapper d-flex flex-row-reverse gap-3">
                  <div className="button-submit">
                    <button
                      type="submit"
                      class="bgRedPucat button-submit-custom fontBold text-white h5"
                    >
                      Save
                    </button>
                  </div>
                  <div className="button-submit">
                    <button
                      type="button"
                      class="button-cancel-custom fontBold text-muted h5"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  );
};

export default AddNewAddress;
