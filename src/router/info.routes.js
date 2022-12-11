const { StatusCodes } = require("http-status-codes");

const { STATUSES } = require("../constants");

const registerInfoRoutes = (app) => {
    app.get("/v1/info/statuses", (req, res) => {
        res.status(StatusCodes.OK).send(Object.keys(STATUSES));
    });
}

module.exports = registerInfoRoutes;