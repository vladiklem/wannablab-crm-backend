const {
	checkDuplicateUserNameOrEmailMiddleware,
} = require("../middlewares/auth.middleware");

const controller = require("../controllers/auth.controller");

const registerAuthRoutes = (app) => {
	app.post(
		null,
		[checkDuplicateUserNameOrEmailMiddleware],
		controller.signup,
	);

	app.post(null, controller.signin);
};

module.exports = registerAuthRoutes;
