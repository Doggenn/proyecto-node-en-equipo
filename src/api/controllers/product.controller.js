const Product = require("../models/product.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find().populate('shelf');
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('shelf');
    if (product) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: product,
      });
    } else {
      res.status(404).json({ status: 404, message: "Product not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (product) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: product,
      });
    } else {
      res.status(404).json({ status: 404, message: "Product not found" });
    }
  } catch (error) {
    next(error);
  }
};

const addProductCover = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: "No file in the request.",
      });
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { coverImage: req.file.path },
      { new: true }
    );

    if (product) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: product,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: HTTPSTATUSCODE[404],
      });
    }
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (product) {
      res.status(204).json({ status: 204, message: "Product deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Product not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  addProductCover,
  deleteProduct,
};
