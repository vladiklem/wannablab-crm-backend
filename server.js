const { HTTP_CONFIG } = require("./src/config/configs");
const startServer = require("./src/app");

startServer(HTTP_CONFIG.PORT);
