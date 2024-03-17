const mongoose = require("mongoose");

// Definición del esquema del álbum
const aisleSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },shop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
  },
});

const Aisle = mongoose.model("Aisle", aisleSchema);

module.exports = Aisle;
