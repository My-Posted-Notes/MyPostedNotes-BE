// Update with your config settings.
require('dotenv').config();
// var pgSettings = require('pg');

// pgSettings = {
//     host: process.env.PG_HOST,
//     database: process.env.PG_DATABASE,
//     user: process.env.PG_USER,
//     password: process.env.PG_PASS,
//     defaults: {
//       ssl: true
//     }
// }

// Define the database connection to use
// const dbConnection = process.env.DATABASE_URL || pgSettings;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/dev.sqlite3'
    },
    // needed when using foreign keys
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
    useNullAsDefault: true,
    migrations:{
      directory: './data/migrations'
    },
    seeds:{
      directory: './data/seeds'
    }
  },

//   staging: {
//     client: 'pg',
//     connection: dbConnection,
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//       directory: './data/dev/migrations',
//     },
//     seeds: {
//       directory: './data/dev/seeds'
//     },
//     ssl: true,
//   },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations:{
        directory: './data/migrations'
      },
      seeds:{
        directory: './data/seeds'
      },
    ssl: true,
  }


};
