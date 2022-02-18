const knex = require("../config");

const create = (bodyCity) => {
  return knex
    .insert(bodyCity)
    .into("city")
    .returning(["city_id", "city", "country_id", "last_update"]);
};

const getOne = (cityId) => {
  return knex.select("*").from("city").where({ city_id: cityId });
};

const getAll = () => {
  return knex.select("*").from("city");
};

const update = (cityId, bodyCity) => {
  return knex
    .update(bodyCity)
    .from("country")
    .where({ city_id: cityId })
    .returning(["city_id", "city", "country_id", "last_update"]);
};

const deleteOne = (cityId) => {
  return knex.delete().from("city").where({ city_id: cityId });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleteOne,
};
