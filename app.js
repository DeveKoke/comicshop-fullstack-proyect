const express = require('express');
const error404 = require('./middlewares/error404');
require('dotenv').config();

const app = express();
const port = "3000";

app.use(express.json()); // Habilitar tipo de dato a recibir




app.use(error404); // Para ruta no encontrada (404)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});