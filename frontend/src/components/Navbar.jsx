import React, { Fragment } from "react";
import logo from "../assets/images/blanja_icon.png";
import filter from "../assets/images/filter.png";
import style from "../assets/style/style.module.css";

const Navbar = () => {
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
						aria-controls="navbarSupportedContent"
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
									class="btn"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal">
									<img src={filter} alt="" />
								</button>
								<div
									class="modal fade"
									id="exampleModal"
									tabindex="-1"
									aria-labelledby="exampleModalLabel"
									aria-hidden="true">
									<div class="modal-dialog">
										<div class="modal-content">
											<div class="modal-header">
												<h1 class="modal-title fs-5" id="exampleModalLabel">
													Modal title
												</h1>
												<button
													type="button"
													class="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"></button>
											</div>
											<div class="modal-body">...</div>
											<div class="modal-footer">
												<button
													type="button"
													class="btn btn-secondary"
													data-bs-dismiss="modal">
													Close
												</button>
												<button type="button" class="btn btn-primary">
													Save changes
												</button>
											</div>
										</div>
									</div>
								</div>
							</form>
						</ul>
						<div className={`row col-md-5 col-12`}>
							<div className="col-md-6 col-12 mb-2">
								<button className="btn btn-danger col-12">a</button>
							</div>
							<div className="col-md-6 col-12">
								<button className="btn btn-danger col-12">a</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</Fragment>
	);
};

export default Navbar;
