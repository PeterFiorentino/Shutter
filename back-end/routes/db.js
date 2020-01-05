const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:7878/database"
const db = pgp(connectionString);

module.exports = db