const user = (Sequelize, DataTypes) => {
  return Sequelize.define(
    'user',
    {
      user_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
      user_name: {
        type: DataTypes.STRING(7),
        allowNull: false,
      },
      user_pw: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(16),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      underscored: true,
      tableName: 'user',
      freezeTableName: true,
      timestamps: false,
      paranoid: false,
    }
  );
};

module.exports = user;
