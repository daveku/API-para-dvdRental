require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas

// Iniciar el servidor
app.listen(8000, () => {
  console.log("Servidor iniciado en el puerto 8000");
});
