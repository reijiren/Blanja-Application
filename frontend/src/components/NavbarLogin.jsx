import React, { Fragment, useState } from "react";
import logo from "../assets/images/blanja_icon.png";
import filter from "../assets/images/filter.png";
import notif from "../assets/images/notif.png";
import mail from "../assets/images/mail.png";
import card from "../assets/images/cart.png";
import cristian from "../assets/images/christian.png";
import style from "../assets/style/style.module.css";
import { Link } from "react-router-dom";

const NavbarLogin = () => {
	const [active, setActive] = useState("black");

	return (
		<Fragment>
			<nav className="navbar navbar-expand-lg bg-light row">
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
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						{/* <ul className="mb-2 mb-lg-0 mt-md-0 mt-2 col-md-8 col-12 navbar-nav "> */}
						<ul className={`me-auto mb-2 mb-lg-0 mt-md-0 mt-2 col-md-6 col-12`}>
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
									data-bs-target="#exampleModal">
									<img src={filter} alt="" />
								</button>
								<div
									className="modal fade"
									id="exampleModal"
									tabIndex="-1"
									aria-labelledby="exampleModalLabel"
									aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h1 className="modal-title fs-5" id="exampleModalLabel">
													Filter
												</h1>
												<button
													type="button"
													className="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"></button>
											</div>
											<div className="modal-body">
												<div className="my-3">
													<p className="fontBold">Color</p>
													<div className="d-flex flex-row">
														<div
															onClick={() => {
																setActive("black");
															}}>
															{active === "black" ? (
																<div className={`me-2 ${style.colorActive}`}>
																	<div
																		className={`mx-auto ${style.blackActive}`}></div>
																</div>
															) : (
																<div className={`me-2 ${style.black}`}></div>
															)}
														</div>
														<div onClick={() => setActive("red")}>
															{active === "red" ? (
																<div className={`me-2 ${style.colorActive}`}>
																	<div
																		className={`mx-auto ${style.redActive}`}></div>
																</div>
															) : (
																<div className={`me-2 ${style.red}`}></div>
															)}
														</div>
														<div onClick={() => setActive("blue")}>
															{active === "blue" ? (
																<div className={`me-2 ${style.colorActive}`}>
																	<div
																		className={`mx-auto ${style.blueActive}`}></div>
																</div>
															) : (
																<div className={`me-2 ${style.blue}`}></div>
															)}
														</div>
														<div onClick={() => setActive("green")}>
															{active === "green" ? (
																<div className={`me-2 ${style.colorActive}`}>
																	<div
																		className={`mx-auto ${style.greenActive}`}></div>
																</div>
															) : (
																<div className={`me-2 ${style.green}`}></div>
															)}
														</div>
													</div>
												</div>
												<div className="my-3"></div>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-bs-dismiss="modal">
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
						<div className={`row col-md-5 col-12 d-flex flex-row-reverse`}>
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
									src={cristian}
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

export default NavbarLogin;
