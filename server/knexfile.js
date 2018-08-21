module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "localhost",
      database: process.env.DB_NAME || "edesia",
      user: process.env.DB_USER || "cyf",
      password: process.env.DB_PASSWORD || "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
