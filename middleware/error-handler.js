const { CustomAPIError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(err.status)
    .json({ msg: "something went wrong, try again later" });
};

module.exports = errorHandler;
