const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");


/**
 * users model
 */
const Users = require("./Users");

const Resume = sequelize.define(
  "Resume",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      default: `Resume${this.id}`
    }
  },
  {
    timestamps: true,
  }
);


/**
 * one-to-many relationship between user and resume
 */

Users.hasMany(Resume, { as: "resumes", onDelete: "CASCADE" });
Resume.belongsTo(Users);

module.exports = Resume;
