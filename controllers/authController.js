const User = require("../models/User");
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const CustomError = require("../errors");

const register = async (req, res) => {
  const { email } = req.body;

  const emailAlreadyExists = await User.findOne({ email });
  console.log({ emailAlreadyExists });

  if (emailAlreadyExists) {
    throw new CustomError.BadRequestError("email already exists");
  }
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).send(user);
};

const login = async (req, res) => {
  res.send("login");
};

const logout = async (req, res) => {
  res.send("logout");
};

module.exports = { register, login, logout };
