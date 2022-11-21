const fs = require('fs');
const productModel = require('../model/product.model');
const userModel = require ('../model/user.model')

module.exports = {
    removePhoto: async (req, res, next) => {
		const id = req.params.id;

		const data = await productModel.selectDetail(id);
		if(data) {
			if (data.rows[0].photo) {
				const img = data.rows[0].photo;
				if (img !== "abc.png") {
					fs.unlink(`./public/${img}`, (err) => {
						if (err) {
							res.json({
								message: "delete failed",
								error: err,
							});
							console.log(err)
						}
					});
				}
			} else {
				res.json("There is no profile picture");
			}
			next();
		}else{
			res.json("User ID is not found");
		}
    },

	removePhotoUser: async (req, res, next) => {
		const id = req.params.id;

		const data = await userModel.selectDetail(id);
		if(data) {
			if (data.rows[0].image) {
				const img = data.rows[0].image;
				if (img !== "default.png") {
					fs.unlink(`./public/${img}`, (err) => {
						if (err) {
							console.log(err)
						}
					});
				}

				next();
			} else {
				res.json("There is no profile picture");
			}
		}else{
			res.json("User ID is not found");
		}
    },
}