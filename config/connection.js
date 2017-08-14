var mysql = require("mysql");

exports.connection =
connection = mysql.createConnection({
  host: "localhost",
  port: 3000,
  user: "root",
  database: "burgers_db"
});
