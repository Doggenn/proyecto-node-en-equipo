const Shelf = require("../models/shelf.model");
const { HTTPSTATUSCODE } = require("../../utils/httpStatusCode");

const createShelf = async (req, res, next) => {
  try {
    const shelf = await Shelf.create(req.body);
    res.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: shelf,
    });
  } catch (error) {
    next(error);
  }
};

const getAllShelves = async (req, res, next) => {
  try {
    const shelfs = await Shelf.find().populate('shelf');
    res.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: shelfs,
    });
  } catch (error) {
    next(error);
  }
};

const getShelfById = async (req, res, next) => {
  try {
    const shelf = await Shelf.findById(req.params.id).populate('shelf');
    if (shelf) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: shelf,
      });
    } else {
      res.status(404).json({ status: 404, message: "Shelf not found" });
    }
  } catch (error) {
    next(error);
  }
};

const updateShelf = async (req, res, next) => {
  try {
    const shelf = await Shelf.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (shelf) {
      res.status(200).json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: shelf,
      });
    } else {
      res.status(404).json({ status: 404, message: "Shelf not found" });
    }
  } catch (error) {
    next(error);
  }
};

const deleteShelf = async (req, res, next) => {
  try {
    const shelf = await Shelf.findByIdAndDelete(req.params.id);
    if (shelf) {
      res.status(204).json({ status: 204, message: "Shelf deleted" });
    } else {
      res.status(404).json({ status: 404, message: "Shelf not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createShelf,
  getAllShelves,
  getShelfById,
  updateShelf,
  deleteShelf,
};
