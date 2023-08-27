const postgres = require("postgres");
require("dotenv").config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
// console.log(process.env);
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=endpoint%3D${ENDPOINT_ID}`;

const sql = postgres(URL, { ssl: "require" });

module.exports = sql;
