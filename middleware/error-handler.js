const { ReasonPhrases, StatusCodes } = require("http-status-codes");
const { CustomAPIError } = require("../errors/custom-api");

const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || ReasonPhrases.INTERNAL_SERVER_ERROR,
  };
  return res.status(customError.statusCode).json({ msg: customError.msg });
};

module.exports = errorHandler;
