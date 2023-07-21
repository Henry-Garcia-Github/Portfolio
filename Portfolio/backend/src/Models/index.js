const mysql = require("mysql2/promise");
require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database");
    connection.release();
  }
});

const models = {};
const table = "Projects";
const ProjectsManager = require("./ProjectsManager");
models.projects = new ProjectsManager({ table });
models.projects.setDatabase(pool);
module.exports = models;
