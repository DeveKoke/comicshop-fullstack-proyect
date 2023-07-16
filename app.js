const express = require('express');
const error404 = require('./middlewares/error404');
require("./utils/db_mongo");
require('dotenv').config();

const app = express();
const port = "3000";

app.use(express.json()); // Habilitar tipo de dato a recibir

// Documentation api Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const comicsRoutes = require("./routes/comicsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");


// Rutas
app.use("/api", comicsRoutes);
app.use("/orders", ordersRoutes)

// Documentation api Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(error404); // Para ruta no encontrada (404)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


