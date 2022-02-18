const express = require("express");
const router = express.Router();

const cityControllers = "../../controllers/actorControllers";

router.post("/", cityControllers.createCity);
router.get("/:id", cityControllers.getOneCity);
router.get("/", cityControllers.getAllCities);
router.put("/:id", cityControllers.updateCity);
router.delete("/:id", cityControllers.deleteCity);

module.exports = router;
