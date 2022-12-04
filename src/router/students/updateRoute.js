const StudentModel = require("../../models/student.model");

const initUpdateRoute = (req, res) => {
	const { id, ...studentObj } = req.body;

	StudentModel.findOneAndUpdate(({ _id }) => _id === id, studentObj, {
		new: true,
	}).then((response) => res.status(200).send(response));
};

module.exports = initUpdateRoute;
