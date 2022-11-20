import React, { Fragment } from "react";
import style from "../../assets/style/style.module.css";
import star from "../../assets/images/Star.png";
import bar from "../../assets/images/bar.png";

const ProductReview = () => {
	return (
		<Fragment>
			<div className={`container-fluid row ${style.borderBottom}`}>
				<div className="col-12">
					<h3 className="fontBold my-4">Informasi Produk</h3>
					<div>
						<h5 className="fontMedium">Condition</h5>
						<p className={`fontMedium text-danger ${style.ups}`}>New</p>
					</div>
					<div>
						<h5 className="fontMedium">Description</h5>
						<p className="text-secondary">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
							odit sapiente molestias. Tempore doloribus voluptates obcaecati
							dolorem nesciunt quo. Repellat eos voluptatibus minima placeat,
							consectetur ad reprehenderit culpa nihil cumque est deleniti
							totam, nostrum natus? Odio nam, totam dolor tempora, alias cumque
							tempore autem nisi quibusdam, libero cum maiores! Tenetur
							molestias similique rem qui officiis non fuga a aliquam
							voluptatum. Fugiat dolores sunt est ipsa quisquam quasi at quia ut
							quaerat, sit numquam exercitationem velit accusantium explicabo
							commodi, vitae ipsam ex corrupti maiores sapiente veritatis! Rerum
							nisi omnis odit accusamus commodi ipsum possimus similique
							temporibus? Dolorum inventore facilis impedit.
						</p>
					</div>
					<div className="row">
						<h3 className="fontBold my-4">Review</h3>
						<div className="col-md-6 col-12 row">
							<div className="col-md-5 col-6">
								<h1 className={`fontMedium d-inline ${style.ratings}`}>5.0</h1>
								<p className="text-secondary d-inline">/ 5</p>
								<div className="d-flex flex-row">
									<img src={star} alt="" className="me-1" />
									<img src={star} alt="" className="me-1" />
									<img src={star} alt="" className="me-1" />
									<img src={star} alt="" className="me-1" />
									<img src={star} alt="" className="me-1" />
								</div>
							</div>
							<div className="col-6">
								<div className={`d-flex flex-row`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
								<div className={`d-flex flex-row ${style.ups}`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
								<div className={`d-flex flex-row ${style.ups}`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
								<div className={`d-flex flex-row ${style.ups}`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
								<div className={`d-flex flex-row ${style.ups}`}>
									<div className="me-2">
										<img src={star} alt="" className="me-1 my-auto" />
									</div>
									<p className="text-secondary me-2">5</p>
									<div className="me-2">
										<img src={bar} alt="" className="my-auto" />
									</div>
									<p className="text-secondary">4</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default ProductReview;
