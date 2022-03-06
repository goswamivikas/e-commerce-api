const CustomError = require("../errors");

const checkPermissions = (requestUser, resourceUserId) => {
  console.log("check permissions");
  if (requestUser.role === "admin") return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new CustomError.ForbiddenError("Not authorised to access this route");
};

module.exports = checkPermissions;
