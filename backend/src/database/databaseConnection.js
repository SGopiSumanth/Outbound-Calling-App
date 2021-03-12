const { Pool } = require("pg");
const dotenv = require('dotenv');
dotenv.config();

const databaseConfig = { connectionString: process.env.DB_CONNECTION_STRING };
const databaseConnection = new Pool(databaseConfig);

module.exports = databaseConnection;
