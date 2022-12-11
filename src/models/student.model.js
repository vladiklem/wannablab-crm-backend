const mongoose = require("mongoose");
const { STATUSES } = require("../constants");

const MODEL_NAME = "student";

const studentScheme = new mongoose.Schema({
  fullName: { type: String, default: null },
  telNumber: { type: String, unique: true },
  email: { type: String, unique: true, default: null },
  teacher: { type: String, default: null },
  groupId: { type: String, default: null },
  corporateId: { type: String, unique: true },
  description: { type: String, default: "" },
  schedule: { type: String, default: "" },
  payments: {
    type: [{ date: String, comment: String, amount: Number }],
    default: [],
  },
  cancelledLessons: {
    type: [{ date: String, comment: String }],
    default: [],
  },
  lessons: {
    type: [{ date: String, lessonNum: Number, description: String }],
    default: [],
  },
  history: { type: [{ date: String, text: String }], default: [] },
  status: {
    type: [Object.keys(STATUSES).map((item) => item)],
    default: STATUSES.LEAD,
  },
});

const StudentModel = mongoose.model(MODEL_NAME, studentScheme);

module.exports = StudentModel;
