// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: 5432,
      database: "ndt-form",
      user: "postgres",
      password: "Jackwebdev@123",
    },
    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      tableName: "knex_migrations",

    },
  },

};