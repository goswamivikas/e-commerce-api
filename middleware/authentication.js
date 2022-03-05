const CustomError = require("../errors");
const { verifyToken } = require("../utils");

const authenticatedUser = async (req, res, next) => {
  const token = req.signedCookies.token;

  if (!token) {
    throw new CustomError.UnauthenticatedError("Authentication invalid");
  }

  try {
    const payload = verifyToken({ token });
    req.user = {
      name: payload.name,
      userId: payload.userId,
      role: payload.role,
    };
    console.log({ payload });
  } catch (error) {
    console.log(error);
  }

  next();
};

const authorizePermissions = (...roles) => {
  return async (req, res, next) => {
    if (!roles.includes(req?.user?.role)) {
      throw new CustomError.ForbiddenError("Unauthorized to access this route");
    }
    next();
  };
};

module.exports = { authenticatedUser, authorizePermissions };
