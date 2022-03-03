const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    if (!message) this.message = ReasonPhrases.NOT_FOUND;
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
