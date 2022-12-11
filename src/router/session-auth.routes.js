const sessionAuthController = require("../controllers/session-auth.controller");

const registerSessionAuthRoutes = (app) => {
    app.post("/v1/auth/signin", sessionAuthController.signin);

    app.post("/v1/auth/signup", sessionAuthController.signup);
};

module.exports = registerSessionAuthRoutes;