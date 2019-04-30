'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_income = sequelize.define('User_income', {
    description: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10,2),
    user_id: DataTypes.INTEGER
  }, {});
  User_income.associate = function(models) {
    // associations can be defined here
  };
  return User_income;
};