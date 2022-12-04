const path = require("path");
const registerAuthRoutes = require("./auth.routes");

const registerStudentRoutes = require("./students");

const router = (app) => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(process.cwd(), "/public/index.html"));
	});

	registerStudentRoutes(app);
	registerAuthRoutes(app);
};

module.exports = router;
