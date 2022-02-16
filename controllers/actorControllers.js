const actorModels = require("../models/actorModels");

const createActor = (req, res) => {
  actorModels
    .create(req.body)
    .then((row) => {
      res.status(201).send(row);
    })
    .catch((err) => {
      res.status(400).send(err.message);
    });
};

const getOneActor = (req, res) => {
  actorModels
    .getOne(req.params.id)
    .then((row) => {
      res.status(200).send(row);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const getAllActors = (req, res) => {
  actorModels
    .getAll()
    .then((rows) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const updateActor = (req, res) => {
  actorModels
    .update(req.params.id, req.body)
    .then((row) => {
      res.status(200).send(row);
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

const deleteActor = (req, res) => {
  actorModels
    .deleteOne(req.params.id)
    .then(() => {
      res.status(204).send();
    })
    .catch((err) => {
      res.status(404).send(err.message);
    });
};

module.exports = {
  createActor,
  getOneActor,
  getAllActors,
  updateActor,
  deleteActor,
};
