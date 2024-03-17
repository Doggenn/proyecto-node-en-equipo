const express = require("express");
const productRouter = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  addProductCover,
  deleteProduct,
} = require("../controllers/product.controller");
const {
  upload,
  uploadToCloudinary,
} = require("../middlewares/file.middleware");
const { isAuth } = require("../middlewares/auth.middleware");


productRouter.post("/", [isAuth ,upload.single("photoImage"), uploadToCloudinary], createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);
productRouter.patch("/:id", [isAuth], updateProduct);
productRouter.delete("/:id", [isAuth] ,deleteProduct);
productRouter.patch("/photo/:id", [isAuth ,upload.single("photoImage"), uploadToCloudinary], addProductCover);

module.exports = productRouter;
