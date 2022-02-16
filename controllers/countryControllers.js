const countryModels = require("../models/countryModels");

const createCountry = (req, res) => {
  countryModels
    .create(req.body)
    .then((row) => {
      res.status(201).send(row);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const getOneCountry = (req, res) => {
  countryModels
    .getOne(req.params.id)
    .then((row) => {
      res.status(200).send(row);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const getAllCountry = (req, res) => {
  countryModels
    .getAll()
    .then((rows) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const updateCountry = (req, res) => {
  countryModels
    .update(req.params.id, req.body)
    .then((row) => {
      res.status(404).send(row);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const deleteCountry = (req, res) => {
  countryModels
    .deleteOne(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

module.exports = {
  createCountry,
  getOneCountry,
  getAllCountry,
  updateCountry,
  deleteCountry,
};
