'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_income = sequelize.define('User_income', {
    type: DataTypes.STRING,
    value: DataTypes.DECIMAL(10,2),
    user_id: DataTypes.INTEGER
  }, {underscored: true});
  User_income.associate = function(models) {
    // associations can be defined here
  };
  return User_income;
};