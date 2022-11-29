import React, { Fragment, useEffect, useState } from "react";
import style from "../../assets/style/style.module.css";
import thubms1 from "../../assets/images/bajuMuslim1.png";
import axios from "axios";
import { useParams } from "react-router-dom";

const OtherProduct = () => {
	const [details, setDetails] = useState({});
	const [category, setCategory] = useState([]);
	const { id_product } = useParams();

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/product/${id_product}`)
			.then((response) => {
				setDetails(response.data.data.rows[0]);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id_product]);

	useEffect(() => {
		const data = {
			product_name: null,
			color: null,
			size: null,
			category: `${details.category}`,
		};

		axios
			.post(`${process.env.REACT_APP_BACKEND_URL}/product/filter`, data)
			.then((response) => {
				setCategory(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [details]);

	return (
		<Fragment>
			<div className="container-fluid row">
				<h1 className="fontBold">You can also like this</h1>
				<p className="text-secondary">You’ve never seen it before!</p>
				<div
					className={`d-flex flex-row col-12 ${style.cardMobiles} flex-md-wrap ${style.margins}`}>
					{category.length == undefined ? (
						<h1>No product found!</h1>
					) : (
						category.map((item, index) => (
							<div
								className={`col-md-3 col-7 mb-2 ${style.cardSpacing}`}
								key={index}>
								<div className={`card`}>
									<img
										src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`}
										className={`card-img-top ${style.cardsImage}`}
										alt="..."
									/>
									<div className="card-body">
										<p className={`fontMedium ${style.cardProductTitle}`}>
											{item.product_name}
										</p>
										<p
											className={`fontMedium text-danger ${style.cardProductTitle} ${style.ups}`}>
											$ {item.price}
										</p>
										<p
											className={`fontMedium text-secondary ${style.cardProductShop} ${style.ups}`}>
											{item.store_desc}
										</p>
									</div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default OtherProduct;
