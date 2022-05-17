const knex = require('knex')
require("dotenv").config();

module.exports = knex({
  client: "postgres",
  connection: {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  },
})

