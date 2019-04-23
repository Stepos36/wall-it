'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock_sell = sequelize.define('Stock_sell', {
    quantity: DataTypes.INTEGER,
    stock_symbol: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    date: DataTypes.DATE
  }, {underscored: true});
  Stock_sell.associate = function(models) {
    // associations can be defined here
  };
  return Stock_sell;
};