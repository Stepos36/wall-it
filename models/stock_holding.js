'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock_holding = sequelize.define('Stock_holding', {
    symbol: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    cashflow: DataTypes.DECIMAL,
    user_id: DataTypes.INTEGER
  }, {underscored: true});
  Stock_holding.associate = function(models) {
    // associations can be defined here
    Stock_holding.belongsTo(models.User)
    Stock_holding.hasMany(models.Stock_buy)
    Stock_holding.hasMany(models.Stock_sell)
  };
  return Stock_holding;
};