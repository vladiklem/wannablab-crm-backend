const processEnv = require("./src/config/env.config");
const startServer = require("./src/app");

startServer(processEnv.PORT);
