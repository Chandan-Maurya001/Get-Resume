const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");




const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      allowNull: false,
      defaultValue: "user",
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: true,
      length:10,
    },
    address: {
      type: DataTypes.STRING,
      allowNull:true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = User;


// module.exports = function(sequelize, DataTypes){
//   return sequelize.define(
//     "User",
//     {
//       firstName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       lastName: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       sequelize,
//       timestamps: true,
//     }
//   );
// };