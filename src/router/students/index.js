const StudentModel = require("../../models/student.model");
const initRegisterRoute = require("./registerRoute");
const initUpdateRoute = require("./updateRoute");

const registerStudentRoute = (app) => {
	app.get("/test", (req, res) => {
		res.send("Hello");
	});

	app.get("/students/list", (req, res) => {
		// #swagger.description = 'Get all students'
		StudentModel.find({}).then((students) => {
			res.status(200).send(students);
		});
	});

	app.post("/students/register", (req, res) => {
		initRegisterRoute(req, res);
	});

	app.post("/students/update", (req, res) => {
		initUpdateRoute(req, res);
	});
};

module.exports = registerStudentRoute;
