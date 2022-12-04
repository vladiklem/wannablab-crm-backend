const {
	checkDuplicateUserNameOrEmailMiddleware,
} = require("../midlewares/auth.midleware");

const controller = require("../controllers/auth.controller");

const registerAuthRoutes = (app) => {
	app.post(
		"/auth/signup",
		[checkDuplicateUserNameOrEmailMiddleware],
		controller.signup,
	);

	app.post("/auth/signin", controller.signin);
};

module.exports = registerAuthRoutes;
