module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  username: DataTypes.STRING,
  passwordHash: DataTypes.STRING,
  name: DataTypes.STRING,
}, {
  freezeTableName: true
})