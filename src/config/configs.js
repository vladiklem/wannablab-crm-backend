const processEnv = require("./env.config");

const URL_BASE = "http://localhost";

const HTTP_CONFIG = {
    PORT: processEnv.PORT,
};

const CORS_CONFIG = {
  origin: `${URL_BASE}:${processEnv.PORT}`,
  optionsSuccessStatus: 200,
};

const MONGO_CONFIG = {
    URI: processEnv.MONGO_URI,
    OPTIONS: {},
};

module.exports = {
  CORS_CONFIG,
  MONGO_CONFIG,
  HTTP_CONFIG,
};
