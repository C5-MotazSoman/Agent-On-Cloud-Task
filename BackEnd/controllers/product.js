const productModel = require("../models/productSchema");
// function to creat product
const addProduct = (req, res) => {
  const { title, slug, desc, category, image, countInStock, price } = req.body;
  const newProduct = new productModel({
    title,
    slug,
    desc,
    category,
    image,
    countInStock,
    price,
    userId: req.token.userId,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `product add successfully`,
        result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `server error`,
        err: err,
      });
    });
};

// function to get all product
const getAllProducts = (req, res) => {
  const userId = req.token.userId;
  productModel
    .find({})
    .then((result) => {
      if (result.length) {
        res.status(200).json({
          success: true,
          message: `all product`,
          userId: userId,
          result,
        });
      } else {
        res.status(200).json({ success: false, message: `No product yet` });
      }
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: `server error`,
        error,
      });
    });
};
// function to updateProduct
const updatProductById = (req, res) => {
  const _id = req.params._id;
  userId = req.token.userId;
  // check user id
  productModel
    .findById(_id)
    .then((result) => {
      // console.log(userId);
      // console.log(result.userId);
      // check if there result
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `the product with ${_id} is not found`,
        });
      }
      // check if result.userId===userId
      if (result.userId == userId) {
        productModel
          .findByIdAndUpdate(_id, req.body, { new: true })
          .then((result1) => {
            res.status(202).json({
              success: true,
              message: `product updated`,
              result1,
            });
          })
          .catch((error1) => {
            res
              .status(500)
              .json({
                success: false,
                message: `from findByIdAndUpdate : server error `,
                error1,
              });
          });
      } else {
        res
          .status(403)
          .json({
            success: false,
            message: `you are not the creater: not allowed to update `,
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: `from findById: server error`,
        error,
      });
    });
};
module.exports = { getAllProducts, addProduct, updatProductById };
