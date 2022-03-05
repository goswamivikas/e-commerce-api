const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message);
    if (!message) this.message = ReasonPhrases.FORBIDDEN;
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = ForbiddenError;
