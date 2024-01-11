
const sequelize = require("../config/db");
const {DataTypes} = require("sequelize")
const User = require("./Users");
const Education = require("./Education");
const Project = require("./Projects");
const TechSkills = require("./TechSkills");

module.exports = {
  User,
  Education,
  Project,
  TechSkills,
};
