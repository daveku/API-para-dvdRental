const knex = require("../config");

const create = (bodyActor) => {
  return knex
    .insert(bodyActor)
    .into("actor")
    .returning(["actor_id", "first_name", "last_name"]);
};

const getOne = (actorId) => {
  return knex.select("*").from("actor").where({ actor_id: actorId });
};

const getAll = () => {
  return knex.select("*").from("actor");
};

const update = (actorId, bodyActor) => {
  return knex
    .update(bodyActor)
    .from("actor")
    .where({ actor_id: actorId })
    .returning(["actor_id", "first_name", "last_name"]);
};

const deleteOne = (actorId) => {
  return knex.delete().from("actor").where({ actor_id: actorId });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleteOne,
};
