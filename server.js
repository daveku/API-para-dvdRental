require("dotenv").config();
const express = require("express");

const actorRoutes = require("./routes/v1/actorRoutes");
const countryRoutes = require("./routes/v1/countryRoutes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use("/api/v1/actors", actorRoutes);
app.use("/api/v1/countries", countryRoutes);

// Iniciar el servidor
app.listen(8000, () => {
  console.log("Servidor iniciado en el puerto 8000");
});
