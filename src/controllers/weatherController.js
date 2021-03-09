const Sentry = require("@sentry/node");
const axios = require("axios");

const fetchWeatherForCity = async (req, res) => {
  try {
    const { city } = req.params;
    const { data } = await axios.post(
      `${process.env.WEATHER_API_URL}?q=${city}&appid=${process.env.APP_ID}`
    );
    return res.json({ data }).end();
  } catch (error) {
    Sentry.captureException(error);
    res
      .status(500)
      .json({ error: `Server error ${error.message}` })
      .end();
  }
};
module.exports = {
  fetchWeatherForCity,
};
