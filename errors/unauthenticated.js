const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    if (!message) this.message = ReasonPhrases.UNAUTHORIZED;
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
