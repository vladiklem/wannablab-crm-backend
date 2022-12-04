const mongoose = require("mongoose");
const processEnv = require("../config/env.config");

const setupDatabase = () => {
	mongoose
		.connect(processEnv.MONGO_URI)
		.then(() => {
			console.log("Connected to database");
		})
		.catch((error) => {
			console.error(error);
			process.exit(1);
		});
};

module.exports = setupDatabase;
