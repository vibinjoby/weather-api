const Sentry = require("@sentry/node");
const axios = require("axios");
const { BASE_URL } = require("../configs/constants");

const fetchWeatherForCity = async (req, res) => {
  try {
    const { city } = req.params;
    const { data } = await axios.post(
      `${BASE_URL}?q=${city}&appid=${process.env.APP_ID}`
    );
  } catch (error) {
    Sentry.captureException(error);
    res.status(500).json({ error: `Server error ${error.message}` });
  }
};
module.exports = {
  fetchWeatherForCity,
};
