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
module.exports = { getAllProducts, addProduct };
