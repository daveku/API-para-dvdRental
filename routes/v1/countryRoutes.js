const express = require("express");
const router = express.Router();

const countryControllers = require("../../controllers/countryControllers");

router.post("/", countryControllers.createCountry);
router.get("/:id", countryControllers.getOneCountry);
router.get("/", countryControllers.getAllCountry);
router.put("/:id", countryControllers.updateCountry);
router.delete("/:id", countryControllers.deleteCountry);

module.exports = router;
