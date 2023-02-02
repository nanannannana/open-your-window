const window = (Sequelize, DataTypes) => {
  return Sequelize.define(
    'window',
    {
      num: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      country: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
      },
      window_date: {
        type: DataTypes.DATE(),
      },
      img: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT('medium'),
      },
      user_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      like_num: {
        type: DataTypes.INTEGER,
      },
      tags: {
        type: DataTypes.TEXT('medium'),
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      underscored: true,
      tableName: 'windoow',
      freezeTableName: true,
      timestamps: false,
      paranoid: false,
    }
  );
};

module.exports = window;
