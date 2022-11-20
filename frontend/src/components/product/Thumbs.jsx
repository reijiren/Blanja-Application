import React, { Fragment, useState } from "react";
import thumbs1 from "../../assets/images/bajuMuslim1.png";
import style from "../../assets/style/style.module.css";

const Thumbs = () => {
	return (
		<Fragment>
			<div className="container-fluid row">
				<div className={`flex-row d-flex col-12 ${style.margins}`}>
					<div className={`${style.mobiles}`}>
						<img
							src={thumbs1}
							alt=""
							className={`col-md-6 col-10 pe-1 mb-2 ${style.thumbs} ${style.thumbnails}`}
						/>
						<img
							src={thumbs1}
							alt=""
							className={`col-md-6 col-10 pe-2 mb-2 ${style.thumbs} ${style.thumbnails}`}
						/>
						<img
							src={thumbs1}
							alt=""
							className={`col-md-6 col-10 pe-2 mb-2 ${style.thumbs} ${style.thumbnails}`}
						/>
						<img
							src={thumbs1}
							alt=""
							className={`col-md-6 col-10 pe-2 mb-2 ${style.thumbs} ${style.thumbnails}`}
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Thumbs;
