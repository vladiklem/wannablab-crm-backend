const mongoose = require("mongoose");
// const MongoDBstore = require("connect-mongodb-session");

const { MONGO_CONFIG } = require("../config/configs");

const setupDatabase = () => {
  mongoose
    .connect(MONGO_CONFIG.URI, MONGO_CONFIG.OPTIONS)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

const initSessionMongoStore = () => {
	
};

module.exports = setupDatabase;
