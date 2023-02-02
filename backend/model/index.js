/* eslint-disable @typescript-eslint/no-var-requires */
const Sequelize = require('sequelize');
const config = require('../config/config')['production'];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Window = require('./window')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
