const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialectOptions: {
      multipleStatements: true,
      decimalNumbers: true,
    },
    dialect: "mysql",
    timezone: "+05:30",
    host: process.env.DB_HOST,
    define: {
      freezTableName: true, // to prevent the auto-pluralization of table's name
    },
    logging: console.log,
  },
  {
    pool: {
      max: 1000,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelize;
