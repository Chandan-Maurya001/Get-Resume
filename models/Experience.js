const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

// const Users = require("./Users");
const Resume = require("./Resume");

const Experience = sequelize.define(
  "Experience",
  {
    role: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    endDate: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * one-to-many relationship between user and experience
 */

// Users.hasMany(Experience, { as: "experiences", onDelete: "CASCADE" });
// Experience.belongsTo(Users);
Resume.hasOne(Experience, { as: "experiences", onDelete: "CASCADE" });
Experience.belongsTo(Resume);

module.exports = Experience;