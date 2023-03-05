require('dotenv').config();

const development = {
  host: 'localhost',
  database: process.env.DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
};

const production = {
  host: 'localhost',
  database: process.env.DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
};

module.exports = { development, production };
