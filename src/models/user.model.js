const mongoose = require("mongoose");
const { ROLES } = require("../constants");

const MODEL_NAME = "user";

const userScheme = new mongoose.Schema({
	username: { type: String, default: null },
	email: { type: String, unique: true },
	password: { type: String },
	token: { type: String },
	roles: [Object.keys(ROLES)],
});

const UserModel = mongoose.model(MODEL_NAME, userScheme);

module.exports = UserModel;
