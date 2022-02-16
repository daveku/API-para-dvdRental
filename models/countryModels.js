const knex = require("../config");

const create = (bodyCountry) => {
  return knex
    .insert(bodyCountry)
    .into("country")
    .returning(["country_id", "country", "last_update"]);
};

const getOne = (countryId) => {
  return knex.select("*").from("country").where({ country_id: countryId });
};

const getAll = () => {
  return knex.select("*").from("country");
};

const update = (countryId, bodyCountry) => {
  return knex
    .update(bodyCountry)
    .from("country")
    .where({ country_id: countryId })
    .returning(["country_id", "country", "last_update"]);
};

const deleteOne = (countryId) => {
  return knex.delete().from("country").where({ country_id: countryId });
};

module.exports = {
  create,
  getOne,
  getAll,
  update,
  deleteOne,
};
