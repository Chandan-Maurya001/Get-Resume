const express = require("express");
const userRouter = express.Router();
const {
  dispatcher,
  isAuthenticated,
  isUnauthenticated,
} = require("../../middleware");

const { register, getLogin, getRegister,login, } = require("../../controllers/user");

userRouter.get("/register", isUnauthenticated(), (req, res, next) =>
  dispatcher(req, res, next, getRegister)
);

userRouter.get("/login", isUnauthenticated(), (req, res, next) =>
  dispatcher(req, res, next, getLogin)
);

userRouter.post("/register", isUnauthenticated(), (req, res, next) =>
  dispatcher(req, res, next, register)
);

userRouter.post("/login", login);

module.exports = userRouter;
