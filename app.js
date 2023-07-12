const express = require('express');
const error404 = require('./middlewares/error404');
require("./utils/db_mongo");
require('dotenv').config();

const app = express();
const port = "3002";

app.use(express.json()); // Habilitar tipo de dato a recibir

const comicsRoutes = require("./routes/comicsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");


// Rutas
app.use("/api", comicsRoutes);
app.use("/orders", ordersRoutes)


app.use(error404); // Para ruta no encontrada (404)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


// {
//   "user_name": "Pepito",
//   "user_lastname": "Pérez González",
//   "adress": "calle toledo, 2, piso 3A",
//   "postalCode": 28031,
//   "products":[{"title": "Los cuatro Fantásticos 9. Correr.",
//     "price":"14.90"
//   }]
// }