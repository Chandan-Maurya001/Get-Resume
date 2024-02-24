const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Resume = require("./Resume");

const Personal = sequelize.define(
  "Personal",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

Resume.hasOne(Personal, { as: "personal", onDelete: "CASCADE" });
Personal.belongsTo(Resume);

module.exports = Personal;