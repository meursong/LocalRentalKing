const dotenv = require("dotenv"); //.env파일에서 가져옴 배포할때는 이 파일 숨겨둬야한다.

dotenv.config();

module.exports = {
  development: {
    username: "root",
    password: process.env.DB_PASSWORD, //코드 보안을 위해
    database: "react-nodebird",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "react-nodebird",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "react-nodebird",
    host: "127.0.0.1",
    port: "3306",
    dialect: "mysql",
  },
};
