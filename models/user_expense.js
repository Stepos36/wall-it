'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_expense = sequelize.define('User_expense', {
    description: DataTypes.STRING,
    amount: DataTypes.DECIMAL(10,2),
    paydate: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {underscored: true});
  User_expense.associate = function(models) {
    // associations can be defined here
  };
  return User_expense;
};