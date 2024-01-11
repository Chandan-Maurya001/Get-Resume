const sequelize = require("../config/db");
const { DataTypes, } = require("sequelize");

/**
 * users model
 */
const Users = require("./Users");



const Education = sequelize.define(
  "Education",
  {
    courseName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instituteName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sessionStart: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sessionEnd: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * one-to-many relationship between user and educations
 */

Users.hasMany(Education,{as:"educations", onDelete:'CASCADE'});
Education.belongsTo(Users);

module.exports = Education;