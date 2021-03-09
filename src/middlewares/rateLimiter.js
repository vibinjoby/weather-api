const rateLimit = require("express-rate-limit");

const rateLimiterUsingThirdParty = rateLimit({
  windowMs: process.env.WINDOW_SIZE_IN_HOURS * 60 * 60 * 1000, // 24 hrs in millseconds
  max: process.env.MAX_WINDOW_REQUEST_COUNT,
  message: `You have exceeded the ${process.env.MAX_WINDOW_REQUEST_COUNT} requests in ${process.env.WINDOW_SIZE_IN_HOURS} hrs limit!`,
  headers: true,
});

module.exports = { rateLimiterUsingThirdParty };
