
const sequelize = require("../config/db");
const {DataTypes} = require("sequelize")
const User = require("./Users");
const Education = require("./Education");
const Project = require("./Projects");
const TechSkills = require("./TechSkills");
const Experience = require("./Experience");
const Resume = require("./Resume");
const Personal = require("./Personal");
module.exports = {
  User,
  Education,
  Project,
  TechSkills,
  Experience,
  Resume,
  Personal,
};
