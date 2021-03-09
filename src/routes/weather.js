const express = require("express");
const router = express.Router();

const { weatherValidator, validationErrors } = require("../helpers/validation");
const { fetchWeatherForCity } = require("../controllers/weatherController");

router.get(
  "/getWeatherByCity/:city",
  weatherValidator(),
  validationErrors,
  fetchWeatherForCity
);

module.exports = router;
