const express = require("express");
const router = express.Router();

const actorController = require("../../controllers/actorControllers");

router.post("/", actorController.createActor); // Create actor
router.get("/:id", actorController.getOneActor); // Read one actor
router.get("/", actorController.getAllActors); // Read all actors
router.put("/:id", actorController.updateActor); // Update actor
router.delete("/:id", actorController.deleteActor); // Delete actor real

module.exports = router;
