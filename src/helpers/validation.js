let { param, validationResult } = require("express-validator");

let validationErrors = (req, res, next) => {
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  let responseErrors = [];
  errors.array().map((err) => responseErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: responseErrors,
  });
};

const weatherValidator = () => {
  return [param("city").exists().trim()];
};
module.exports = {
  validationErrors,
  weatherValidator,
};
