const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const UserModel = require("../models/user.model");
const envConfig = require("../config/env.config");
const { ROLES } = require("../constants");

exports.signup = (req, res) => {
	const { email, password: pass, roles = [ROLES.USER] } = req.body;
	console.log(req.body);
	const password = bcrypt.hashSync(pass, 8);

	const user = new UserModel({
		email,
		password,
		roles,
	});

	user.save((err, user) => {
		if (err) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
				message: err,
			});
			return;
		}

		res.status(200).send(user);
	});
};

exports.signin = (req, res) => {
	const { email, password } = req.body;

	UserModel.findOne({ email }).exec((err, user) => {
		if (err) {
			res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
				message: err,
			});
			return;
		}

		if (!user) {
			res.status(StatusCodes.NOT_FOUND).send({
				message: "User Not found.",
			});

			return;
		}

		const isPasswordValid = bcrypt.compareSync(password, user.password);

		if (!isPasswordValid) {
			res.status(StatusCodes.UNAUTHORIZED).send({
				accessToken: null,
				message: "Invalid password!",
			});

			return;
		}

		const token = jwt.sign({ id: user._id }, envConfig.SECRET, {
			expiresIn: 86400,
		});

		res.status(StatusCodes.OK).send({
			id: user._id,
			username: user.username,
			email,
			accessToken: token,
		});
	});
};
