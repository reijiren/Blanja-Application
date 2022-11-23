import React, { useState, useEffect } from "react";

import styles from "../landing/style.module.css";
import benjamin from "../../assets/images/benjamin-voros-TnNo84AJJ5A-unsplash 1.jpg";
import benjanin from "../../assets/images/ian-dooley-10ca-K3e6Ko-unsplash 1.jpg";
import left from "../../assets/images/left.jpg";
import right from "../../assets/images/right.png";
import { Link, useNavigate } from "react-router-dom";
import bg1 from "../../assets/images/wew.png";
import bg2 from "../../assets/images/hiclipart 34.png";
import bg3 from "../../assets/images/hiclipart 21.png";
import bg4 from "../../assets/images/hiclipart 22.png";
import bg5 from "../../assets/images/hiclipart 26.png";

import axios from "axios";
import Navs from "../../components/Navs";

const Landing = () => {
	const navigate = useNavigate();
	const [getProduct, setProduct] = useState([]);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BACKEND_URL}/product`)
			.then((res) => {
				setProduct(res.data.data.rows);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<Navs />
			<section>
				<div className="container">
					<div className="d-flex justify-content-center mt-5">
						<img
							style={{ marginRight: "15px" }}
							className={styles.benjamin}
							src={left}
							alt=""
						/>
						<img className={styles.benjamin} src={benjamin} alt="" />
						<img
							style={{ marginLeft: "15px" }}
							className={styles.benjamin}
							src={benjanin}
							alt=""
						/>
						<img
							style={{ marginLeft: "15px" }}
							className={styles.benjamin}
							src={right}
							alt=""
						/>
					</div>

					<div className="row col-md-12">
						<div className="ms-5 mt-4">
							<h2>Category</h2>
							<p>What are you currently looking for</p>
						</div>
					</div>

					<div className="d-flex ms-4 ">
						<div className={styles.bg}>
							<img className="justify-content-center ms-5" src={bg1} alt="" />
							<h2
								style={{ color: "white", fontWeight: "700" }}
								className="text-center ">
								T-Shirt
							</h2>
						</div>
						<div className={styles.bg1}>
							<img className="justify-content-center ms-3" src={bg3} alt="" />
							<h2
								style={{ color: "white", fontWeight: "700" }}
								className="text-center ">
								Short
							</h2>
						</div>
						<div className={styles.bg2}>
							<img className="justify-content-center ms-4" src={bg4} alt="" />
							<h2
								style={{ color: "white", fontWeight: "700" }}
								className="text-center ">
								Jacket
							</h2>
						</div>
						<div className={styles.bg3}>
							<img
								className="justify-content-center ms-5 mt-1"
								src={bg5}
								alt=""
							/>
							<h2
								style={{ color: "white", fontWeight: "700" }}
								className="text-center ">
								Pans
							</h2>
						</div>
						<div className={styles.bg4}>
							<img className="justify-content-center ms-3" src={bg2} alt="" />
							<h2
								style={{ color: "white", fontWeight: "700" }}
								className="text-center ">
								Shoes
							</h2>
						</div>
					</div>
					<div className="row col-md-12">
						<div className="ms-5 mt-4">
							<h2>New</h2>
							<p>You’ve never seen it before!</p>
						</div>
					</div>
					<div className="col-md-12">
						{getProduct && getProduct.length === 0 ? (
							<div>product is empty</div>
						) : (
							getProduct.map((item, index) => (
								<Link
									to={`/product/${item.id_product}`}
									className={`${styles.links}`}>
									<div
										key={index}
										className="card"
										style={{ width: "18rem", top: "20px" }}>
										<img
											src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`}
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h4 className="card-text">{item.product_name}</h4>
											<h4 className="card-text text-danger">
												$ {item.price}.0
											</h4>
											<p className={styles.p}>Zalora Cloth</p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-1"
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-2  "
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-2"
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-2"
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-2"
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<span className={`${styles.p} ms-2`}>{item.stock}</span>
										</div>
									</div>
								</Link>
							))
						)}
					</div>

					<div className="row col-md-12">
						<div className="ms-5 mt-5">
							<h2>Popular</h2>
							<p>Find clothes that are trending recently</p>
						</div>
					</div>

					<div className="col-md-12">
						{getProduct && getProduct.length === 0 ? (
							<div>product is empty</div>
						) : (
							getProduct.map((item, index) => (
								<Link
									to={`/product/${item.id_product}`}
									className={`${styles.links}`}>
									<div
										key={index}
										className="card"
										style={{ width: "18rem", top: "20px" }}>
										<img
											src={`${process.env.REACT_APP_BACKEND_URL}/${item.photo}`}
											className="card-img-top"
											alt="..."
										/>
										<div className="card-body">
											<h4 className="card-text">
												{item.product_name} - {item.color}
											</h4>
											<h4 className="card-text text-danger">
												$ {item.price}.0
											</h4>
											<p className={styles.p}>{item.name}</p>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-1"
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-2  "
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-2"
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-2"
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												className="bi bi-star text-warning ms-2"
												viewBox="0 0 16 16">
												<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
											</svg>
											<span className={`${styles.p} ms-2`}>(10)</span>
										</div>
									</div>
								</Link>
							))
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Landing;
