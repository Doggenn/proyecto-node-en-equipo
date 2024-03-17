const express = require("express");
const aisleRouter = express.Router();
const { createAisle,
    getAllAisles,
    getAisleById,
    updateAisle,
    addAisleCover,
    deleteAisle, } = require("../controllers/aisle.controller");
const { upload, uploadToCloudinary } = require('../middlewares/file.middleware')
const { isAuth } = require('../middlewares/auth.middleware')

// Ruta para crear un nuevo álbum
aisleRouter.post("/",[isAuth], createAisle);
aisleRouter.get("/", getAllAisles);
aisleRouter.get("/:id", getAisleById);
aisleRouter.put("/:id", [isAuth], updateAisle);
aisleRouter.patch("/:id", [isAuth] ,updateAisle);
aisleRouter.delete("/:id", [isAuth] ,deleteAisle);

module.exports = aisleRouter;
