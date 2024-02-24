const { home, getResumeForm, createResume } = require("./app");

const { register, getRegister, getLogin, login, logout } = require("./user");


module.exports = {
  home,
  getResumeForm,
  createResume,
  register,
  getRegister,
  getLogin,
  login,
  logout,
};