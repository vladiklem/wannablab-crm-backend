const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const errorHandler = require("./errorHandler");

const setupMiddlewares = (app) => {
	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json({ limit: "500mb" }));
	app.use(helmet());
	app.use(errorHandler);
	app.use(cors());
	// app.use((req, res, next) => {
	// 	res.header(
	// 		"Access-Control-Allow-Headers",
	// 		"x-access-token, Origin, Content-Type, Accept",
	// 	);
	// 	next();
	// });
};

module.exports = setupMiddlewares;
