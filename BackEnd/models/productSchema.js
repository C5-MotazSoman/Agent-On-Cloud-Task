const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    slug: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    category: { type: String, require: true },
    image: { type: String, require: true },
    countInStock: { type: Number, require: true },
    price: { type: Number, require: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    // add date
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
