const sequelize = require("../../config/db");
// const { DataTypes } = require("sequelize");
const { User } = require("../../models");
const { hashPassword, compare } = require("../../utils");
const { StatusCodes, ErrorHandler } = require("../../helper");
const passport = require("passport");

const { OK, BAD_REQUEST, CONFLICT, UNAUTHORIZED } = StatusCodes;

const getRegister = (req, res, next) => {
  try {
    return res.render("register", {
      title: "Register | Get-Resume",
      home: "",
      aboutMe: "",
      blog: "",
      register: "active",
      login: "",
      resume: "",
      user: {
        name: req.user?.dataValues?.firstName,
        role: req.user?.dataValues.role,
      },
    });
  } catch (error) {
    next(error);
  }
};
const getLogin = (req, res, next) => {
  try {
    return res.render("login", {
      title: "Register | Get-Resume",
      home: "",
      aboutMe: "",
      blog: "",
      register: "",
      login: "active",
      resume: "",
      user: {
        name: req.user?.dataValues?.firstName,
        role: req.user?.dataValues.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

const register = async (req, res, next) => {
  try {
    // console.log(req.body);
    const { fname, lname, email, password } = req.body;
    /**
     * Check for duplicate records
     */
    const userMatch = await User.findOne({
      where: {
        email: email,
      },
    });
    if (userMatch) {
      const error = new Error("Someone already register with this email");
      error.status = CONFLICT;
      throw error; // error with valid message and statusCode
    }
    /**
     * hashing password
     */
    const hanshedPassword = await hashPassword(password);
    /**
     * creating new user
     */
    const newUser = await User.create({
      firstName: fname,
      lastName: lname,
      email: email,
      password: hanshedPassword,
    });
    if (newUser) return { message: "Registration Successful" }; // return with proper message
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const login = async (req, res, next) => {
  try {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/user/login",
    })(req,res,next);
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    req.session.destroy(error => {
      if (error) {
        return next(error);
      }
      console.log(req.originalUrl);
      res.clearCookie("__getresuem");
      return res.redirect("/user/login");
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {
  register,
  getRegister,
  getLogin,
  login,
  logout,
};
