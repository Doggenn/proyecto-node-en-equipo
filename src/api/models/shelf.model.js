const mongoose = require("mongoose");

const shelfSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
  shelf: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Aisle",
  },
});

const Shelf = mongoose.model("Shelf", shelfSchema);

module.exports = Shelf;
