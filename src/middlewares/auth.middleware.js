const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const { ROLES } = require("../constants");
const UserModel = require("../models/user.model");
const processEnv = require("../config/env.config");

const checkDuplicateUserNameOrEmailMiddleware = (req, res, next) => {
	const { username, email } = req.body;

	UserModel.findOne({ username }).exec((err, user) => {
		if (err) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
				message: err,
			});
			return;
		}

		if (user) {
			res.status(StatusCodes.BAD_REQUEST).send({
				message: "Failed! Username is already in use!",
			});
		}
	});

	UserModel.findOne({
		email,
	}).exec((err, user) => {
		if (err) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
				message: err,
			});
			return;
		}

		if (user) {
			res.status(StatusCodes.BAD_REQUEST).send({
				message: "Failed! Email is already in use!",
			});
			return;
		}

		next();
	});
};

const verifyTokenMiddleware = (req, res, next) => {
	const token = req.headers["x-access-token"];

	if (!token) {
		return res
			.status(StatusCodes.FORBIDDEN)
			.send({ message: "No token provided!" });
	}

	jwt.verify(token, processEnv.SECRET, (err, decoded) => {
		console.log(decoded);
		if (err) {
			return res
				.status(StatusCodes.UNAUTHORIZED)
				.send({ message: "Unauthorized!" });
		}
		req.userId = decoded.id;
		next();
	});
};

const isAdminMiddleware = (req, res, next) => {
	UserModel.findById(req.userId).exec((err, user) => {
		if (err) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
				message: err,
			});
			return;
		}

		const isAdmin = user.roles.some((item) => item === ROLES.ADMIN);

		if (!isAdmin) {
			res.status(StatusCodes.FORBIDDEN).send({
				message: "Require Admin Role!",
			});
			return;
		}

		next();
	});
};

const authMiddlewares = {
	checkDuplicateUserNameOrEmailMiddleware,
	verifyTokenMiddleware,
	isAdminMiddleware,
};

module.exports = authMiddlewares;
