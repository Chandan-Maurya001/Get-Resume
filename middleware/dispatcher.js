const { ErrorHandler, StatusCodes, UserAuth } = require("../helper");

const { OK, BAD_REQUEST } = StatusCodes;
const { checkUserAuth, checkUserType } = UserAuth;

const dispatch = async (
  req,
  res,
  next,
  controller,
  allowedUser = undefined
) => {
  try {
    const { user } = req;
    if (allowedUser) {
      if (!Array.isArray(allowedUser)) {
        throw new ErrorHandler(
          BAD_REQUEST,
          "Allowed user's type must be an Array"
        );
      }
      // check user for auth and type for allowed access
      checkUserAuth(user);
      checkUserType(user, allowedUser);
    }
    const data = await controller(req, res, next);
    if (data != null || data != undefined)
      return res.status(OK).json({ status: 200, data: data });
  } catch (error) {
    next(error);
  }
};

module.exports = dispatch;
