import React, { Fragment } from "react";
import ProductOptions from "../../components/product/ProductOption";
import Thumbs from "../../components/product/Thumbs";
import ProductReview from "../../components/product/ProductReview";
import OtherProduct from "../../components/product/OtherProduct";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";

const Product = () => {
	return (
		<>
			<Helmet>
				<title>Product</title>
			</Helmet>
			<Fragment>
				<>
					<Navbar />
				</>
				<div className="container-fluid row">
					<div className="col-md-10 col-12 my-4 position-absolute start-50 translate-middle-x">
						<div className="row">
							<div className="col-12 col-md-6">
								<Thumbs />
							</div>
							<div className="col-12 col-md-6">
								<ProductOptions />
							</div>
						</div>
						<div className="my-3">
							<ProductReview />
						</div>
						<div className="my-3">
							<OtherProduct />
						</div>
					</div>
				</div>
			</Fragment>
		</>
	);
};

export default Product;
