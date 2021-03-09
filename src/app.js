const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const Sentry = require("@sentry/node");
require("dotenv").config();

keys = module.exports = process.env;

// CORS
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, HEAD, PUT, PATCH, POST, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, authorization"
  );
  next();
});
app.use(express.static(__dirname));
app.use(express.json({ extended: true, limit: "50mb" }));

//Error logging
Sentry.init({
  dsn:
    "https://f126592690df46e28d048a3228a1de5b@o439611.ingest.sentry.io/5574557",
  tracesSampleRate: 1.0,
});

//routes
const weather = require("./routes/weather");

app.use("/weather", weather);

//Enabling cors
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.listen(process.env.PORT || 5000);
