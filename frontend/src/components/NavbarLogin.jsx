import React, { Fragment, useState } from "react";
import logo from "../assets/images/blanja_icon.png";
import filter from "../assets/images/filter.png";
import notif from "../assets/images/notif.png";
import mail from "../assets/images/mail.png";
import card from "../assets/images/cart.png";
import cristian from "../assets/images/christian.png";
import style from "../assets/style/style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { detailById } from "../redux/action/user";
import { detailByIdSeller } from "../redux/action/user";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [dataLogin, setDataLogin] = useState([]);
  // get data user with redux
  const [dataUser, setDataUser] = useState([]);

  const dispatch = useDispatch();

  const { user, isLoading, isError } = useSelector((state) => {
    return state.user;
  });

  

  return (
    <Fragment>
       <>
        {isLoading ? (
          <div className="middle">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
          <div className="bar bar4"></div>
          <div className="bar bar5"></div>
          <div className="bar bar6"></div>
          <div className="bar bar7"></div>
          <div className="bar bar8"></div>
        </div>
        ) : isError ? (
          <>Error</>
        ) : (
          user.map((item, index) => (
            <nav key={index} className="navbar navbar-expand-lg bg-light row">
              <div className="container-fluid col-md-10 col-11">
                <div className="d-flex col-md-2">
                  <img src={logo} alt="" className="me-2" />
                  <h3 className={`fontBold text-danger my-auto`}>Blanja</h3>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  ariacontrols="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  {/* <ul className="mb-2 mb-lg-0 mt-md-0 mt-2 col-md-8 col-12 navbar-nav "> */}
                  <ul
                    className={`me-auto mb-2 mb-lg-0 mt-md-0 mt-2 col-md-6 col-12`}
                  >
                    <form className={`d-flex`} role="search">
                      <input
                        className={`me-2 form-control col-md-10 ${style.navSearch}`}
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <img src={filter} alt="" />
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </ul>
                  <div
                    className={`row col-md-5 col-12 d-flex flex-row-reverse`}
                  >
                    <div className="col-md-6 col-12 mb-2 ">
                      <img
                        style={{ marginTop: "13px", marginLeft: "5px" }}
                        src={card}
                        alt=""
                      />
                      <Link>
                        <img
                          style={{ marginTop: "13px", marginLeft: "20px" }}
                          src={notif}
                          alt=""
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        />
                      </Link>
                      <img
                        style={{ marginTop: "13px", marginLeft: "20px" }}
                        src={mail}
                        alt=""
                      />
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "30px",
                          height: "30px",
                          marginTop: "13px",
                          marginLeft: "20px",
                        }}
                        src={`${process.env.REACT_APP_BACKEND_URL}/${item.image}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          ))
        )}
      </>
    </Fragment>
  );

  // useEffect(() => {
  //   setDataUser(user.data.data.rows);
  // }, []);
};

export default Navbar;
