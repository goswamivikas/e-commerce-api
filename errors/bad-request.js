const { ReasonPhrases, StatusCodes } = require("http-status-codes");

const CustomAPIError = require("./custom-api");

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    if (!message) this.message = ReasonPhrases.BAD_REQUEST;
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
