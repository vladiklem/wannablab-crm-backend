const mongoose = require("mongoose");

const MODEL_NAME = "teachers";

const scheme = new mongoose.Schema({
	fullName: { type: String, default: null },
	telNumber: { type: String, unique: true },
	email: { type: String, unique: true, default: null },
	students: { type: [String] },
});

const TeacherModel = mongoose.model(MODEL_NAME, scheme);

module.exports = TeacherModel;
