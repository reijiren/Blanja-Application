import React, { Fragment, useState } from "react";
import star from "../../assets/images/Star.png";
import style from "../../assets/style/style.module.css";

const ProductOptions = () => {
	const [active, setActive] = useState(1);

	return (
		<Fragment>
			<div className="container-fluid row">
				<div className="col-12">
					<h4 className="fontBold">Baju muslim pria</h4>
					<p className={`text-secondary ${style.ups}`}>Zalora Cloth</p>
					<div className="d-flex">
						<div className="me-2">
							<img src={star} alt="tydac ramah" />
						</div>
						<p className={`text-secondary my-auto ${style.review}`}>
							Tydac ramah bintang 1
						</p>
					</div>
					<div className="my-3">
						<p className="text-secondary">Price</p>
						<h4 className={`fontBold ${style.ups}`}>Rp. 20.000</h4>
					</div>
					<div className="my-3">
						<p className="fontBold">Color</p>
						<div className="d-flex flex-row">
							<div onClick={() => setActive(1)}>
								{active === 1 ? (
									<div className={`me-2 ${style.colorActive}`}>
										<div className={`mx-auto ${style.blackActive}`}></div>
									</div>
								) : (
									<div className={`me-2 ${style.black}`}></div>
								)}
							</div>
							<div onClick={() => setActive(2)}>
								{active === 2 ? (
									<div className={`me-2 ${style.colorActive}`}>
										<div className={`mx-auto ${style.redActive}`}></div>
									</div>
								) : (
									<div className={`me-2 ${style.red}`}></div>
								)}
							</div>
							<div onClick={() => setActive(3)}>
								{active === 3 ? (
									<div className={`me-2 ${style.colorActive}`}>
										<div className={`mx-auto ${style.blueActive}`}></div>
									</div>
								) : (
									<div className={`me-2 ${style.blue}`}></div>
								)}
							</div>
							<div onClick={() => setActive(4)}>
								{active === 4 ? (
									<div className={`me-2 ${style.colorActive}`}>
										<div className={`mx-auto ${style.greenActive}`}></div>
									</div>
								) : (
									<div className={`me-2 ${style.green}`}></div>
								)}
							</div>
						</div>
					</div>
					<div className="d-flex flex-row">
						<div className="col-6 col-md-4">
							<p className="fontBold">Size</p>
							<div className="d-flex flex-row">
								<button
									className={`fontBold btn btn-secondary ${style.button} ${style.buttonSize}`}>
									-
								</button>
								<p className="fontBold my-auto mx-3">28</p>
								<button
									className={`fontBold btn btn-light ${style.button} ${style.buttonSize}`}>
									+
								</button>
							</div>
						</div>
						<div className="col-6 col-md-4">
							<p className="fontBold">Jumlah</p>
							<div className="d-flex flex-row">
								<button
									className={`fontBold btn btn-secondary ${style.button} ${style.buttonSize}`}>
									-
								</button>
								<p className="fontBold my-auto mx-3">1</p>
								<button
									className={`fontBold btn btn-light ${style.button} ${style.buttonSize}`}>
									+
								</button>
							</div>
						</div>
					</div>
					<div className="col-md-7 col-12">
						<div className="flex-row d-flex my-3">
							<button
								className={`col-6 me-2 btn btn-light border fontMedium ${style.buttonProductDetail}`}>
								Chat
							</button>
							<button
								className={`col-6 me-2 btn btn-light border fontMedium ${style.buttonProductDetail}`}>
								Add bag
							</button>
						</div>
						<button
							className={`btn btn-danger col-12 ${style.buttonProductDetail}`}>
							Buy now
						</button>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductOptions;
