// 1.IMPORTS
// 1.1 librerias npm

const express = require("express");
const cors = require("cors");
// 1.2 documentos del proyecto
const { connectMongo } = require("./src/data/mongo");
//const { configCloudinary } = require("./src/utils/cloudinary/config");
// 1.3 las rutas:
// const userRouter = require("./src/api/routes/user.routes");
const userRouter = require("./src/api/routes/user.routes");
const aisleRouter = require("./src/api/routes/aisle.routes");
const productRouter = require("./src/api/routes/product.routes");
const shelfRouter = require("./src/api/routes/shelf.routes");
const shopRouter = require("./src/api/routes/shop.routes");
const { notFoundHandler, errorHandler } = require('./src/api/middlewares/error.middleware');


// 2. CONFIG
// 2.1 configuración de la app
require("dotenv").config(); // desde aquí se cargan las var de entorno del .env, hasta aquí no existen
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // usar urlencode para las urls.
connectMongo();
//configCloudinary();
// 2.2 cabeceras (https://developer.mozilla.org/en-US/docs/Web/API/Headers)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
// 2.3 cors (https://developer.mozilla.org/es/docs/Web/HTTP/CORS)
app.use(cors());

// 3. ENDPOINTS

// 3.1 endpoint para test básico
app.get("/", (req, res) => {
  res.send("Server is up");
});
// 3.2 las rutas de mis datos
app.use("/user", userRouter);
app.use("/aisle", aisleRouter);
app.use("/product", productRouter);
app.use("/shelf", shelfRouter);
app.use("/shop", shopRouter);

// 4. MANEJO DE ERRORES -> instanciamos las funciones de error.middleware
app.use(notFoundHandler);
app.use(errorHandler);


// 5. "ARRANCAR" EL SERVIDOR
app.listen(PORT, () => {
  console.log(`Server listening on port : ${PORT}`);
});
