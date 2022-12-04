const { StatusCodes } = require("http-status-codes");

const send = (res, data = {}) => {
	res.status(StatusCodes.OK).send(JSON.stringify(res.locals.data || data));
};

module.exports = { send };
