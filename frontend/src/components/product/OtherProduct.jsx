import React, { Fragment } from "react";
import style from "../../assets/style/style.module.css";
import thubms1 from "../../assets/images/bajuMuslim1.png";

const OtherProduct = () => {
	return (
		<Fragment>
			<div className="container-fluid row">
				<h1 className="fontBold">You can also like this</h1>
				<p className="text-secondary">You’ve never seen it before!</p>
				<div
					className={`d-flex flex-row col-12 ${style.cardMobiles} flex-md-wrap ${style.margins}`}>
					<div className={`col-md-3 col-7 mb-2 ${style.cardSpacing}`}>
						<div className={`card`}>
							<img
								src={thubms1}
								className={`card-img-top ${style.cardsImage}`}
								alt="..."
							/>
							<div className="card-body">
								<p className={`fontMedium ${style.cardProductTitle}`}>
									Men's formal suit - Black & White
								</p>
								<p
									className={`fontMedium text-danger ${style.cardProductTitle} ${style.ups}`}>
									Rp. 20.000
								</p>
								<p
									className={`fontMedium text-secondary ${style.cardProductShop} ${style.ups}`}>
									Online Shop
								</p>
							</div>
						</div>
					</div>
					<div className={`col-md-3 col-7 mb-2 ${style.cardSpacing}`}>
						<div className={`card`}>
							<img
								src={thubms1}
								className={`card-img-top ${style.cardsImage}`}
								alt="..."
							/>
							<div className="card-body">
								<p className={`fontMedium ${style.cardProductTitle}`}>
									Men's formal suit - Black & White
								</p>
								<p
									className={`fontMedium text-danger ${style.cardProductTitle} ${style.ups}`}>
									Rp. 20.000
								</p>
								<p
									className={`fontMedium text-secondary ${style.cardProductShop} ${style.ups}`}>
									Online Shop
								</p>
							</div>
						</div>
					</div>
					<div className={`col-md-3 col-7 mb-2 ${style.cardSpacing}`}>
						<div className={`card`}>
							<img
								src={thubms1}
								className={`card-img-top ${style.cardsImage}`}
								alt="..."
							/>
							<div className="card-body">
								<p className={`fontMedium ${style.cardProductTitle}`}>
									Men's formal suit - Black & White
								</p>
								<p
									className={`fontMedium text-danger ${style.cardProductTitle} ${style.ups}`}>
									Rp. 20.000
								</p>
								<p
									className={`fontMedium text-secondary ${style.cardProductShop} ${style.ups}`}>
									Online Shop
								</p>
							</div>
						</div>
					</div>
					<div className={`col-md-3 col-7 mb-2 ${style.cardSpacing}`}>
						<div className={`card`}>
							<img
								src={thubms1}
								className={`card-img-top ${style.cardsImage}`}
								alt="..."
							/>
							<div className="card-body">
								<p className={`fontMedium ${style.cardProductTitle}`}>
									Men's formal suit - Black & White
								</p>
								<p
									className={`fontMedium text-danger ${style.cardProductTitle} ${style.ups}`}>
									Rp. 20.000
								</p>
								<p
									className={`fontMedium text-secondary ${style.cardProductShop} ${style.ups}`}>
									Online Shop
								</p>
							</div>
						</div>
					</div>
					<div className={`col-md-3 col-7 mb-2 ${style.cardSpacing}`}>
						<div className={`card`}>
							<img
								src={thubms1}
								className={`card-img-top ${style.cardsImage}`}
								alt="..."
							/>
							<div className="card-body">
								<p className={`fontMedium ${style.cardProductTitle}`}>
									Men's formal suit - Black & White
								</p>
								<p
									className={`fontMedium text-danger ${style.cardProductTitle} ${style.ups}`}>
									Rp. 20.000
								</p>
								<p
									className={`fontMedium text-secondary ${style.cardProductShop} ${style.ups}`}>
									Online Shop
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default OtherProduct;
