const express = require("express");

const router = require("./router/router");
const setupMiddlewares = require("./midlewares");
const systemController = require("./controllers/systemController");
const setupDatabase = require("./database/database");

process.on("unhandledRejection", (err) => {
	console.error(err.message);
});

const startServer = (port) => {
	const app = express();

	setupMiddlewares(app);
	setupDatabase();
	router(app);
	systemController(app);

	app.listen(port, () => {
		console.log(`My Application Running on http://localhost:${port}/`);
	});
};

module.exports = startServer;
