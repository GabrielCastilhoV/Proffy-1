import knex from 'knex';

const db = knex({
  client: process.env.APP_CLIENT,
  connection: {
    host: process.env.APP_HOST,
    user: process.env.APP_USER,
    password: process.env.APP_PASSWORD,
    database: process.env.APP_DB,
  },
});

export default db;
