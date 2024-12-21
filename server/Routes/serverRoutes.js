const express = require("express");
const router = express.Router();
const {
  getallCars,
  getCar,
  createcar,
  updatecar,
  deletecar,
} = require("../Controllers/carController");

router.route("/").get(getallCars).post(createcar);
router.route("/:id").get(getCar).put(updatecar).delete(deletecar);

module.exports = router;
