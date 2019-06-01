'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency_holding = sequelize.define('Currency_holding', {
    symbol: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cashflow: DataTypes.DECIMAL(10,2),
    user_id: DataTypes.INTEGER
  }, {underscored: true});
  Currency_holding.associate = function(models) {
    // associations can be defined here
    Currency_holding.belongsTo(models.User)
    Currency_holding.hasMany(models.Currency_buy)
    Currency_holding.hasMany(models.Currency_sell)
  };
  return Currency_holding;
};