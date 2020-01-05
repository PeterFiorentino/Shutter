const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/database"
const db = pgp(connectionString);

module.exports = db