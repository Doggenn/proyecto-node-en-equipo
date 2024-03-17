const mongoose = require("mongoose");

// Definición del esquema de la shop
const shopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  logoImage: {
    type: String,
    required: false,
  },
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
