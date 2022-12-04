const StudentModel = require("../../models/student.model");

const initRegisterRoute = (req, res) => {
	const { id, firstName } = req.body;

	if (!firstName || !id) {
		res.status(400).json({
			status: 400,
			message: "ID and firstname should be present",
		});
	}

	const newStudent = new StudentModel({ id, firstName });

	newStudent.save((err, response) => {
		if (err) {
			console.error(err);
		} else {
			console.log(response);
		}
	});
};

module.exports = initRegisterRoute;
