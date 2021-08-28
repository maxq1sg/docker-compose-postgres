const knex = require("knex");

module.exports = knex({
  client: "postgres",
  connection: {
    host: "db",
    user: "postgres",
    password: "yaeblan",
    database: "postgres",
  },
});
