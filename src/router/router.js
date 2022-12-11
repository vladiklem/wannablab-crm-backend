const path = require("path");

const registerStudentRoutes = require("./students");

const router = (app) => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(process.cwd(), "/public/index.html"));
	});

	registerStudentRoutes(app);
};

module.exports = router;
