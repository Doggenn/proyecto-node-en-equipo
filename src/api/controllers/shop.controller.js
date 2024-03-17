const Shop = require("../models/shop.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createShop = async (req, res, next) => {
  try {
    const shop = await Shop.create(req.body);
    const { title, artist, releaseYear, genre } = req.body;
    const coverImage = req.file ? req.file.path : '';
    /*const shop = await Shop.create({
      name,
      location,
      city,
      schelude,
      type,
      contact,
      logo
    });*/

    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: shop,
    });
  } catch (error) {
    next(error);
  }
};

const getAllShops = async (req, res, next) => {
  try {
    const shops = await Shop.find();
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: shops,
    });
  } catch (error) {
    next(error);
  }
};

const getShopById = async (req, res, next) => {
  try {
    const shop = await Shop.findById(req.params.id);
    if (shop) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: shop,
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

const updateShop = async (req, res, next) => {
  try {
    const shop = await Shop.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (shop) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: shop,
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

const addShopCover = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: 400,
        message: "No file in the request.",
      });
    }
    const shop = await Shop.findByIdAndUpdate(
      req.params.id,
      { coverImage: req.file.path },
      { new: true }
    );

    if (shop) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: shop,
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

const deleteShop = async (req, res, next) => {
  try {
    const shop = await Shop.findByIdAndDelete(req.params.id);
    if (shop) {
      res.status(204).json({
        status: 204,
        message: HTTPSTATUSCODE[204],
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

module.exports = {
  createShop,
  getAllShops,
  getShopById,
  updateShop,
  addShopCover,
  deleteShop,
};
