const sequelize = require("../config/db");
const { DataTypes} = require("sequelize");
const Users = require("./Users");
const Resume = require("./Resume");


const TechSkills = sequelize.define(
  "TechSkills",
  {
    domainName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    skillsName: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    timestamps: true,
  }
);

// Users.hasMany(TechSkills, { as: "techskills", onDelete: "CASCADE" });
// TechSkills.belongsTo(Users);
Resume.hasOne(TechSkills, { as: "techskills", onDelete: "CASCADE" });
TechSkills.belongsTo(Resume);

module.exports = TechSkills;



