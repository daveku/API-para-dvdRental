const cityModels = require("../models/cityModels");

const createCity = (req, res) => {
  cityModels
    .create(req.body)
    .then((row) => {
      res.status(201).send(row);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

const getOneCity = (req, res) => {
  cityModels
    .getOne(req.params.id)
    .then((row) => {
      res.status(200).send(row);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const getAllCities = (req, res) => {
  cityModels
    .getAll()
    .then((rows) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const updateCity = (req, res) => {
  cityModels
    .update(req.params.id, req.body)
    .then((row) => {
      res.status(200).send(row);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const deleteCity = (req, res) => {
  cityModels
    .deleteOne(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

module.exports = {
  createCity,
  getOneCity,
  getAllCities,
  updateCity,
  deleteCity,
};
