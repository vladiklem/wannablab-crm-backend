const mongoose = require("mongoose");
const { ROLES } = require("../constants");

const MODEL_NAME = "user";

const userScheme = new mongoose.Schema({
  username: {
    type: String,
    // required: [true, "User should have a username!"],
    validate: {
      validator: (username) => isUsernameValid(username),
      message: "{VALUE} doesn't match requirements!",
    },
    default: null,
  },
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    lowercase: true,
    required: [
      true,
      "Email field is not provided. Cannot create user without email!",
    ],
    validate: {
      validator: (email) => isEmailValid(email),
      message: "{VALUE} is invalid email!",
    },
  },
  password: {
    type: String,
    required: [
      true,
      "Password is not provided. Cannot create user without password!",
    ],
    validate: {
      validator: (password) => isPasswordValid(password),
      message: "{VALUE} is invalid password",
    },
  },
  roles: [Object.keys(ROLES)],
});

const UserModel = mongoose.model(MODEL_NAME, userScheme);

module.exports = UserModel;
