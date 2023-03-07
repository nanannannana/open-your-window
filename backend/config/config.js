// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const development = {
  host: process.env.DB_HOST,
  database: process.env.DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
};

const production = {
  host: process.env.DB_HOST,
  database: process.env.DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
};

module.exports = { development, production };
