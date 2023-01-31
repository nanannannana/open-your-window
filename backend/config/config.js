const env = process.env;

const development = {
  host: 'localhost',
  database: env.DB,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  dialect: 'mysql',
};

const production = {
  host: 'localhost',
  database: env.DB,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  dialect: 'mysql',
};

module.exports = { development, production };
