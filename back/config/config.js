const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD, //1234 보안을위해서
    database: "LocalRentalKing",
    host: "127.0.0.1", // mysql host는 기본적으로 127.0.0.1
    port: "3306",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "LocalRentalKing",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "LocalRentalKing",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
  },
};
