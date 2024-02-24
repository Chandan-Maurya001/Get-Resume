const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
// const Users = require("./Users");
const Resume = require("./Resume");


const Project = sequelize.define(
  "Projects",
  {
    projectName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    projectLink: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    projectDesc: {
      type: DataTypes.STRING,
      allowNull:true,
    }
  },
  {
    timestamps: true,
  }
);


// Users.hasMany(Project, { as: "projects", onDelete: "CASCADE" });
// Project.belongsTo(Users);
Resume.hasOne(Project, { as: "projects", onDelete: "CASCADE" });
Project.belongsTo(Resume);
module.exports = Project;