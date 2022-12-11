const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const { Headers: HEADERS } = require("http-headers-js");

const { CORS_CONFIG } = require("../config/configs");
const errorHandler = require("./errorHandler");

const setupMiddlewares = (app) => {
	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json({ limit: "500mb" }));
	app.use(helmet());
	app.use(errorHandler);
	app.use(cors(CORS_CONFIG));
	app.disable(HEADERS.X_POWERED_BY);

	initSessionMiddleware(app);

	// app.use((req, res, next) => {
	// 	res.header(
	// 		"Access-Control-Allow-Headers",
	// 		"x-access-token, Origin, Content-Type, Accept",
	// 	);
	// 	next();
	// });
};

module.exports = setupMiddlewares;
