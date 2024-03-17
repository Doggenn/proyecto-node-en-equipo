const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  typeProduct: {
    type: String,
    required: false,
  },
  photoImage: {
    type: String,
    required: false,
  },
  shelf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shelf",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
