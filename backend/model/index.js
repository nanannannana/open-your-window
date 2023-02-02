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

// foreign key 설정
// 1. User <=> Window
// 1-1. User(부모키) 설정
db.User.hasMany(db.Window, {
  foreignKey: 'user_id',
  sourceKey: 'user_id',
  onDelete: 'casecade',
  onUpdate: 'casecade',
});
// 1-2. Window(자식키) 설정
db.Window.belongsTo(db.User, {
  foreignKey: 'user_id',
  sourceKey: 'user_id',
  onDelete: 'casecade',
  onUpdate: 'casecade',
});

module.exports = db;
