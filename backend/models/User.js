module.exports = (sequelize, DataTypes) => sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  passwordHash: DataTypes.STRING,
  name: DataTypes.STRING
}, {
  freezeTableName: true
})