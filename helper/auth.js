const ErrorHandler = require("./ErrorHandler");
const { OK, UNAUTHORIZED } = require("./status-codes");

const checkUserAuth = (user) => {
  if (!user) throw new ErrorHandler(UNAUTHORIZED, "Unauthorized User");
};

const checkUserType = (user, Type = []) => {
  if (!Type.includes(user.role))
    throw new ErrorHandler(UNAUTHORIZED, "Unauthorized User");
};

module.exports = {
  checkUserAuth,
  checkUserType,
};
