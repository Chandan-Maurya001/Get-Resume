const bcrypt = require("bcryptjs");
const { ErorrHandler, StatusCodes } = require("../helper");
const { SERVER_ERROR } = StatusCodes;

const salt = 10;

const hashPassword = async (password) => {
  try {
    const encryptedPassword = await bcrypt.hash(password, salt);
    return encryptedPassword;
  } catch (error) {
    throw new ErorrHandler(SERVER_ERROR, "Error while encrypting password");
  }
};

const compare = async (plainPassword, hashedPassword) => {
  try {
    const isTrue = await bcrypt.compare(plainPassword, hashedPassword);
    return isTrue;
  } catch (error) {
    throw new ErorrHandler(SERVER_ERROR, "Error while comparing password");
  }
};

module.exports = {
  hashPassword,
  compare,
};
