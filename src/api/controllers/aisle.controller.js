const Aisle = require("../models/aisle.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createAisle = async (req, res, next) => {
  try {
    const aisle = await Aisle.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: aisle,
    });
  } catch (error) {
    next(error);
  }
};

const getAllAisles = async (req, res, next) => {
  try {
    const aisles = await Aisle.find().populate('shop');
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: aisles,
    });
  } catch (error) {
    next(error);
  }
};

const getAisleById = async (req, res, next) => {
  try {
    const aisle = await Aisle.findById(req.params.id).populate('shop');
    if (aisle) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: aisle,
      });
    } else {
      res.status(404).json({ status: 404, message: "Aisle not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateAisle = async (req, res, next) => {
  try {
    const aisle = await Aisle.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (aisle) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: aisle,
      });
    } else {
      res.status(404).json({ status: 404, message: "Aisle not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteAisle = async (req, res, next) => {
  try {
    const aisle = await Aisle.findByIdAndDelete(req.params.id);
    if (aisle) {
      res.status(204).json({ status: 204, message: "Aisle deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Aisle not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAisle,
  getAllAisles,
  getAisleById,
  updateAisle,
  deleteAisle,
};
